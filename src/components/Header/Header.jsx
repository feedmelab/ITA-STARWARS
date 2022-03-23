/* eslint-disable import/no-anonymous-default-export */
import { Col, Container, Row } from "react-bootstrap";
import LoginBox from "./LoginBox/LoginBox";
import Logo from "./Logo/Logo"
import { Header } from './Header.styles';
import { useState } from "react";


export default ({openModal}) => {
  const [isLogedIn,setIsLogedIn] = useState(window.localStorage.getItem('isLogedIn')===true? window.localStorage.getItem('isLogedIn'):false) 
  const logout = () => {
    setIsLogedIn(false);
    window.localStorage.setItem('isLogedIn', false);
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
          isLogedIn===false? (<LoginBox openModal={openModal}/>):(<button role="link" className="btn btn-link" onClick={()=>logout()}>Log Out</button>)
        }
        </Col>
      </Row>
    </Container>
  </Header>
);
}
