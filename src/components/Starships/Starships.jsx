/* eslint-disable import/no-anonymous-default-export */
import { useEffect, useState } from 'react';
import axios from 'axios';
import {  Col, Container, Row, Button, Image } from 'react-bootstrap';
import { Cardy, smallButton } from './Starships.styles';
import { useNavigate } from 'react-router-dom';

export default () => {
  
  const [starships, setStarships]  = useState([]);
  const [currentStr, setCurrentStr] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();
  
  useEffect(()=>{
    const fetchData = async () => {
      const data = await axios.get(`https://swapi.dev/api/starships/?page=${currentPage}`);
      const resultParsed = data.data;
      setStarships([...resultParsed.results]);
      setCurrentStr([...resultParsed.results])
      
    }
    fetchData()
      .catch(console.error);
  },[currentPage]);
  
  const getSpecificItem = (id) => {
    const item = currentStr.filter((a, index)=>id===index);
    return {...item};
  }

  
  const paginateFetch = () => {
    console.log("currentpage:",currentPage);
  }
  
  
  return (
    <Container>
    <Row>
      <Col className="d-flex mt-5 flex-column cursor-pointer justify-content-between align-items-center">
      
        {
          currentStr.map((c, key)=>{
            return (
              <Cardy role="button" key={key} onClick={()=>navigate(`/starship/${key}`, { state: { data: getSpecificItem(key)} })}>
                <Image />
                <h4>{c.name}</h4>
                <h5>{c.model}</h5>
              </Cardy>
              )
          })
        }
        <p className="loading">Loading from Star Wars API...please wait.</p>
      </Col>
    </Row>
    </Container>
    )
}
