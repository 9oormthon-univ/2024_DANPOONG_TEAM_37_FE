import React from "react";
import styled from "styled-components";


const ListItem = styled.div`
  width: 350px;
  height: 119px;
  flex-shrink: 0;
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1.5px solid rgba(226, 232, 240, 0.8);
  margin-bottom: 16px;
`;


const Title = styled.h3`
  font-size: 16px;
  color: #333;
  margin-bottom: 8px;
`;

const Content = styled.p`
  font-size: 14px;
  color: #666;
`;


const LeaderList = () => {
  return (
    <div>
      <ListItem>
        <Title>프로젝트 1</Title>
        <Content>프로젝트 1에 대한 간단한 설명입니다.</Content>
      </ListItem>
      <ListItem>
        <Title>프로젝트 2</Title>
        <Content>프로젝트 2에 대한 간단한 설명입니다.</Content>
      </ListItem>
      <ListItem>
        <Title>프로젝트 3</Title>
        <Content>프로젝트 3에 대한 간단한 설명입니다.</Content>
      </ListItem>
    </div>
  );
};

export default LeaderList;
