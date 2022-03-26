
import { Card, CardImg, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Foto, Span, Display, Caja }  from './StarShip.styles';
import { useNavigate } from 'react-router-dom';
import Pilot from './Pilot/Pilot';
import axios from 'axios';

import { BsArrowLeftShort } from   'react-icons/bs';
import Films from '../Films/Films';



const StarShip =  ({data}) => {

  const [ship, setShip] = useState(data[0]);
  const starshipId = ship.url.match(/([^/]*)\/*$/)[1];
  const [ image , setImage ] = useState(`https://starwars-visualguide.com/assets/img/starships/${starshipId}.jpg`);
  Object.assign(ship, {image: image});   
  const navigate = useNavigate();

//pilots
const [urlPilots, setUrlPilots] = useState(ship.pilots);
const [dades, setDades] = useState([]);
const [isLoading, setIsLoading] = useState(true);



useEffect(()=>{
  setDades([])
  const imageIds = ship.pilots.map((pilot)=>pilot.match(/([^/]*)\/*$/)[1]);
  const fetchData = async (url, index) => {
    
    const data =  await axios.get(url)
    const pilot = data.data;
    Object.assign(pilot, {image: `https://starwars-visualguide.com/assets/img/characters/${imageIds[index]}.jpg`})
    setDades((prev)=>[...prev, pilot])
    setIsLoading(false);
    }
  urlPilots.forEach((element, index) => {
    setIsLoading(true);
    fetchData(element, index)
      .catch((error)=> console.error(error))
  });
},[])

  // fi pilots

  //films
  const [urlFilms, setUrlFilms] = useState(ship.films);
  const [films, setFilms] = useState([]);
  ;

  useEffect(()=>{
  
  const fetchData = async (url, index) => {
    const imageIds = ship.films.map((film)=>film.match(/([^/]*)\/*$/)[1]);
    const data =  await axios.get(url)
    const film = data.data;
    Object.assign(film, {image: `https://starwars-visualguide.com/assets/img/films/${imageIds[index]}.jpg`})
    setFilms((prev)=>[...prev, film])
    // setIsLoading(false);
    }
  urlFilms.forEach((element, index) => {
    fetchData(element, index)
      .catch((error)=> console.error(error))
  });
},[urlFilms])
  // fi films
console.log(films)
  return (
  <Container>
    <Row>
      <Col className="d-flex mt-5 flex-row flex-wrap cursor-pointer justify-content-between align-content-center">
        <Foto>
        
        <Container className="d-flex flex-column pt-5">
          <img src={ship.image} onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src="/big-placeholder.jpg";
           }} className="align-self-center shadow" alt="A view of" />
              <ul className='list-group'>
                <li className='list-item'><button className="btn me-3 btn-link text-white text-decoration-none" role="link"  onClick={()=>navigate(`/starships`, { state: { data: 'por aqui le pasare los datos de paginacion al padre'} })}><BsArrowLeftShort />back</button></li>
              </ul>
            <div className='mt-3 pt-3 d-flex flex-row justify-content-center'>
              <h3 className='mt-3 pt-3 text-light'>{ship.name}</h3>
              
            </div>
          
          <Display>
            <p><Span>Model:</Span> {ship.model}</p>
            <p><Span>Manufacturer:</Span> {ship.manufacturer}</p>
            {(ship.pilots.length>0)?(<h3 className='mt-3 text-light'>Pilots</h3>):null}
            {
              (ship.pilots.length>0)?(
                <Caja>
                {
                  (isLoading)? <><Spinner animation="border" size="sm" className='text-light' />Loading external data...please wait</>:<></>
                }
                {
                  dades.map((pilot, index)=>(<Pilot dadesPilot={pilot} key={index}/>))
                }
               </Caja>
              ):null
            }
            {(ship.films.length>0)?(<h3 className='mt-5 text-light'>Films</h3>):null}
            {
              (ship.films.length>0)?(
                <Caja>
                {/* {
                  (isLoading)? <><Spinner animation="border" size="sm" className='text-light' />Loading external data...please wait</>:<></>
                } */}
                {
                  films.map((film, index)=>(<Films dadesFilm={film} key={index}/>))
                }
               </Caja>
              ):null
            }
            
          </Display>
        </Container>
          <Display>

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
