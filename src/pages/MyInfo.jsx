import React from 'react';
import styled from 'styled-components';

const InfoPageContainer = styled.div`
  padding: 20px;
  font-size: 18px;
  text-align: center;

  h1 {
    font-size: 24px;
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
    color: #555;
  }
`;

const MyInfo = () => {
  return (
    <InfoPageContainer>
      <h1>기본정보 수정</h1>
      <p>여기에서 사용자의 기본정보를 수정할 수 있습니다.</p>
    </InfoPageContainer>
  );
};

export default MyInfo;
