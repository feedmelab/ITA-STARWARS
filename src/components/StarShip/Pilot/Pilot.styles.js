import styled from "styled-components";

export const PilotCard = styled.div`
	display: flex;
	flex-direction: column;
	width: 15rem;
	height: auto;
	border-radius: 0.5rem;
	border: 1px solid #111;
	background-color: rgba(0, 0, 100, 0.6);
	overflow: hidden;
	margin-top: 0.9rem;
	margin-right: 1rem;
	box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.5);
`;

export const PilotImage = styled.div`
	display: flex;
	width: 100%;
	height: 10rem;
	img {
		object-fit: cover;
		object-position: top;
		box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.5);
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
		font-size: 0.9rem;

		line-height: 0.3rem;
		color: #fff;
	}
	p span {
		font-weight: normal;
		color: #888;
		font-size: 0.9rem;
		text-transform: capitalize;
		font-family: "Pacifico";
	}
`;
