import React, { useState } from "react";
import { Container } from "react-bootstrap";

const LogIn = ({ setShowModal }) => {
	const [isLogedIn, setIsLogedIn] = useState(window.localStorage.getItem("isLogedIn") ? window.localStorage.getItem("isLogedIn") : false);
	const [user, setUser] = useState(window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")) : {});
	const [val, setVal] = useState();
	const setLocalStorage = (value) => {
		try {
			setIsLogedIn(value);
			window.localStorage.setItem("isLogedIn", value);
		} catch (error) {
			console.error(error);
		}
	};
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [passwordError, setpasswordError] = useState("");
	const [emailError, setemailError] = useState("");

	const handleValidation = (event) => {
		let formIsValid = true;

		if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) || !user.email) {
			formIsValid = false;
			const str = user.email === undefined ? "Email present...is not." : "Valid Email...is not";
			setemailError(str);
			return false;
		} else {
			formIsValid = false;
			if (email && email !== user.email) {
				setemailError("Registed is...Email not");
				formIsValid = false;
			} else {
				setemailError("");
				formIsValid = true;
			}
		}

		if (!password.match(/^[a-zA-Z]{8,22}$/) && password !== user.password) {
			formIsValid = false;
			setpasswordError("minimum 8 characters, Letters Only and");
			return false;
		} else {
			setpasswordError("");
			formIsValid = true;
		}

		return formIsValid;
	};

	const loginSubmit = (e) => {
		e.preventDefault();
		if (handleValidation()) {
			setLocalStorage("true");
			setShowModal(false);
		}
	};

	return (
		<div className="LogInWrapper">
			<form id="loginform" onSubmit={loginSubmit}>
				<Container>
					{
						<>
							<h3>valid credentials to access, please provide</h3>
							<div className="form-group">
								<label>Email</label>
								<input
									type="email"
									className="form-control"
									placeholder="Enter email"
									aria-describedby="emailHelp"
									onChange={(event) => setEmail(event.target.value)}
									required
								/>
								<small id="emailHelp" className="text-danger form-text">
									{emailError}
								</small>
							</div>
							<div className="form-group mb-5">
								<label>Password</label>
								<input
									type="password"
									className="form-control"
									placeholder="Enter password"
									aria-describedby="passworderror"
									onChange={(event) => setPassword(event.target.value)}
									required
								/>
								<small id="passworderror" className="text-danger form-text">
									{passwordError}
								</small>
							</div>
							<button type="submit" className="btn btn-dark btn-lg btn-block">
								Log in
							</button>
						</>
					}
				</Container>
			</form>
		</div>
	);
};

export default LogIn;
