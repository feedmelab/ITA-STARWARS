import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
//import { Test } from './StarShip.styles';

const StarShip = (props) => {
  const dades = {props};
  console.log(dades);
  return (
  <Container>
    <Row>
      <Col>
        <img src={props.data} alt="A view of" />
        <p>Proves {props.data}</p>
      </Col>
    </Row>
  </Container>
);
  }


export default StarShip;
