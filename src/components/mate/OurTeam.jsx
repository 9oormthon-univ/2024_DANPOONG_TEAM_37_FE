import React, { useState } from "react"; 
import styled from "styled-components";
import { profile, recommanduser } from "../../assets";  
import TeamProfileModal from "./modal/TeamProfileModal";

const Container = styled.div`
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-right: 10px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  width: 100%;
  padding-bottom: 10px;
  scroll-behavior: smooth;
  
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Card = styled.div`
  width: 90px;
  height: 90px;
  flex-shrink: 0;
  background: #fff;
  border: 2px solid #e2e8f0cc;
  border-radius: 13px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-bottom: 8px;
`;

const Name = styled.div`
  font-size: 14px;
  color: #333;
  font-weight: 600;
  margin-bottom: 7px;
`;

const TagsContainer = styled.div`
   display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
`;


const BasicTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 16px;
  padding: 0 3px; /* 여백을 추가 */
  border-radius: 4px;
  background: #f7f7f7;
  font-weight: 600;
  font-size: 10px;
  color: #474747;
  font-family: Pretendard, sans-serif;
`;

const StackTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 17px;
  font-weight: 600;
  padding: 0 3px; /* 여백을 추가 */
  border-radius: 4px;
  background: rgba(214, 234, 255, 0.45);
  font-size: 10px;
  color: #474747;
  font-family: Pretendard, sans-serif;
`;

const OurTeam = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리
  const members = [
    { name: "닉네임1", tags: ["백엔드", "SpringBoot"] },
    { name: "닉네임2", tags: ["백엔드", "SpringBoot"] },
    { name: "닉네임3", tags: ["프론트엔드","React", "TypeScript"] },
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Container>
      <TitleContainer>
      <Icon src={recommanduser} alt="추천 사용자 아이콘" />
        <Title>우리 팀원</Title>
      </TitleContainer>
      <CardContainer>
        {members.map((member, index) => (
          <Card key={index} onClick={openModal}>
            <ProfileImage src={profile} alt="프로필 이미지" /> 
            <Name>{member.name}</Name>
            <TagsContainer>
            {member.tags.map((tag, idx) => (
        tag === "SpringBoot" || tag === "React" || tag === "TypeScript" ? (
          <StackTag key={idx} tag={tag}>{tag}</StackTag>
        ) : (
          <BasicTag key={idx} tag={tag}>{tag}</BasicTag>
        )
      ))}
            </TagsContainer>
          </Card>
        ))}
      </CardContainer>

      {isModalOpen && <TeamProfileModal onClose={closeModal} />}
    </Container>
  );
};

export default OurTeam;
