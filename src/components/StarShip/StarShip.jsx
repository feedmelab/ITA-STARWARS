
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import { Foto, Span, Display }  from './StarShip.styles';



const StarShip =  ({data}) => {
  const ship = data[0];
  const starshipId = ship.url.match(/([^/]*)\/*$/)[1];
  const [ image , setImage ] = useState(`https://starwars-visualguide.com/assets/img/starships/${starshipId}.jpg`);
  Object.assign(ship, {image: image});   
  console.log(ship)
  return (
  <Container>
    <Row>
      <Col className="d-flex justify-content-center align-items-center">
        <Foto>
          <img src={ship.image} alt="A view of" />
          <h3 className='mt-3 text-danger'>{ship.name}</h3>
          <Display>
            <p><Span>Model:</Span> {ship.model}</p>
            <p><Span>Manufacturer:</Span> {ship.manufacturer}</p>
          </Display>
        </Foto>
      </Col>
    </Row>
  </Container>
);
  }
export default StarShip;
