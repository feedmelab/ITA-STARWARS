/* eslint-disable import/no-anonymous-default-export */
import { Nav } from './Nav.styles';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
export default () => (

  <Container>
      <Row className="mt-5 d-flex align-items-center">
        <Col></Col>
        <Col className="d-flex justify-content-center">
             <Nav>
              <ul>
                <li><Link to="/">HOME</Link> | </li>
                <li><Link to="/starships">STARSHIPS</Link> | </li>
                <li><Link to="/cinema">CINEMA</Link></li>
              </ul>
            </Nav>
        </Col>
        <Col className="d-flex justify-content-end align-self-end"></Col>
      </Row>
    </Container>
);

