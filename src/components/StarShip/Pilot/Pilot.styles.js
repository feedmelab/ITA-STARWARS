import styled from 'styled-components';

export const PilotCard = styled.div`
 display: flex;
 flex-direction: column;
 width: 15rem;
 height: auto;
 border-radius: 1rem;
 border: 1px solid #111;
 background-color: rgba(11,222,222,0.2);
 overflow: hidden;
 margin-top: 0.9rem;
 box-shadow: 0 0.4rem 1rem rgba(0,0,0,0.3);
`;

export const PilotImage = styled.div`
 display: flex;
 width: 100%;
 height: 10rem;
 img {
     object-fit: cover;
 }

`;

export const PilotText = styled.div`
 display: flex;
 width: auto;
 flex-direction: column;
 margin: 0;
 padding: 1rem;
 height: auto;
 p {
     margin-top: 0.3rem;
     font-size: 1rem;
     font-weight: bold;
     line-height: 0.3rem;
     color: black;
 }
 p span {
    font-weight: normal;
 }
`;