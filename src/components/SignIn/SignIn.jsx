import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SignInWrapper } from "./SignIn.styles";

const SignIn = ({ setShowModal }) => {
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [passwordError, setPasswordError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [nameError, setNameError] = useState("");

	// States for checking the errors
	const [error, setError] = useState(false);

	const [finalObject, setFinalObject] = useState({ user: { name: "", email: "", password: "" } });

	// Handling the name change
	const handleName = (e) => {
		setNameError("");
		if (e.target.validity.valid) {
			setName(e.target.value);
		} else {
			setNameError("Valid name...must provide");
		}
	};
	const handlePast = (e) => {
		setEmailError("");
		if (e.target.validity.valid) {
			setEmail(e.target.value);
		} else {
			setEmailError("Valid email...must provide");
		}
	};
	// Handling the email change
	const handleEmail = (e) => {
		if (e.target.value) {
			setEmail(e.target.value);
		}
	};

	// Handling the password change
	const handlePassword = (e) => {
		setPasswordError("");
		if (e.target.validity.valid) {
			setPassword(e.target.value);
		} else {
			setPasswordError("Valid password...must provide");
		}
	};

	// Handling the form submission
	const setLocalStorage = (key, value) => {
		try {
			window.localStorage.setItem(key, value);
		} catch (error) {
			console.error(error);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (name === "" || email === "" || password === "") {
			setError(true);
		} else {
			const userInfo = { name, email, password };
			setLocalStorage("user", JSON.stringify(userInfo));
			console.log("We are void", name);
			setError(false);
			navigate("/home");
			setShowModal(false);
		}
	};

	return (
		<SignInWrapper>
			<form>
				<Container>
					<h3>Your information...please provide</h3>

					<div className="form-group">
						<label>First name</label>
						<input
							type="text"
							className="form-control"
							value={name}
							onChange={handleName}
							aria-required={true}
							min-length="3"
							placeholder="Name"
							required
						/>
						<small id="nameHelp" className="text-danger form-text">
							{nameError}
						</small>
					</div>

					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							value={email}
							onChange={handleEmail}
							onBlur={handlePast}
							required
							placeholder="Enter email"
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
							value={password}
							onChange={handlePassword}
							required
							placeholder="Enter password"
						/>
						<small id="passwordHelp" className="text-danger form-text">
							{passwordError}
						</small>
					</div>

					<button type="submit" onClick={handleSubmit} className="btn btn-dark btn-lg btn-block">
						Sign in
					</button>
				</Container>
			</form>
		</SignInWrapper>
	);
};
export default SignIn;
