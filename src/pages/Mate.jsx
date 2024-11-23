import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom"; 
import styled from "styled-components"; 
import Toggle from "../components/mate/Toggle"; 
import List from "../components/mate/List"; 
import MateList from "../components/mate/MateList"; 
import RecommendList from "../components/mate/RecommendList"; 
import ProposeList from "../components/mate/ProposeList"; 
import { write, hand, activatehand } from "../assets"; 

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  padding: 16px;
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 75px;
`;

const Icon = styled.img`
  cursor: pointer;
  width: 25px;
  height: 25px;
  position: relative;  
  margin-right: -100px; 

  @media (max-width: 768px) {
    margin-right: -95px; 
  }
`;

const MateContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column; 
  align-items: center;
`;

const Mate = () => {
  const [activeComponent, setActiveComponent] = useState("팀장"); 
  const [isHandActive, setIsHandActive] = useState(false);  
  const navigate = useNavigate();

  const handleToggleChange = (type) => {
    setActiveComponent(type); 
  };

  const handleWriteClick = () => {
    if (activeComponent === "팀장") {
      navigate("/write");  
    }
  };

  const handleIconClick = () => {
    setIsHandActive((prev) => !prev);  
  };

  return (
    <>
      <IconContainer>
        <ToggleContainer>
          <Toggle onToggleChange={handleToggleChange} />
          <Icon
            src={activeComponent === "팀장" ? write : isHandActive ? activatehand : hand}  
            alt={activeComponent === "팀장" ? "Write Icon" : isHandActive ? "Activate Hand Icon" : "Hand Icon"}
            onClick={activeComponent === "팀장" ? handleWriteClick : handleIconClick}  
          />
        </ToggleContainer>
      </IconContainer>

      <MateContent>
        {activeComponent === "팀장" ? (
          <List />  
        ) : (
          <>
            {isHandActive ? (
              <ProposeList />  
            ) : (
              <>
                <MateList />  
                <RecommendList />  
              </>
            )}
          </>
        )}
      </MateContent>
    </>
  );
};

export default Mate;
