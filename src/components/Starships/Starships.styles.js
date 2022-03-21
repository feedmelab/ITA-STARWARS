import { Button } from 'bootstrap';
import { Card } from 'react-bootstrap';
import styled, { css } from 'styled-components';

export const Cardy = styled(Card)`
  display:flex;
  width: 75%;
  height: auto;
  padding: 2rem;
  margin-bottom: 1rem;
  background-color: #2233;
  align-items: center;
  justify-content: start;
`;
export const smallButton = css`
    width: 1rem;
    border: 1px solid #333;
    border-radius:30%;
`;
