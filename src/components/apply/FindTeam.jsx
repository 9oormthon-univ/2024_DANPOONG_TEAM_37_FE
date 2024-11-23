import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardContainer = styled.div`
  width: 350px;
  max-width: 400px;
  background: linear-gradient(135deg, #1a1a1a, #333);
  border-radius: 16px;
  padding: 20px;
  color: white;

  position: relative;
  overflow: hidden;
`;

const TextContainer = styled.div`
  width: 80%;
  line-height: 1.5;
  font-weight: bold;
  margin-bottom: 20px;

  span {
    color: #ffd700; /* 강조된 텍스트 색상 */
  }
`;

const ColorOptions = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const ColorCircle = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s;
  }
`;

const FindTeam = () => {
  const colors = ['#ff4500', '#ffd700', '#32cd32']; // 빨강, 노랑, 초록 색상 코드

  return (
    <CardContainer>
      <TextContainer>
        <span>OOO님</span>에게 어울리는 <br />
        <span>team</span>을 찾아드려요
      </TextContainer>
      <ColorOptions>
        {colors.map((color, index) => (
          <ColorCircle key={index} color={color} />
        ))}
      </ColorOptions>
      <Link to='/newcv'>MATE 활성화하기</Link>
    </CardContainer>
  );
};

export default FindTeam;
