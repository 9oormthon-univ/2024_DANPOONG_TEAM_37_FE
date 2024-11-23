import React, { useState } from "react";
import styled from "styled-components";
import PostModal from "./modal/PostModal"; 

const MateListItem = styled.div`
  width: 350px;
  height: 85px;
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  border: 1.5px solid rgba(226, 232, 240, 0.8);
  margin-bottom: 16px;
  cursor: pointer;
`;

const MateTitle = styled.h3`
  font-size: 16px;
  color: #333;
  margin-top: 35px; 
  margin-bottom: 4px;
`;

const MateLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-size: 10px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: #EEF6FFB2;
  color: #43488FCC;
  position: absolute;
  box-sizing: border-box;
  top: 16px; 
  left: 8px;
  height: 21.233px;
  padding: 2px 8px;
`;

const StatusLabel = styled.div`
  display: flex;
  width: 34px;
  height: 21.233px;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  font-size: 9.29px;
  font-weight: 500;
  line-height: 13.271px;
  letter-spacing: 0.066px;
  position: absolute;
  top: 8px;
  right: 8px; 
  background: ${(props) => (props.completed ? "#F5F5F5" : "#FFEAEA")};
  color: ${(props) => (props.completed ? "#666" : "#F75247")};
`;

const AuthorProposalLabel = styled.div`
  display: flex;
  width: 43px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: #1A3D7D;
  color: white;
  font-size: 9.29px;
  position: absolute;
  top: 16px;
  left: 65px;  
  height: 19px;
  padding: 2px 8px;
`;

const ProposeList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    { title: " 프로젝트", type: "프로젝트", status: "D-10" },
    { title: "백엔드 스터디", type: "스터디", status: "D-3" },
    { title: "디자인 협업 프로젝트", type: "프로젝트", status: "D-5" },
  ];

  const handleItemClick = () => {
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };

  return (
    <div>
      {projects.map((project, index) => (
        <MateListItem key={index} onClick={handleItemClick}>
          <MateLabel>{project.type}</MateLabel> 
          <AuthorProposalLabel>작성자 제안</AuthorProposalLabel> 
          <StatusLabel>{project.status}</StatusLabel> 
          <MateTitle>{project.title}</MateTitle> 
        </MateListItem>
      ))}
      {isModalOpen && <PostModal onClose={closeModal} />}
    </div>
  );
};

export default ProposeList;
