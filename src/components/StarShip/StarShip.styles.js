import styled, { keyframes } from 'styled-components';

const showIt = keyframes`
    to{ opacity: 1}
`;
export const Foto = styled.div`
    margin-top: 2rem;
    background: linear-gradient(rgba(0,0,0,0.05), rgba(60,0,0.01));
    border-bottom-left-radius: 5rem;
    border-bottom-right-radius: 5rem;
    box-shadow: 0 0.4rem 1rem rgba(0,0,0,0.5);
    width: 100%;
    & img {
        display: flex;

        width: 75%;
        object-fit: cover;
        
        opacity: 0;
        animation: 2s ${showIt} forwards;
    }
    ul {
        dispay: flex;
        flex-direction: row;
        justify-content: flex-end;
        list-style: none;
    }
    li {
        dispay: flex;
        align-items: flex-end;
        width: auto;    
    }
`;
export const Display = styled.div`
margin-top: 1.8rem;
color:#999;
opacity: 0;
animation: 3s ${showIt} forwards;
`
export const Span = styled.span`
color: #fff;
 opacity: 0;
animation: 3s ${showIt} forwards;
`
export const Caja = styled.div`
display: flex;
margin-top: 0.8rem;
margin-bottom: 3rem;
max-width: 100%;
flex-direction: row;
flex-wrap: wrap;
border-top: 1px solid rgba(255,255,255,0.1);
padding-top: 1rem;
justify-content: space-between;
align-content: space-around;
img {
    width: 100% !important;
}
`
