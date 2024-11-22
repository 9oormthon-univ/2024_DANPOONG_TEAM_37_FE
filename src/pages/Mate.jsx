import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Toggle from "../components/mate/Toggle";
import { write, hand } from "../assets";
import styled from "styled-components";
import LeaderList from "../components/mate/LeaderList"; // LeaderList 컴포넌트 불러오기

const MateContent = styled.div`
  padding: 16px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
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
          <>
            <LeaderList /> {/* 팀장 리스트 표시 */}
          </>
        ) : (
          <div>팀원</div>
        )}
      </MateContent>
    </>
  );
};

export default Mate;
