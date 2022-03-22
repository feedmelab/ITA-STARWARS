
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Foto }  from './StarShip.styles';



const StarShip =  ({data}) => {
  const ship = data[0];
  const starshipId = ship.url.match(/([^/]*)\/*$/)[1];
  const [ image , setImage ] = useState(`https://starwars-visualguide.com/assets/img/starships/${starshipId}.jpg`);
  Object.assign(ship, {image: image});   

  return (
  <Container>
    <Row>
      <Col className="d-flex flex-column align-items-center">
        <Foto>
          <img src={ship.image} alt="A view of" />
        </Foto>
        <h2>{ship.name}</h2>
        <h3>{ship.model}</h3>
        <h4>{ship.manufacturer}</h4>
      </Col>
    </Row>
  </Container>
);
  }
export default StarShip;
