import React, { useState } from "react";
import styled from "styled-components";
import Step1 from "../components/mate/Step1";
import Step2 from "../components/mate/Step2";
import Step3 from "../components/mate/Step3";
import { back } from "../assets";
import { useNavigate } from "react-router-dom";

const Header = styled.header`
  margin: auto;
  width: 100%;
  max-width: 420px;
  height: 100px;
  background: #1a3d7d;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: white;
  font-size: 24px;
  font-family: Normal;
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

const WritePost = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const goNextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const goPrevStep = () => {
    if (step === 1) {
      navigate("/mate"); 
    } else {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <>
      <Header>
        <BackIcon src={back} alt="뒤로가기" onClick={goPrevStep} />
        게시글 작성
        <UnderlineContainer>
          <UnderlineHighlight step={step} />
        </UnderlineContainer>
      </Header>
      <main>
        {step === 1 && <Step1 onNext={goNextStep} />}
        {step === 2 && <Step2 onNext={goNextStep} />}
        {step === 3 && <Step3 />}
      </main>
    </>
  );
};

export default WritePost;
