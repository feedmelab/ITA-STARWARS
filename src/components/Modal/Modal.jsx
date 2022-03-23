import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { CloseModalButton, ModalD, ModalDWrapper, ModalLogo } from './Modal.styles';
import LogIn from '../LogIn/LogIn';
import SignIn from '../SignIn/SignIn';
import Logo from '../Header/Logo/Logo';

const Modal = ({showModal, setShowModal, wichPage}) => {
 const modalRef = useRef();
 const animando = useSpring({
   config: {
     duration: 200,
   },
   opacity: showModal ? 1: 0,
   transform: showModal? `translateY(0%)`:`translateY(-100%)`
 });
 const closeModal = (e) => {
   if (modalRef.current===e.target) setShowModal(false);
 }
  return (
    <>
    {showModal? (
      <ModalD ref={modalRef} onClick={closeModal}>
      <animated.div style={animando}>
        <ModalDWrapper showModal={showModal}>
        <ModalLogo src={require('./logo.png')} alt="Logo"/>
        {
          wichPage==='login'? <LogIn/>:<SignIn />
        }
        <CloseModalButton aria-label='Close modal' onClick={()=>setShowModal(prev => !prev)} />
        </ModalDWrapper>
      </animated.div>
      </ModalD>
      ):null }
    </>
  );
}

export default Modal;
