 import styled from 'styled-components';
 import { MdClose } from "react-icons/md";

 export const ModalD = styled.div`

  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:1;
  background: linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)), url("bg_login.webp");
 `;
 export const ModalDWrapper = styled.div`

  width: 800px;
  height: 500px;
  box-shadow: 0 0.4rem 1rem rgba(0,0,0,0.2);
  background: rgba(0,0,0,0.6);
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 2fr;
  position: relative;
  align-items: center;
  z-index: 10;
  border-radius: 0.8rem;
  P {
      margin-bottom: 1rem;
  }
  button {
      padding:10px 24px;
      background: #141414;
      color: #fff;
      border: none;
  }
 `;
export const ModalLogo = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
border-radius: 10px 0 0 10px;
background: rgba(0,0,0,0.6);
`
 export const CloseModalButton = styled(MdClose)`
 cursor: pointer;
 position: absolute;
 top: 10px;
 right: 15px;
 width: 2rem;
 height: 2rem;
 padding: 0;
 z-index: 10;
 `