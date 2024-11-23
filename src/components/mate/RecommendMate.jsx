import React, { useState } from "react";
import styled from "styled-components";
import { click } from "../../assets"; 
import RecommendModal from "./modal/RecommendModal"; 

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
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-left: 10px;
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
  width: 100px;
  height: 68px;
  flex-shrink: 0;
  background: #fff;
  border: 2px solid #e2e8f0cc;
  border-radius: 13px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  color: #ecf5ff;
  justify-content: center;
`;

const Tag = styled.div`
  padding: 5px 10px;
  background: #ecf5ff;
  border-radius: 5px;
  width: 32px;
  color: #43488f;
  height: 14px;
  flex-shrink: 0;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const RecommendMate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리
  const members = [
    { name: "닉네임1", tags: ["Illustrator", "Figma"] },
    { name: "닉네임2", tags: ["MySQL", "SpringBoot"] },
    { name: "닉네임3", tags: ["React", "TypeScript"] },
    { name: "닉네임4", tags: ["Jira", "Slack"] },
  ];

 
  const openModal = () => setIsModalOpen(true);


  const closeModal = () => setIsModalOpen(false);

  return (
    <Container>
      <TitleContainer>
        <Icon src={click} alt="Mate 추천 아이콘" />
        <Title>이런 Mate는 어떠세요?</Title>
      </TitleContainer>
      <CardContainer>
        {members.map((member, index) => (
          <Card key={index} onClick={openModal}> 
            <Name>{member.name}</Name>
            <Tags>
              {member.tags.map((tag, idx) => (
                <Tag key={idx}>{tag}</Tag>
              ))}
            </Tags>
          </Card>
        ))}
      </CardContainer>

     
      {isModalOpen && <RecommendModal onClose={closeModal} />}
    </Container>
  );
};

export default RecommendMate;
