/* eslint-disable import/no-anonymous-default-export */
import { Col, Container, Row } from "react-bootstrap";
import LoginBox from "./LoginBox/LoginBox";
import Logo from "./Logo/Logo"
import { Header } from './Header.styles';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default ({openModal}) => {
  const [isLogedIn, setIsLogedIn] = useState(window.localStorage.getItem('isLogedIn')) 
  const navigate = useNavigate();
  const logout = () => {
    console.log(isLogedIn);
    setIsLogedIn(false);
    window.localStorage.setItem('isLogedIn', false);
    navigate("/home");
  }
  return (
  <Header>
    <Container>
      <Row className="mt-5 d-flex align-items-center">
        <Col></Col>
        <Col>
            <Logo />
        </Col>
        <Col className="d-flex justify-content-end align-self-end">
        {
          window.localStorage.getItem('isLogedIn')==='true'? (<button role="link" className="btn btn-link text-white text-decoration-none" onClick={logout}>Log Out</button>):(<LoginBox openModal={openModal}/>)
        }
        </Col>
      </Row>
    </Container>
  </Header>
);
}
