import React from "react";
import styled from "styled-components";
import { recommanduser } from "../../assets"; 

const RecommendContainer = styled.div`
  padding: 16px;
  margin-top: 16px;
  width: 350px;
  height: auto; /* 높이를 자동으로 설정하여 카드가 늘어나지 않도록 */
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  margin-left: 5px;
`;

const TitleIcon = styled.span`
  font-size: 18px;
  margin-right: 8px;
  display: flex;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
  }
`;

const ListContainer = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;  // 가로 스크롤을 활성화
  padding-bottom: 8px; // 가로 스크롤바에 여백 추가
  -ms-overflow-style: none; // IE 10+
  scrollbar-width: none;  // Firefox에서 스크롤바 숨기기
  flex-shrink: 0;  // 카드 크기 유지

  &::-webkit-scrollbar {
    display: none;  // 크롬, 사파리에서 스크롤바 숨기기
  }
`;

const Card = styled.div`
  width: 170px;
  height: 108px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background-color: #fff;
  padding: 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;  // 카드 크기 유지
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.div`
  font-size: 10px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: #EEF6FFB2;
  color: #43488FCC;

`;

const Deadline = styled.div`
  font-size: 10px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: #FFEAEA;
  color: #F75247;
`;

const TitleText = styled.h4`
  font-size: 13px;
  font-weight: 500;
  margin: 8px 0;
`;

const MemberCount = styled.p`
  font-size: 11px;
  color: #718096;
  text-align: right;  // 오른쪽 정렬
`;

const RecommendList = () => {
  const teams = [
    { type: "스터디", title: "스터디 제목", deadline: "D-1", current: 3, total: 5 },
    { type: "프로젝트", title: "프로젝트 제목", deadline: "D-2", current: 2, total: 6 },
    { type: "프로젝트", title: "프로젝트 제목", deadline: "D-3", current: 2, total: 6 },
    { type: "프로젝트", title: "프로젝트 제목", deadline: "D-4", current: 2, total: 6 },
    { type: "스터디", title: "스터디 제목", deadline: "D-10", current: 3, total: 5 },
  ];

  return (
    <RecommendContainer>
      <Title>
        <TitleIcon>
          <img src={recommanduser} alt="Recommand User Icon" />
        </TitleIcon>
        이런 Team은 어떠세요?
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
