import { Card } from 'react-bootstrap';
import styled, { css } from 'styled-components';

export const Cardy = styled(Card)`
  display:flex;
  width: 75%;
  height: auto;
  padding: 2rem;
  margin-bottom: 1rem;
  background-color: #2233;
  align-items: start;
  justify-content: start;
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
