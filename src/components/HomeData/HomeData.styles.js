import { Container } from 'react-bootstrap';
import styled from 'styled-components';

export const HomeData = styled(Container)`
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");

    display: flex;
    width: auto;
    margin-top: 0.6rem;
    min-height: 40rem;
    font-family: 'Roboto', sans serif;
    h2 {
        color:white;
        text-align: center
    }
    .col {
        width:100%;
    }
    img {
        margin-top: 1rem;
        transition: filter 1s ease;
        opacity:0.5;
        filter: brightness(0.19) contrast(2.2);
        &:hover {
            opacity:1;
            filter: brightness(0.50) contrast(1.5);
        }
    }

`;