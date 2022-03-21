/* eslint-disable import/no-anonymous-default-export */
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Starships from "../components/Starships/Starships";
import Nav from "../components/Nav/Nav";

export default () => 
(
<div className="App">
    <Header/>
    <Container className="d-flex justify-content-center align-items-center">
        <Nav></Nav>
    </Container>
    <section>
        <Starships />
    </section>
</div>
);
