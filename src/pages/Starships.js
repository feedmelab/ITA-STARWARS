/* eslint-disable import/no-anonymous-default-export */
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import Starships from "../components/Starships/Starships";
import Nav from "../components/Nav/Nav";
import Modal from "../components/Modal/Modal";

export default () => {
	const [isLogedIn, setIsLogedIn] = useState(window.localStorage.getItem("isLogedIn"));
	const [showModal, setShowModal] = useState(false);
	const [wichPage, setWichPage] = useState("login");
	const openModal = (page) => {
		setWichPage(page ? "login" : "logup");
		setShowModal((prev) => !prev);
	};
	//console.log(isLogedIn)
	return (
		<div className="App">
			<Modal showModal={showModal} setShowModal={setShowModal} wichPage={wichPage} />
			<Header openModal={openModal} />
			<Container className="d-flex justify-content-center align-items-center">
				<Nav></Nav>
			</Container>
			<section>
				{window.localStorage.getItem("isLogedIn") === "true" ? (
					<Starships />
				) : (
					<Container className="d-flex justify-content-center align-items-center h-100">
						<Row>
							<Col className="text-warning mt-5 h-100 d-flex justify-content-center align-items-center">
								In order to visit this page you must be logged in.
							</Col>
						</Row>
					</Container>
				)}
			</section>
		</div>
	);
};
