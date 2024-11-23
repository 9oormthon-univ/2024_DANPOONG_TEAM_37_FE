import React from "react";
import styled from "styled-components";

const ToggleContainer = styled.div`
  display: flex;
  height: 25px; 
  padding: 4px 0px;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  width: 130px; 
  margin: 0 auto;
  position: relative; 
  background-color: transparent;
`;

const ToggleButton = styled.button`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px; 
  padding: 4px 0px;
  background-color: transparent;
  color: ${(props) => (props.active ? "#FFF" : "#757575")};
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: ${(props) => (props.active ? "700" : "normal")};
  line-height: 20px; 
`;

const Slider = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => (props.active === "팀장" ? "0" : "65px")}; 
  width: 65px; 
  height: 100%; 
  background-color: #1a3d7d; 
  border-radius: 9999px;
  transition: all 0.3s ease;
  z-index: -1;
`;

const Toggle = ({ onToggleChange }) => {
  const [activeTab, setActiveTab] = React.useState("팀장");

  const handleClick = (tab) => {
    setActiveTab(tab);
    onToggleChange(tab); 
  };

  return (
    <ToggleContainer>
      <Slider active={activeTab} />
      <ToggleButton
        active={activeTab === "팀장"}
        onClick={() => handleClick("팀장")}
      >
        팀장
      </ToggleButton>
      <ToggleButton
        active={activeTab === "팀원"}
        onClick={() => handleClick("팀원")}
      >
        팀원
      </ToggleButton>
    </ToggleContainer>
  );
};

export default Toggle;
