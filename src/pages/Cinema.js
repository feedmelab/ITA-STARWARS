/* eslint-disable import/no-anonymous-default-export */
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import Nav from "../components/Nav/Nav";
import ReactPlayer from 'react-player/youtube'


export default () => 
{
   const [url, setUrl] = useState("https://www.youtube.com/watch?v=cen-yPSEOiE")
   const handleURL = (url) => {
        setUrl(url);
   }
    return (
        <div className="App">
        <Header/>
        <Container className="d-flex justify-content-center align-items-center">
            <Nav></Nav>
        </Container>
        <section>
            <Container className="mt-5 d-flex align-items-center justify-content-center flex-column">
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
            </Container>
        </section>
        </div>);
}