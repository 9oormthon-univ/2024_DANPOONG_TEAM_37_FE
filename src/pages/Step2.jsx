import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: #1a3d7d;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const Step2 = ({ onNext }) => {
  return (
    <Container>
      <h2>게시글 제목</h2>
      <input type="text" placeholder="제목을 작성해주세요" />
      <textarea placeholder="내용을 작성해주세요" rows="8"></textarea>
      <Button onClick={onNext}>다음</Button>
    </Container>
  );
};

export default Step2;
