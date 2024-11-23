import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { useNavigate} from 'react-router-dom';
import { back } from '../assets';
import Step1 from '../components/apply/Step1';
import Step2 from '../components/apply/Step2';
import Step3 from '../components/apply/Step3';

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

const UnderlineContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: rgba(255, 255, 255, 0.3);
`;

const UnderlineHighlight = styled.div`
  position: absolute;
  height: 100%;
  width: 33.33%;
  background: white;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${(props) => (props.step - 1) * 100}%);
`;


const ApplicationForm = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const goNextStep = () => setStep((prev) => Math.min(prev + 1, 3));

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
        
        지원서
        <UnderlineContainer>
          <UnderlineHighlight step={step} />
        </UnderlineContainer>
      </Header>
      <main>
        {step === 1 && <Step1 onNext={goNextStep} />}
        {step === 2 && <Step2 onNext={goNextStep} />}
        {step === 3 && <Step3 />}
      </main>
    </Container>
  );
};

export default ApplicationForm;
