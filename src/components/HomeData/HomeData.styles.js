import { Container } from 'react-bootstrap';
import styled from 'styled-components';

export const HomeData = styled(Container)`
    display: flex;
    width: auto;
    margin-top: 0.6rem;
    min-height: 40rem;
    
    h2 {
        color:white;
    }
    .col {
        width:100%;
    }
    img {
        margin-top: 1rem;
        transition: filter 1s ease;
        opacity:0.5;
        filter: brightness(0.29) contrast(2.2);
        &:hover {
            opacity:1;
            filter: brightness(0.50) contrast(1.5);
        }
    }

`;