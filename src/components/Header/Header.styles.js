import { Button } from 'bootstrap';
import styled, { keyframes } from 'styled-components';
const showIt = keyframes`
    to{ opacity:1}
`;
export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid #232424;
  padding-bottom:2rem;
 `;
 export const LogOutButton = styled.button`
 border: none;
 background: none;
 color: #fff;
  font-size: 0.7rem;
  opacity:0.5;
  &:hover {
    animation: 0.5s ${showIt} forwards;
  }
 `
