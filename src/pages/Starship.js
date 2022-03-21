import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "../components/Header";

import Nav from "../components/Nav/Nav";
import StarShip from "../components/StarShip/StarShip";


const Starship = ({props}) => {
    const { id } = useParams();
    return (
    <div className="App">
        <Header/>
        <Container className="d-flex justify-content-center align-items-center">
            <Nav></Nav>
        </Container>
        <section>
            <StarShip/>
        </section>
    </div>)
}
export default Starship;
