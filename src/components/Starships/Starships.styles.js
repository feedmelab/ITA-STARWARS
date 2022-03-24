import { Card } from 'react-bootstrap';
import styled, { css, keyframes } from 'styled-components';
const showIt = keyframes`
    to{ opacity: 1}
`;
const smurfIt = keyframes`
    to{ border-radius: 50rem;
    opacity: 1;}
`;
export const Cardy = styled(Card)`
  display:flex;
  width: 250px;
  height: auto;
  padding: 2rem;
  opacity: 0.8;
  margin-bottom: 1rem;
  background-color: #333;
  align-items: start;
  justify-content: start;
  border-radius: 1rem;
  
  h4 {
      color: #fff;
      font-size: 1rem;
  }
  h5 {
      color: #777;
      font-size: 0.8rem;
  }
  &:hover{
      animation: 1.5s ${smurfIt} forwards !important;
  }
`;
export const smallButton = css`
    width: 1rem;
    border: 1px solid #333;
    border-radius:30%;
`;
