/* eslint-disable import/no-anonymous-default-export */
import { Col, Container, Row } from "react-bootstrap";
import LoginBox from "./LoginBox/LoginBox";
import Logo from "./Logo/Logo";
import { Header, LogOutButton } from "./Header.styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default ({ openModal }) => {
	const [isLogedIn, setIsLogedIn] = useState(JSON.stringify(window.localStorage.getItem("isLogedIn")));
	const navigate = useNavigate();
	const user = JSON.parse(window.localStorage.getItem("user"));
	const logout = () => {
		console.log(isLogedIn);
		setIsLogedIn(false);
		window.localStorage.setItem("isLogedIn", false);
		navigate("/home");
	};
	return (
		<Header>
			<Container>
				<Row className="mt-5 d-flex align-items-center">
					<Col></Col>
					<Col>
						<Logo />
					</Col>
					<Col className="d-flex flex-row justify-content-end align-self-end">
						{window.localStorage.getItem("isLogedIn") === "true" ? (
							<>
								<span className="text-light d-flex mr-2">Hi! {user.name}</span>,<LogOutButton onClick={logout}>logout</LogOutButton>
							</>
						) : (
							<LoginBox openModal={openModal} />
						)}
					</Col>
				</Row>
			</Container>
		</Header>
	);
};
