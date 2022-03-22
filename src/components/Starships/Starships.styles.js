import { Card } from 'react-bootstrap';
import styled, { css, keyframes } from 'styled-components';
const showIt = keyframes`
    to{ opacity: 1}
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
  opacity: 0;
  animation: 2s ${showIt} forwards;
  h4 {
      color: #fff;
      font-size: 1rem;
  }
  h5 {
      color: #777;
      font-size: 0.8rem;
  }
`;
export const smallButton = css`
    width: 1rem;
    border: 1px solid #333;
    border-radius:30%;
`;
