import React from 'react';
import styled from 'styled-components';
import Login from './Login';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to bottom, #283593, #1e88e5);
`;


const Footer = styled.div`
  position: absolute;
  bottom: 16px;
  font-size: 14px;
  color: #ffffff;
`;

const Start = () => {
  return (
    <Container>
      <Login />
      <Footer>© 2021. All rights reserved.</Footer>
    </Container>
  );
};

export default Start;