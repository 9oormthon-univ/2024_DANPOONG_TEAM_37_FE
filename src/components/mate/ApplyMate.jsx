import React, { useState } from "react";
import styled from "styled-components";
import { user, profile } from "../../assets"; 
import ApplyModal from "./modal/ApplyModal";  

const Container = styled.div`
  width: 350px;
  height: 183px;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: #fff;
  border: 1.5px solid rgba(226, 232, 240, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  margin-bottom: 20px;
  cursor: pointer; 
`;

const UserIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom: 8px;
`;

const Profile = styled.img`
  width: 50px;
  height: 50px;
  fill: #ccc;
  margin-bottom: 8px;
`;

const Nickname = styled.div`
  color: #474747;
  font-family: Pretendard, sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 40.088px;
  letter-spacing: 0.2px;
  margin-bottom: 16px;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
`;

const BasicTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 49.496px;
  height: 25px;
  border-radius: 6.329px;
  border: 1.3px solid rgba(226, 232, 240, 0.8);
  font-size: 10px;
  color: #474747;
  font-family: Pretendard, sans-serif;
`;

const StackTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 62px;
  height: 25px;
  border-radius: 3px;
  background: rgba(214, 234, 255, 0.45);
  font-size: 10px;
  color: #474747;
  font-family: Pretendard, sans-serif;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-family: Pretendard, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 64.141px;
  letter-spacing: 0.321px;
  color: #474747;

  svg {
    margin-right: 8px;
  }
`;

const ApplyMate = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div>
        <Title>
          <UserIcon src={user} alt="유저 아이콘" />
          지원한 Mate
        </Title>

        
        <Container onClick={openModal}>
          <Profile src={profile} alt="프로필 아이콘" />
          <Nickname>닉네임</Nickname>
          <TagsContainer>
            <BasicTag>24세</BasicTag>
            <BasicTag>대학생</BasicTag>
            <StackTag>SpringBoot</StackTag>
          </TagsContainer>
        </Container>

        
        <Container onClick={openModal}>
          <Profile src={profile} alt="프로필 아이콘" />
          <Nickname>닉네임</Nickname>
          <TagsContainer>
            <BasicTag>24세</BasicTag>
            <BasicTag>대학생</BasicTag>
            <StackTag>SpringBoot</StackTag>
          </TagsContainer>
        </Container>

        
        {isModalOpen && <ApplyModal onClose={closeModal} />}
      </div>
    </>
  );
};

export default ApplyMate;
