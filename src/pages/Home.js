/* eslint-disable import/no-anonymous-default-export */
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import HomeData from "../components/HomeData/HomeData";
import Nav from "../components/Nav/Nav";

export default () => 
(
<div className="App">
    <Header/>
    <Container className="d-flex justify-content-center align-items-center">
        <Nav></Nav>
    </Container>
    <section>
        <HomeData />
    </section>
</div>
);
