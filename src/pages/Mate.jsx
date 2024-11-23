import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Toggle from "../components/mate/Toggle"; 
import List from "../components/mate/List"; 
import MateList from "../components/mate/MateList"; 
import RecommendList from "../components/mate/RecommendList"; 
import { write, hand } from "../assets"; 

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

const MateContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column; 
  align-items: center;
`;

const Mate = () => {
  const [activeComponent, setActiveComponent] = useState("팀장"); 
  const navigate = useNavigate();

  const handleToggleChange = (type) => {
    setActiveComponent(type); 
  };

  const handleWriteClick = () => {
    if (activeComponent === "팀장") {
      navigate("/write"); 
    }
  };

  return (
    <>
      
      <IconContainer>
        <Toggle onToggleChange={handleToggleChange} />
        <img
          src={activeComponent === "팀장" ? write : hand}
          alt={activeComponent === "팀장" ? "Write Icon" : "Hand Icon"}
          width="24"
          height="24"
          style={{ cursor: "pointer" }}
          onClick={handleWriteClick}
        />
      </IconContainer>

      
      <MateContent>
        {activeComponent === "팀장" ? (
          <List /> 
        ) : (
          <>
            <MateList /> 
            <RecommendList /> 
          </>
        )}
      </MateContent>
    </>
  );
};

export default Mate;
