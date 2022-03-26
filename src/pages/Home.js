/* eslint-disable import/no-anonymous-default-export */
import { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import HomeData from "../components/HomeData/HomeData";
import Modal from "../components/Modal/Modal";
import Nav from "../components/Nav/Nav";

export default () => {
	const [showModal, setShowModal] = useState(false);
	const [wichPage, setWichPage] = useState("login");

	const openModal = (page) => {
		setWichPage(page ? "login" : "logup");
		setShowModal((prev) => !prev);
	};
	return (
		<div className="App">
			<Modal showModal={showModal} setShowModal={setShowModal} wichPage={wichPage} />
			<Header openModal={openModal} />
			<Container className="d-flex justify-content-center align-items-center">
				<Nav></Nav>
			</Container>
			<section>
				<HomeData />
			</section>
		</div>
	);
};
