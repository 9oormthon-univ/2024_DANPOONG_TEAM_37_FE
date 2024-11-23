import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { back } from '../assets';

const Container = styled.div`
  width: 100%;
  max-width: 420px;
  margin: auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow-y: auto;
`;

const Header = styled.div`
  height: 80px;
  background: #1a3d7d;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const BackIcon = styled.img`
  position: absolute;
  left: 20px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Notice = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const goPrevStep = () => {
    if (step === 1) {
      navigate('/home');
    } else {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <Container>
      <Header>
        <BackIcon src={back} alt='뒤로가기' onClick={goPrevStep} />
        알림
      </Header>
      <main>
        <div>아직 알람이 없습니다</div>
      </main>
    </Container>
  );
};

export default Notice;
