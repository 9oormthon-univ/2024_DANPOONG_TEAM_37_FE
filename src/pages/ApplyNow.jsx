import React from "react";
import styled from "styled-components";
import { back } from "../assets";
import { useNavigate } from "react-router-dom";
import OurTeam from "../components/mate/OurTeam"; 
import RecommendMate from "../components/mate/RecommendMate";
import ApplyMate from "../components/mate/ApplyMate"; 

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

const Main = styled.main`
  padding: 20px;
  display: flex;
  flex-direction: column; 
  gap: 20px; 
  align-items: center; 
`;

const ApplyNow = () => {
  const navigate = useNavigate();

  const goPrevStep = () => {
    navigate("/mate");
  };

  return (
    <>
      <Header>
        <BackIcon src={back} alt="뒤로가기" onClick={goPrevStep} />
        지원현황
      </Header>
      <Main>
        <OurTeam /> 
        <RecommendMate /> 
        <ApplyMate /> 
      </Main>
    </>
  );
};

export default ApplyNow;
