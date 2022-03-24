import styled from 'styled-components';
export const FlipFlashed = styled.div`
display: flex;
text-align: center;
margin-top: 2rem;

& div:nth-child(n){
    text-transform: uppercase;
    
}
& p:nth-child(n){
    text-transform: uppercase;
    opacity: 1 !important;
}
`;

export const FlipFoto = styled.div`
    display: flex;
    width:100%;
    height:100%;
    background: linear-gradient(rgba(00,0,0,0.9), rgba(120,255,255,.1)), url("Star-Wars-Wallpaper.jpg");
    background-size: cover;
    transition: filter 4s ease;
    opacity:0.1 !important;
    filter: brightness(0.18) contrast(2.2);
    &:hover {
        opacity:0.8 !important;
        filter: brightness(0.59) contrast(1.5);
    }
`;
export const FlipText = styled.div`
display: flex;
display: block;
align-items: center;
padding: 6rem;
width: inherit;
height: 80%;
font-size: 2vw;
font-weight: bold;
line-height: 8vh;
& p {
    color: white !important;
    filter: drop-shadow(0 0 0.75rem crimson);
}
`;

