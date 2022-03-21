import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  justify-cotent: center;
  border:1px solid #777;
  ul {
      display: flex;
      width: auto;
      margin: 0;
      padding: 0;
  }
  ul li {
    padding:0 .3rem;
    list-style: none;
  }
  a {
      color: #fff;
      opacity: 0.6;
      transition: 1s;
      &:hover{
        opacity: 1.0;
      }
  }
 `;
