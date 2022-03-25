import styled from 'styled-components';
import {Card} from "react-bootstrap";

export const FilmsBlock = styled.div`
 display: flex;
 
 margin: 0;
 margin-top: 2rem;
 flex-direction: column;
 width: auto;
 h3 {
    display: flex;
    color: rgb(220,53,69);
    font-weight: bold;

    padding-bottom: 1.1rem;
    border-bottom: 1px solid rgba(255,255,255,0.1);
 }
 img {
    object-fit: cover;
    width: 100%;
 }
 `
 export const FilmBlock = styled(Card)`
     display: flex;
 flex-direction: column;
 width: 15rem;
 height: auto;
 border-radius: 1rem;
 
 background-color: rgba(23,23,23,0.6);
 overflow: hidden;
 margin-top: 0.9rem;
 margin-right: 1rem;
 box-shadow: 0 0.4rem 1rem rgba(0,0,0,0.5);
  h4 {
    display: flex;
    color: white;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 2rem;
    padding-left: 1rem;
    font-size: 1rem;
    padding-bottom: 1.1rem;
 }
`;
