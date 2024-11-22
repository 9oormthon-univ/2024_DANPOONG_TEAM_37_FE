import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const ModalContent = styled.div`
  padding: 20px;
  text-align: center;

  h2 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
    color: #555;
    font-size: 14px;
  }

  button {
    background: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background: #0056b3;
    }
  }
`;

const CvModal = ({ isOpen, onClose, title, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          maxWidth: '400px',
          borderRadius: '10px',
          padding: '20px',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      <ModalContent>
        <h2>{title}</h2>
        {children}
        <button onClick={onClose}>닫기</button>
      </ModalContent>
    </Modal>
  );
};

export default CvModal;
