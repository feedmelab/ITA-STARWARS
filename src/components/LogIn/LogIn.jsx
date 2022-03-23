import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
 

const LogIn = ({setShowModal}) => 
{
  const [isLogedIn, setIsLogedIn] = useState(
    window.localStorage.getItem("isLogedIn")
  );
  
  const setLocalStorage = value => {
    try {
      setIsLogedIn(value);
      window.localStorage.setItem("isLogedIn",value);
    } catch(error){
      console.error(error)
    }

    }
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");

  const handleValidation = (event) => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (!password.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      setpasswordError(
        "Only Letters and minimum 8 characters"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    setLocalStorage(handleValidation());
    setShowModal(false);
  };

return (
  <div className="LogInWrapper">
      <form id="loginform" onSubmit={loginSubmit}>
          <Container>
            {
              (isLogedIn)? 
              (
                    <h3>Whats your problem?<br />Your already in!!</h3>
              ) : (
                <><h3>Please provide valid credentials to access</h3>
            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email" aria-describedby="emailHelp" onChange={(event) => setEmail(event.target.value)} />
                <small id="emailHelp" className="text-danger form-text">
                    {emailError}
                  </small>
            </div>
            <div className="form-group mb-5">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" aria-describedby="passworderror" onChange={(event) => setPassword(event.target.value)} />
                <small id="passworderror" className="text-danger form-text">
                    {passwordError}
                  </small>
            </div>
            <button type="submit" className="btn btn-dark btn-lg btn-block">Log in</button></>)
            }
          </Container>
      </form>
  </div>
);
}

export default LogIn;
