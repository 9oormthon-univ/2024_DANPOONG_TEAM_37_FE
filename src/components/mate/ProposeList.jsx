import React from "react";
import styled from "styled-components";

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
  border-radius: 3px;
  background: rgba(238, 246, 255, 0.7);
  color: rgba(67, 72, 143, 0.8);
  font-size: 9.29px;
  font-weight: 500;
  position: absolute;
  top: 16px; 
  left: 8px;
  height: 21.233px;
  padding: 2px 8px;
`;

const StatusLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background: #f5f5f5;
  font-size: 9.29px;
  font-weight: 500;
  width: 61.648px;
  position: absolute;
  height: 21.233px;
  top: 16px;
  right: 8px;
`;

const ProposeList = () => {
  const projects = [
    { title: " 프로젝트", type: "프로젝트", status: "가입완료" },
    { title: "백엔드 스터디", type: "스터디", status: "가입대기" },
    { title: "디자인 협업 프로젝트", type: "프로젝트", status: "거절됨" },
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <MateListItem key={index}>
          <MateLabel>{project.type}</MateLabel> 
          <StatusLabel>{project.status}</StatusLabel> 
          <MateTitle>{project.title}</MateTitle> 
        </MateListItem>
      ))}
    </div>
  );
};

export default ProposeList;
