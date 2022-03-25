/* eslint-disable import/no-anonymous-default-export */
import { useEffect, useState } from 'react';
import axios from 'axios';
import {  Col, Container, Row, Image, Spinner } from 'react-bootstrap';
import { Cardy, LoadingMessage, LoadMoreButton } from './Starships.styles';
import { useNavigate } from 'react-router-dom';

import { MdDownloading} from "react-icons/md";

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
  

  const getSpecificItemById = (id) => {
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
      <Col className="d-flex mt-5 flex-row flex-wrap justify-content-center align-content-center">
        {
          currentStr.map((c, key)=>{
            return (
              <Cardy role="button" key={key} onClick={()=>navigate(`/starship/${key}`, { state: { data: getSpecificItemById(key)} })}>
                <Image />
                <h4>{c.name}</h4>
                <h5>{c.model}</h5>
              </Cardy>
              )
          })
        }
        
      </Col>
    </Row>
    <Row><Col className="d-flex mt-1 mb-5 flex-row flex-wrap  justify-content-center align-content-center">{insetLoad?<div className='d-flex flex-row'><Spinner animation="border" size="sm" className='text-light me-2' /><LoadingMessage> Loading from an external API, please wait...</LoadingMessage></div>:<LoadMoreButton  className="btn btn-link text-warning text-decoration-none text-sm" role="link" onClick={()=>fetchMore()}><MdDownloading/> VIEW MORE</LoadMoreButton>}</Col></Row>
    </Container>
    )
}
