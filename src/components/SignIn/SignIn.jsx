import React from 'react';
import { Container } from 'react-bootstrap';
import { SignInWrapper } from './SignIn.styles';

const SignIn = () => {
    
    return (
    <SignInWrapper>
   <form>
   <Container>
      <h3>Please provide your information</h3>

      <div className="form-group">
          <label>First name</label>
          <input type="text" className="form-control" placeholder="First name" />
      </div>

      <div className="form-group">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
      </div>

      <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Enter email" />
      </div>

      <div className="form-group mb-5">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" />
      </div>

      <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
      </Container>
  </form>
  </SignInWrapper>
);
    }
export default SignIn;
