import styled, { keyframes } from 'styled-components';
const fadeIt = keyframes`
    to{ opacity: 1}
`;
export const Nav = styled.div`
  display: flex;
  justify-cotent: center;

  padding-left: 0.4rem;
  padding-right: 0.4rem;
  ul {
      display: flex;
      width: auto;
      margin: 0;
      padding: 0;
  }
  ul li {
    padding: 0.3rem;
    list-style: none;
  }
  a {
      color: #fff;
      opacity: 0.6;
      &:hover{
        animation: 0.5s ${fadeIt} forwards;
      }
  }
 `;
