
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import { Foto, Span, Display }  from './StarShip.styles';
import { useNavigate } from 'react-router-dom';



const StarShip =  ({data}) => {
  const ship = data[0];
  const starshipId = ship.url.match(/([^/]*)\/*$/)[1];
  const [ image , setImage ] = useState(`https://starwars-visualguide.com/assets/img/starships/${starshipId}.jpg`);
  Object.assign(ship, {image: image});   
  console.log(ship)
  const navigate = useNavigate();
  return (
  <Container>
  <Row>
    <Col>
      
    </Col>
  </Row>
    <Row>
      <Col className="d-flex justify-content-center align-items-center">
       
        <Foto>
        <div>
          <ul className='list-group'>
            <li className='list-item'><button className="btn btn-link" role="link"  onClick={()=>navigate(`/starships`, { state: { data: 'void'} })}>Back to StarShips</button></li>
        </ul>
        </div>
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
