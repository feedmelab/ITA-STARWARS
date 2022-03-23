/* eslint-disable import/no-anonymous-default-export */
import { Col, Container, Row } from "react-bootstrap";
import LoginBox from "./LoginBox/LoginBox";
import Logo from "./Logo/Logo"
import { Header } from './Header.styles';


export default ({openModal}) => (
  <Header>
    <Container>
      <Row className="mt-5 d-flex align-items-center">
        <Col></Col>
        <Col>
            <Logo />
        </Col>
        <Col className="d-flex justify-content-end align-self-end"><LoginBox openModal={openModal}/></Col>
      </Row>
    </Container>
  </Header>
);

