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
  justify-content: flex-start;
  align-items: center;
  padding: 12px 16px;
  width: 300px;
  margin-top: 12px;
  position: relative;
`;

const Title = styled.div`
  font-size: 19px;
  font-weight: 700;
  color: #333;
  white-space: nowrap;
`;

const PencilIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  right: 16px;
`;

const StatusLabel = styled.div`
  display: flex;
  height: 24px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: ${(props) => (props.completed ? "#F5F5F5" : "#FFEAEA")};
  width: ${(props) => (props.completed ? "44px" : "40px")};
  padding: 4px;
  margin-left: 4px;
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
  border-radius: 4px;
  background: #1a3d7d;
  color: white;
  text-align: center;
  font-size: 10px;
  border: none;
  white-space: nowrap;
  cursor: pointer;
  margin-left: 4px;
`;

const SubtitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  box-sizing: border-box;
  width: 320px;
  margin-bottom: -10px;
`;

const Subtitle = styled.div`
  color: #79747e;
  text-align: left;
  font-size: 12px;
  font-weight: 400;
`;

const PeopleInfo = styled.div`
  color: #b3b3b3;
  font-size: 11px;
  text-align: left;
  white-space: nowrap;
`;

const Body = styled.div`
  flex: 1;
  padding: 16px;
  overflow-y: hidden;
  overflow-x: hidden;
`;

const ContentContainer = styled.div`
  width: 300px;
  height: 230px; 
  background-color: #f5f5f5;
  margin-bottom: 16px;
  border-radius: 10px;
  padding: 16px;
  box-sizing: border-box;
`;

const ContentRow = styled.div`
  display: flex;
  justify-content: flex-start; /* 기본적으로 왼쪽 정렬로 변경 */
  align-items: center;
  margin-bottom: 12px;
  width: 100%;
  white-space: nowrap;
`;

const ContentLabel = styled.div`
  font-size: 13px;
  color: #555;
  margin-right: 25px; /* 이 간격을 줄여서 두 항목 간 간격을 세밀하게 조정 */
`;

const ContentValue = styled.div`
  font-size: 13px;
  font-family: Bold;
  color: #333;
`;


const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e6e6e6;
  margin: 12px 0;
`;

const EditButton = styled.button`
  display: flex;
  width: 280px;
  height: 40px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1.5px solid rgba(226, 232, 240, 0.8);
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

const Tag = styled.div`
  display: flex;
  font-size: 8px;
  box-sizing: border-box;
  min-width: 35px;
  height: 17px;
  padding: 0 8px;
  justify-content: center;
  align-items: center;
  border-radius: 4.437px;
  border: 0.555px solid var(--Schemes-Outline-Variant, #CAC4D0);
  margin-right: 4px;
  white-space: nowrap;
  color: ${(props) => (props.isPosition ? "#1D1B20" : "#1A3D7D")}; /* 포지션 태그와 스택 태그 색 다르게 */
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  flex-direction: row;
  margin-top: 6px;
`;

const UrlButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 51.2px;
  height: 17px;
  font-size: 8px;
  border-radius: 4px;
  background: #1a3d7d;
  color: white;
  text-decoration: none;
  margin-right: 4px;
  cursor: pointer;
`;

const UrlContainer = styled.div`
  display: flex;
  gap: 4px;
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
              <StatusText>모집 중</StatusText>
            </StatusLabel>
            <ApplyStatusButton>작성자 제안</ApplyStatusButton>
          </div>
          <PencilIcon
            src={isEditing ? pencil : activatepencil}
            alt="Edit Icon"
            onClick={toggleEditing}
          />
        </Header>
        <SubtitleContainer>
          <Subtitle>장연주 ㅣ 2024-11-23</Subtitle>
          <PeopleInfo>현재 인원 / 총 인원</PeopleInfo>
        </SubtitleContainer>
        <Body>
          {/* 첫 번째 ContentContainer */}
          <ContentContainer>
  <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
    <ContentRow style={{ flexBasis: "48%" }}>
      <ContentLabel>모집 구분</ContentLabel>
      <ContentValue>프로젝트</ContentValue>
    </ContentRow>
    <ContentRow style={{ justifyContent: "space-between", marginLeft: "8%" }}>
      <ContentLabel>시작 예정</ContentLabel>
      <ContentValue>2024. 11. 2</ContentValue>
    </ContentRow>
  </div>
  
  <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
    <ContentRow style={{ flexBasis: "48%" }}>
      <ContentLabel>모집 인원</ContentLabel>
      <ContentValue>4명</ContentValue>
    </ContentRow>
    <ContentRow style={{ flexBasis: "48%" }}>
      <ContentLabel>예상 기간</ContentLabel>
      <ContentValue>3개월</ContentValue>
    </ContentRow>
  </div>

  <ContentRow>
    <ContentLabel>진행 방식</ContentLabel>
    <ContentValue>오프라인</ContentValue>
  </ContentRow>
  <ContentLabel>모집 분야 </ContentLabel>
  {/* 첫 번째 줄: 프론트엔드, React, JavaScript */}
  <ContentRow style={{ marginBottom: "1px" }}>
    <TagsContainer style={{ flexDirection: "row", gap: "4px" }}>
      <Tag isPosition>프론트엔드</Tag>
      <Tag>React</Tag>
      <Tag>JavaScript</Tag>
    </TagsContainer>
  </ContentRow>

  {/* 두 번째 줄: 백엔드, SpringBoot, Java, MySQL */}
  <ContentRow style={{ marginTop: "1px" }}>
    <TagsContainer style={{ flexDirection: "row", gap: "4px" }}>
      <Tag isPosition>백엔드</Tag>
      <Tag>SpringBoot</Tag>
      <Tag>Java</Tag>
      <Tag>MySQL</Tag>
    </TagsContainer>
  </ContentRow>


  {/* 참고 URL */}
  <ContentRow>
    <ContentLabel>참고 URL</ContentLabel>
    <UrlContainer>
      <UrlButton href="#">구글폼</UrlButton>
      <UrlButton href="#">오픈톡</UrlButton>
      <UrlButton href="#">포트폴리오</UrlButton>
    </UrlContainer>
  </ContentRow>
</ContentContainer>


          <Divider />
          {/* 두 번째 ContentContainer 그대로 유지 */}
          <ContentContainer>
            {/* 두 번째 컨텐츠 내용 추가 가능 */}
          </ContentContainer>
        </Body>
        {isEditing && <EditButton onClick={onClose}>수정하기</EditButton>}
      </ModalContainer>
    </ModalOverlay>
  );
};

export default PostModal;
