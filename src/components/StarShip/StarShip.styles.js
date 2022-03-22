import styled, { keyframes } from 'styled-components';

const showIt = keyframes`
    to{ opacity: 1}
`;
export const Foto = styled.div`
    margin-top: 2rem;
    text-align: left;
    width: auto;
    img {
         object-fit: cover;
         border-bottom:2px dotted #888;
         opacity: 0;
         animation: 2s ${showIt} forwards;
    }
`;
export const Display = styled.div`
margin-top: 1.8rem;
color:#333;
 opacity: 0;
animation: 3s ${showIt} forwards;
`
export const Span = styled.span`
color: #888;
 opacity: 0;
animation: 3s ${showIt} forwards;
`

