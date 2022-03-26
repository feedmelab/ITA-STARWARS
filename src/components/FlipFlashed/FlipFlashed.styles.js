import styled, { keyframes } from "styled-components";
export const FlipFlashed = styled.div`
	display: flex;
	text-align: center;
	margin-top: 2rem;
	& div:nth-child(n) {
		text-transform: uppercase;
	}
	& p:nth-child(n) {
		text-transform: uppercase;
		opacity: 1 !important;
	}
`;

const flashIt = keyframes`
    to{ opacity:1;filter: brightness(0.50) contrast(1.5);box-shadow: inset 0px 0px 20px rgba(255,255,255,0.3);}
`;
export const FlipFoto = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	background: linear-gradient(rgba(00, 0, 0, 0.9), rgba(120, 255, 255, 0.1)), url("Star-Wars-Wallpaper.jpg");
	background-size: cover;
	opacity: 0;
	filter: brightness(0.19) contrast(2.2);
	box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.8);
	animation: 10s ${flashIt} forwards;
`;

export const FlipText = styled.div`
	display: flex;
	display: block;
	align-items: center;
	padding: 6rem;
	width: inherit;
	height: 80%;
	font-size: 4vw;
	font-weight: bold;
	line-height: 12vh;

	& p {
		color: white !important;
		filter: drop-shadow(0 0 0.75rem black);
		font-family: "Dosis", sans-serif;
	}
`;
