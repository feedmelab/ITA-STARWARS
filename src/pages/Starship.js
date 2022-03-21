import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "../components/Header";

import Nav from "../components/Nav/Nav";


const Starship = () => {
    const { id } = useParams();
    return (
    <div className="App">
        <Header/>
        <Container className="d-flex justify-content-center align-items-center">
            <Nav></Nav>
        </Container>
        <section>
            <Container>
                <h2>news soon {id}</h2>
            </Container>
        </section>
    </div>)
}
export default Starship;
