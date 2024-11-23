import React from "react";
import styled from "styled-components";


const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  height: 75vh;

`;

const Title = styled.h2`
  font-size: 16px;
  color: #333;
  margin-bottom: 1.5px;
  margin-left: -250px;
  font-family: Normal;
`;

const TitleInput = styled.input`
  display: flex;
  width: 330px;
  height: 45px;
  justify-content: center;
  align-items: center;
  font-family: Medium;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1.5px solid rgba(226, 232, 240, 0.80);
  padding: 10px;
  font-size: 14px;
  color: #333;
  margin-bottom: 16px;
  box-sizing: border-box;

  &:focus {
    outline: none;  
    border: 1.5px solid rgba(226, 232, 240, 0.80);  
  }
`;

const ContentInput = styled.textarea`
  display: flex;
  width: 330px;
  height: 434px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1.5px solid rgba(226, 232, 240, 0.80);
  padding: 10px;
  font-size: 14px;
  font-family: Medium;
  color: #333;
  margin-top: -5px;  
  margin-bottom: 16px;
  box-sizing: border-box;
  resize: none;  

  &:focus {
    outline: none;  
    border: 1.5px solid rgba(226, 232, 240, 0.80);  
  }
`;

const Button = styled.button`
  width: 330px;
  display: flex;
  height: 45px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 16px;
  background: white;
  color: #B3B3B3;
  border: 1.5px solid #E2E8F0;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  margin-top: auto;
  font-family: Light;

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    border: 1.5px solid #E2E8F0;
  }
`;

const Step2 = ({ onNext }) => {
  return (
    <Container>
      <Title>게시글 제목</Title>
      <TitleInput placeholder="제목을 작성해주세요" />
      <ContentInput placeholder=" 
 [ 모집 내용 예시 ]

    &bull;  스터디 주제:
    &bull;  스터디 설명:
    &bull;  스터디 목표: 
    &bull;  스터디 일정(횟수):
    &bull;  간단한 커리큘럼:
    &bull;  모집인원
    &bull;  주의사항
    &bull;  스터디에 지원할 수 있는 방법을 남겨주세요 
        (이메일, 카카오톡 오픈채팅, 구글폼 등)" />

      <Button onClick={onNext}>다음</Button>
    </Container>
  );
};

export default Step2;
