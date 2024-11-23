import React, { useState } from "react";
import styled from "styled-components";

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
  background: #e0e0e0;
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
  color: #79747E;
  margin-bottom: 20px;
`;

const InfoSection = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

const InfoLabel = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 5px;
`;

const InfoContent = styled.div`
  font-size: 14px;
  color: #333;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  display: flex;
  width: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 6.329px;
  border: 0.791px solid var(--Schemes-Outline-Variant, #CAC4D0);
  padding: 5px 10px;
  background: white;
  font-size: 12px;
  color: #1D1B20;
  font-family: Normal;
`;


const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const Button = styled.button`
  display: flex;
  width: 282px;
  height: 45px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 10px 0;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: #f5f5f5;
  color: #555;

`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
  margin-top: 10px;
  resize: none;
`;

const RecommendModal = ({ onClose }) => {
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
            <Tag>SpringBoot</Tag>
            <Tag>MySQL</Tag>
          </InfoContent>
        </InfoSection>

        <TextArea placeholder="추가 내용을 입력하세요..." />

        <ButtonContainer>
          <Button>제안하기</Button>
        </ButtonContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default RecommendModal;
