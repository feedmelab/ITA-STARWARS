import { Button } from "bootstrap";
import styled, { keyframes } from "styled-components";
const showIt = keyframes`
    to{ opacity:1}
`;
export const Header = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	border-bottom: 1px solid #232424;
	padding-bottom: 2rem;
	span {
		font-family: "Pacifico", sans-serif !important;
		color: white;
	}
	span > span {
		color: #999;
	}
`;
export const Espan = styled.span``;
export const LogOutButton = styled.button`
	display: flex;
	border: none;
	border-left: 0.03rem solid #444;
	background: none;
	color: #fff;
	font-size: 0.7rem;
	opacity: 0.5;
	&:hover {
		animation: 0.5s ${showIt} forwards;
	}
`;
