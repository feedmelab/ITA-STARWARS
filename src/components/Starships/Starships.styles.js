import { Card, Button } from "react-bootstrap";
import styled, { css, keyframes } from "styled-components";

const smurfIt = keyframes`
    to{  transform: skewX(0deg) skewY(0deg);
    opacity: 1;}
`;
export const Cardy = styled(Card)`
	display: flex;
	width: 250px;
	height: auto;
	padding: 2rem;
	opacity: 0.8;
	margin-bottom: 2rem;
	background-color: #333;
	align-items: start;
	justify-content: center;
	border-radius: 1rem;
	transform: perspective(500px) rotateY(45deg);

	h4 {
		color: #fff;
		font-size: 1rem;
		font-family: "Pacifico", sans-serif;
	}
	h5 {
		color: rgba(120, 255, 120, 0.6);
		font-size: 0.8rem;
		font-family: "Work Sans", sans-serif;
	}
	&:hover {
		animation: 0.5s ${smurfIt} forwards !important;
		cursor: url(https://cdn.custom-cursor.com/db/4554/32/arrow2611.png), default !important;
	}
`;
export const LoadMoreButton = styled(Button)`
	display: flex;
	align-self: flex-end;
	width: auto;
	background-color: #000;
	line-height: 0.65rem;
	height: 1.5rem;
	padding: auto;
	opacity: 0.8;
	transform: perspective(500px) rotateY(45deg);
	border: none;
	font-size: 0.6rem;
	&:hover {
		background-color: #000;
		animation: 0.5s ${smurfIt} forwards !important;
		cursor: pointer !important;
	}
`;
export const LoadingMessage = styled.p`
	font-size: 0.7rem;

	color: #999;
`;
export const smallButton = css`
	width: 1rem;
	border: 1px solid #333;
	border-radius: 30%;
`;
