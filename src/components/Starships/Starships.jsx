/* eslint-disable import/no-anonymous-default-export */
import { useEffect, useState } from 'react';
import axios from 'axios';
import {  Col, Container, Row, Button, Image } from 'react-bootstrap';
import { Cardy } from './Starships.styles';
import { useNavigate } from 'react-router-dom';

export default () => {
  
  const [starships, setStarships]  = useState([]);
  const [currentStr, setCurrentStr] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [insetLoad, setInsetLoad] = useState(true);
  const navigate = useNavigate();
  
  useEffect(()=>{
    toggleLoading(true);
    const fetchData = async () => {
      const data = await axios.get(`https://swapi.dev/api/starships/?page=${currentPage}`);
      const resultParsed = data.data;
      const refill = [...starships, ...resultParsed.results];
      setStarships(refill);
      setCurrentStr(refill);
      toggleLoading(false);
    }
    fetchData()
      .catch(console.error);
  },[currentPage]);
  
  const getSpecificItem = (id) => {
    const item = currentStr.filter((a, index)=>id===index);
    return {...item};
  }

  const fetchMore = () => {
  setCurrentPage(currentPage+1);
  }
  
  const toggleLoading = (flag) => {
    setInsetLoad(flag);
  }
  return (
    <Container>
    <Row>
      <Col className="d-flex mt-5 flex-row flex-wrap cursor-pointer justify-content-between align-content-center">
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
        {insetLoad?<p className="loading text-light">Loading from an external API, please wait...</p>:<button  className="btn btn-link" role="link" onClick={()=>fetchMore()}>View more...</button>}
      </Col>
    </Row>
    <Row><Col></Col></Row>
    </Container>
    )
}
