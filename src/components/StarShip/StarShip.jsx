
import { Card, CardImg, Col, Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Foto, Span, Display, CajaPilotos }  from './StarShip.styles';
import { useNavigate } from 'react-router-dom';
import Pilot from './Pilot/Pilot';
import axios from 'axios';



const StarShip =  ({data}) => {

  const [ship, setShip] = useState(data[0]);
  const starshipId = ship.url.match(/([^/]*)\/*$/)[1];
  const [ image , setImage ] = useState(`https://starwars-visualguide.com/assets/img/starships/${starshipId}.jpg`);
  Object.assign(ship, {image: image});   
  const navigate = useNavigate();

//pilots
const [urlPilots, setUrlPilots] = useState(ship.pilots);

const [dades, setDades] = useState([]);

useEffect(()=>{
  setDades([])
  const imageIds = ship.pilots.map((pilot)=>pilot.match(/([^/]*)\/*$/)[1]);
 const fetchData = async (url, index) => {
    await axios.get(url)
      .then(async(res) => {
        const pilot = await res.data;
        Object.assign(pilot, {image: `https://starwars-visualguide.com/assets/img/characters/${imageIds[index]}.jpg`})
        setDades((prev)=>[...prev, pilot])
      })
  }
  urlPilots.forEach((element, index) => {
     fetchData(element, index);
  });
},[urlPilots, ship])

  // fi pilots

  return (
  <Container>
    <Row>
      <Col className="d-flex justify-content-center align-items-center">
        <Foto>
        <div>
          <ul className='list-group'>
            <li className='list-item'><button className="btn btn-link text-white text-decoration-none" role="link"  onClick={()=>navigate(`/starships`, { state: { data: 'por aqui le pasare los datos de paginacion al padre'} })}>Back to StarShips</button></li>
        </ul>
        </div>
          <img src={ship.image} alt="A view of" />
          <h3 className='mt-3 text-danger'>{ship.name}</h3>
          <Display>
            <p><Span>Model:</Span> {ship.model}</p>
            <p><Span>Manufacturer:</Span> {ship.manufacturer}</p>
            {(ship.pilots.length>0)?(<h3 className='mt-3 text-danger'>Pilots</h3>):null}
            {
              (ship.pilots.length>0)?(
                <CajaPilotos>
                {
                  dades.map((pilot, index)=>(<Pilot dadesPilot={pilot} key={index}/>))
                }
               </CajaPilotos>
              ):null
            }
            
          </Display>
        </Foto>
      </Col>
    </Row>
    <Row>
      <Col>
         <Foto>
          
          </Foto>
      </Col>
    </Row>
  </Container>
);
  }
export default StarShip;
