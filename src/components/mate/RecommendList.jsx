import React from "react";
import styled from "styled-components";

const RecommendContainer = styled.div`
  padding: 16px;
  margin-top: 16px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
`;

const TitleIcon = styled.span`
  font-size: 18px;
  margin-right: 8px;
`;

const ListContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const Card = styled.div`
  width: 200px;
  height: 120px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background-color: #fff;
  padding: 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.div`
  font-size: 10px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${(props) => (props.type === "project" ? "#ebf4ff" : "#f0fff4")};
  color: ${(props) => (props.type === "project" ? "#3182ce" : "#48bb78")};
`;

const Deadline = styled.div`
  font-size: 10px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: #fed7d7;
  color: #c53030;
`;

const TitleText = styled.h4`
  font-size: 14px;
  font-weight: 500;
  margin: 8px 0;
`;

const MemberCount = styled.p`
  font-size: 10px;
  color: #718096;
`;

const RecommendList = () => {
  const teams = [
    { type: "스터디", title: "스터디 제목", deadline: "D-10", current: 3, total: 5 },
    { type: "프로젝트", title: "프로젝트 제목", deadline: "D-10", current: 2, total: 6 },
  ];

  return (
    <RecommendContainer>
      <Title>
        <TitleIcon>👥</TitleIcon> 이런 Team은 어떠세요?
      </Title>
      <ListContainer>
        {teams.map((team, index) => (
          <Card key={index}>
            <LabelContainer>
              <Label type={team.type === "프로젝트" ? "project" : "study"}>{team.type}</Label>
              <Deadline>{team.deadline}</Deadline>
            </LabelContainer>
            <TitleText>{team.title}</TitleText>
            <MemberCount>
              현재 인원 {team.current}명 / 총 인원 {team.total}명
            </MemberCount>
          </Card>
        ))}
      </ListContainer>
    </RecommendContainer>
  );
};

export default RecommendList;
