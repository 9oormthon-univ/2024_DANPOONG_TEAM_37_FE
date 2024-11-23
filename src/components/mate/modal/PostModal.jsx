import React, { useState } from "react";
import styled from "styled-components";
import { pencil, activatepencil } from "../../../assets"; 

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  width: 350px;  
  height: 650px; 
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;  
`;

const Title = styled.div`
  font-size: 20px;  
  font-weight: 700;
  color: #333;
  white-space: nowrap;
`;

const PencilIcon = styled.img`
  width: 24px;  
  height: 24px;
  cursor: pointer;
  margin-left: 20px;
  margin-top: 13px;
`;

const StatusLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background: ${(props) => (props.completed ? "#F5F5F5" : "#FFEAEA")};
  width: ${(props) => (props.completed ? "44px" : "40px")};
  padding: 4px;
  margin-left: 8px;
  white-space: nowrap;
`;

const StatusText = styled.span`
  font-size: 10px;  
  font-weight: 600;
  color: ${(props) => (props.completed ? "#999" : "#D32F2F")};
`;

const ApplyStatusButton = styled.button`
  width: 60px;  
  height: 24px;  
  flex-shrink: 0;
  border-radius: 5px;
  background: #1a3d7d;
  color: white;
  text-align: center;
  font-size: 10px;  
  font-weight: 600;
  border: none;
  cursor: pointer;
  margin-left: 8px;
`;

const Subtitle = styled.div`
  color: #79747e;
  text-align: left;
  font-size: 12px;  
  font-weight: 400;
  margin-top: 8px;
  padding-left: 16px; 
`;

const Body = styled.div`
  flex: 1;
  padding: 16px; 
  overflow-y: hidden;
  overflow-x: hidden;
`;

const ContentContainer = styled.div`
  width: 280px;  
  height: 230px; 
  background-color: #f9f9f9;
  margin-bottom: 16px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e6e6e6;
  margin: 12px 0;  
`;

const PeopleInfo = styled.div`
  color: #b3b3b3;
  font-size: 11px;  
  margin-top: 12px;
  text-align: center;
  white-space: nowrap;
`;

const EditButton = styled.button`
  display: flex;
  width: 280px;  
  height: 40px;  
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1.5px solid rgba(226, 232, 240, 0.80);
  background: white;
  color: #474747;
  text-align: center;
  font-size: 12px;  
  cursor: pointer;
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
`;

const PostModal = ({ onClose }) => {
  const [isEditing, setIsEditing] = useState(false); 

  const toggleEditing = () => {
    setIsEditing((prev) => !prev); 
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>개발자 모집 공고</Title>
          <div style={{ display: "flex", alignItems: "center" }}>
            <StatusLabel completed={false}>
              <StatusText completed={false}>D-10</StatusText>
            </StatusLabel>
            <ApplyStatusButton>지원현황</ApplyStatusButton>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <PencilIcon
                src={isEditing ? pencil : activatepencil} 
                alt="pencil icon"
                onClick={toggleEditing} 
              />
              <PeopleInfo>현재 인원 / 총 인원</PeopleInfo>
            </div>
          </div>
        </Header>
        <Subtitle>장연주 ㅣ 2024-11-23</Subtitle>
        <Body>
          <ContentContainer>{/* 컨텐츠 나중에 추가 */}</ContentContainer>
          <Divider />
          <ContentContainer>{/* 컨텐츠 나중에 추가 */}</ContentContainer>
        </Body>
        {isEditing && (
          <EditButton onClick={onClose}>수정하기</EditButton>  
        )}
      </ModalContainer>
    </ModalOverlay>
  );
};

export default PostModal;
