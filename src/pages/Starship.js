
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";

import Nav from "../components/Nav/Nav";
import StarShip from "../components/StarShip/StarShip";

//const { id, color } = state;

const Starship = () => {
    const location = useLocation();
    const {state} = location;
    return (
    <div className="App">
        <Header/>
        <Container className="d-flex justify-content-center align-items-center">
            <Nav></Nav>
        </Container>
        <section>
            <StarShip data={state.data}/>
        </section>
    </div>)
}
export default Starship;
