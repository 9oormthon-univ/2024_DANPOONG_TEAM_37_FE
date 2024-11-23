import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  height: 100vh;
`;

const Header = styled.div`
  background-color: #1a3d7d;
  color: white;
  padding: 16px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    cursor: pointer;
  }
`;

const FormGroup = styled.div`
  margin-top: 20px;
`;

const Label = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  resize: none;
  outline: none;

  &::placeholder {
    color: #bbb;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #1a3d7d;
  color: white;
  border: none;
  padding: 15px;
  font-size: 16px;
  border-radius: 8px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #164075;
  }

  &:disabled {
    background-color: #ddd;
    color: #aaa;
    cursor: not-allowed;
  }
`;

const Step3 = () => {
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    console.log('작성된 내용:', content);
    // 여기에서 API 호출 등 처리 로직 추가
  };

  return (
    <Container>
      <FormGroup>
        <Label>자신에 대해 소개해주세요 (선택)</Label>
        <TextArea
          placeholder='자유롭게 내용 작성'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </FormGroup>
      <SubmitButton
        onClick={handleSubmit}
        disabled={!content.trim()} // 내용이 없으면 버튼 비활성화
      >
        등록하기
      </SubmitButton>
    </Container>
  );
};

export default Step3;
