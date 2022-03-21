/* eslint-disable import/no-anonymous-default-export */
import { useEffect, useState } from 'react';
import axios from 'axios';
import {  Col, Container, Row, Button, Image } from 'react-bootstrap';
import { Cardy, smallButton } from './Starships.styles';
import { useNavigate } from 'react-router-dom';

export default () => {
  
  const [starships, setStarships]  = useState([]);
  const [currentStr, setCurrentStr] = useState([]);

  const navigate = useNavigate();
  
  useEffect(()=>{
    const fetchData = async () => {
      const data = await axios.get("https://swapi.dev/api/starships/?page=1");
      const resultParsed = data.data;
      setStarships(resultParsed);
      setCurrentStr([...resultParsed.results]) 
    }
    fetchData()
      .catch(console.error);
  },[]);


  
  return (
    <Container>
    <Row>
      <Col className="d-flex mt-5 flex-column justify-content-between align-items-center">
        {
          currentStr.map((c, key)=>{
            return (
              <Cardy key={key}>
                <Image />
                <h4>{c.name}</h4>
                <h5>{c.model}</h5>
                <Button variant="outline-dark" size="sm" onClick={()=>navigate(`/starship/${key}`, {dades: currentStr})}>+ info</Button>
              </Cardy>
              )
          })
        }
      </Col>
    </Row>
    </Container>
    )
}
