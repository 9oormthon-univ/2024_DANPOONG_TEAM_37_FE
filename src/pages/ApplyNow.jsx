import React, { useState } from "react";
import styled from "styled-components";
import { back } from "../assets";
import { useNavigate } from "react-router-dom";

const Header = styled.header`
  width: 100vw;
  height: 100px;
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


const ApplyNow = () => {
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
        지원현황
      </Header>
      <main>
      </main>
    </>
  );
};

export default ApplyNow;
