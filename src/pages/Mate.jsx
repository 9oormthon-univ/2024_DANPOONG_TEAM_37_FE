import React, { useState } from "react";
import Toggle from "../components/mate/Toggle"; 
import { write, hand } from "../assets"; 
import styled from "styled-components";

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

  const handleToggleChange = (type) => {
    setActiveComponent(type);
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
        />
      </IconContainer>
      <MateContent>
        {activeComponent === "팀장" ? (
          <div>팀장 </div>
        ) : (
          <div>팀원 </div>
        )}
      </MateContent>
    </>
  );
};

export default Mate;
