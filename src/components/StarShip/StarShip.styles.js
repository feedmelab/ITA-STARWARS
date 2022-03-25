import styled, { keyframes } from 'styled-components';

const showIt = keyframes`
    to{ opacity: 1}
`;
export const Foto = styled.div`
    margin-top: 2rem;
    
    width: 100%;
    img {
        width: 100%;
        object-fit: cover;
        border-bottom:2px dotted #888;
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
export const CajaPilotos = styled.div`
display: flex;
margin-top: 0.8rem;
max-width: 600px;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-content: space-around;
`
