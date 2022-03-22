import { Card } from 'react-bootstrap';
import styled, { css, keyframes } from 'styled-components';
const showIt = keyframes`
    to{ opacity: 1}
`;
const smurfIt = keyframes`
    to{ border-radius: 50rem}
`;
export const Cardy = styled(Card)`
  display:flex;
  width: 75%;
  height: auto;
  padding: 2rem;
  margin-bottom: 1rem;
  background-color: #2233;
  align-items: start;
  justify-content: start;
  opacity: 1;
  border-radius: 1rem;
  //animation: 2s ${showIt} forwards;
  h4 {
      color: #fff;
      font-size: 1rem;
  }
  h5 {
      color: #777;
      font-size: 0.8rem;
  }
  &:hover{
      animation: 2s ${smurfIt} forwards !important;
  }
`;
export const smallButton = css`
    width: 1rem;
    border: 1px solid #333;
    border-radius:30%;
`;
