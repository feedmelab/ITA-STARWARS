import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { CloseModalButton, ModalD, ModalDWrapper } from './Modal.styles';

const Modal = ({showModal, setShowModal}) => {
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
        <CloseModalButton aria-label='Close modal' onClick={()=>setShowModal(prev => !prev)} />
        </ModalDWrapper>
      </animated.div>
      </ModalD>
      ):null }
    </>
  );
}

export default Modal;
