/* eslint-disable import/no-anonymous-default-export */
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import Nav from "../components/Nav/Nav";
import Modal from "../components/Modal/Modal";
import ReactPlayer from 'react-player/youtube'


export default () => 
{
   const [isLogedIn, setIsLogedIn] = useState(window.localStorage.getItem('isLogedIn'));
    const [url, setUrl] = useState("https://www.youtube.com/watch?v=cen-yPSEOiE");

   const handleURL = (url) => {
        setUrl(url);
   }
    const [showModal, setShowModal] = useState(false);
    const [wichPage, setWichPage] = useState('login');

    const openModal = (page)=> {
        setWichPage(page?'login':'logup');  
        setShowModal(prev => !prev);
    }
    return (
        <div className="App">
        <Modal showModal={showModal} setShowModal={setShowModal} wichPage={wichPage}/>
        <Header openModal={openModal} />
        <Container className="d-flex justify-content-center align-items-center">
            <Nav></Nav>
        </Container>
        <section>
         {
        (window.localStorage.getItem('isLogedIn')==='true')? (<Container className="mt-5 d-flex align-items-center justify-content-center flex-column">
                <Row className="d-flex flex-column">
                    <Col>
                        <ReactPlayer url={url} playing={true} />
                    </Col>
                </Row>
                <Row className="d-flex mt-5">
                    <Col>
                        <button className="btn border-0 bg-dark p-1 text-white font-size-base" 
                        onClick={()=>handleURL("https://www.youtube.com/watch?v=E4iJOpla4AU")}>Jeri Fallen Order</button>
                        <button className="ms-3 btn border-0 bg-dark p-1 text-white font-size-base" 
                        onClick={()=>handleURL("https://www.youtube.com/watch?v=cen-yPSEOiE")}>Episode X</button>
                    </Col>
                </Row>
            </Container>):<Container className="d-flex justify-content-center align-items-center h-100"><Row><Col className="text-warning mt-5 h-100 d-flex justify-content-center align-items-center">In order to visit this page you must be logged in.</Col></Row></Container> 
        }
        </section>
        </div>);
}