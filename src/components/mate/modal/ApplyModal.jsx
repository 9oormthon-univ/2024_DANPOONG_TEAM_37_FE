import React, { useState } from "react";
import styled from "styled-components";
import { profile } from "../../../assets";  

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
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.div`
  width: 60px;
  height: 60px;
  background: url(${profile}) no-repeat center center;  // 프로필 이미지 경로
  background-size: cover;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
`;

const SubTitle = styled.div`
  font-size: 14px;
  color: #79747e;
  margin-bottom: 20px;
`;

const InfoSection = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

const InfoLabel = styled.div`
  font-size: 14px;
  color: #000000;
  margin-bottom: 8px;
  margin-left: 25px;
`;

const InfoContent = styled.div`
  font-size: 14px;
  color: #333;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  padding-left: 25px;  
`;


const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6.329px;
  border: 0.791px solid var(--Schemes-Outline-Variant, #CAC4D0);
  padding: 5px 10px;
  background: white;
  font-size: 12px;
  color: #1d1b20;
 
`;

const TechTag = styled(Tag)`
  border: none;
  background: rgba(214, 234, 255, 0.45); 
  border-radius: 3px; 
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 18px;
  margin-top: 20px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center; 
  align-items: center;      
  width: 134px;
  height: 45px;
  padding: 10px 0;
  font-size: 14px;
  border: none;
  border-radius: 10px;
  border: 1.5px solid rgba(226, 232, 240, 0.80);
  cursor: pointer;
  background: white;
  color: #555;
`;


const TextArea = styled.textarea`
  width: 282px;
  height: 160px;
  flex-shrink: 0;
  border: none;
  border-radius: 7px;
  padding: 10px;
  background: #F5F5F5;
  font-size: 14px;
  margin-top: 10px;
  resize: none;
`;

const ApplyModal = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  
  const closeModal = () => {
    setIsOpen(false);
    onClose(); 
  };

  
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleButtonClick = () => {
    closeModal();  
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContainer onClick={handleModalClick}>
        <ProfileImage />
        <Title>닉네임</Title>
        <SubTitle>카카오톡 아이디</SubTitle>

        <InfoSection>
          <InfoLabel>나이 · 직업 · 성별</InfoLabel>
          <InfoContent>
            <Tag>24세</Tag>
            <Tag>대학생</Tag>
            <Tag>여</Tag>
          </InfoContent>
        </InfoSection>

        <InfoSection>
          <InfoLabel>MBTI</InfoLabel>
          <InfoContent>
            <Tag>ENTJ</Tag>
          </InfoContent>
        </InfoSection>

        <InfoSection>
          <InfoLabel>포지션</InfoLabel>
          <InfoContent>
            <Tag>백엔드</Tag>
          </InfoContent>
        </InfoSection>

        <InfoSection>
          <InfoLabel>선호 방식</InfoLabel>
          <InfoContent>
            <Tag>온라인</Tag>
          </InfoContent>
        </InfoSection>

        <InfoSection>
          <InfoLabel>거주지역</InfoLabel>
          <InfoContent>
            <Tag>수도권</Tag>
            <Tag>서울</Tag>
            <Tag>노원구</Tag>
          </InfoContent>
        </InfoSection>

        <InfoSection>
          <InfoLabel>기술 스택</InfoLabel>
          <InfoContent>
            <TechTag>SpringBoot</TechTag>  
            <TechTag>MySQL</TechTag>
          </InfoContent>
        </InfoSection>

        <TextArea  />

        <ButtonContainer>
        <Button onClick={handleButtonClick}>거절</Button>
        <Button onClick={handleButtonClick}>수락</Button>
        </ButtonContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ApplyModal;
