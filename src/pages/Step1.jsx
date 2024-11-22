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

const Step1 = ({ onNext }) => {
  return (
    <Container>
      <h2>모집 정보 입력</h2>
      <select>
        <option>스터디/프로젝트</option>
      </select>
      <select>
        <option>10명 이상</option>
      </select>
      <Button onClick={onNext}>다음</Button>
    </Container>
  );
};

export default Step1;
