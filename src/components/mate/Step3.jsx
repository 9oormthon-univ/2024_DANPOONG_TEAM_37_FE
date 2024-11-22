import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  height: 75vh; 

`;

const Title = styled.h2`
  font-size: 16px;
  color: #333;
  margin-bottom: 16px;
  margin-left: -130px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputLabel = styled.label`
  font-size: 16px;
  color: #757575;
`;

const InputBox = styled.div`
  display: flex;
  width: 340px;
  height: 39px;
  flex-shrink: 0;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  background: #F5F5F5;
  box-sizing: border-box;
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;
  background: url("/path/to/icon.svg") no-repeat center center;
  background-size: contain;
  margin-right: 8px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
  flex-grow: 1;
  font-size: 14px;
  color: #938F99;

  &::placeholder {
    color: #938F99;
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

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    border: 1.5px solid #E2E8F0;
  }
`;

const Step3 = () => {
  return (
    <Container>
      <Title>참고 URL 및 링크를 첨부해주세요</Title>
      <InputGroup>
        <InputLabel>구글폼 URL</InputLabel>
        <InputBox>
          <Icon />
          <Input type="text" placeholder="https://www.notion.so/Fit-Me-12672b" />
        </InputBox>
      </InputGroup>
      <InputGroup>
        <InputLabel>카카오톡 오픈채팅방 URL</InputLabel>
        <InputBox>
          <Icon />
          <Input type="text" placeholder="https://www.notion.so/Fit-Me-12672b" />
        </InputBox>
      </InputGroup>
      <InputGroup>
        <InputLabel>포트폴리오 URL</InputLabel>
        <InputBox>
          <Icon />
          <Input type="text" placeholder="https://www.notion.so/Fit-Me-12672b" />
        </InputBox>
      </InputGroup>
      <Button>게시글 등록</Button>
    </Container>
  );
};

export default Step3;
