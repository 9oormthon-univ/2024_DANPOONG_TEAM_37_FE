import React, { useState } from 'react';
import styled from 'styled-components';
import {TeamSection} from '../../components'

const Container = styled.div`

  width: 90%;
`;

const Tabs = styled.div`
  margin-bottom: 16px;
`;

const Tab = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background: white;
  color: ${({ active }) => (active ? 'black' : '#474747')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  font-size: 20px;
  font-style: normal;
  cursor: pointer;
  border: none;
`;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .skills {
    display: flex;
    gap: 8px;

    span {
      background: #f5f5f5;
      border-radius: 8px;
      padding: 4px 8px;
      font-size: 12px;
      color: #333;
    }
  }
`;

const Filter = () => {
  const [activeTab, setActiveTab] = useState('전체');

  const data = [
    {
      id: 1,
      type: '프로젝트',
      title: '프로젝트 제목',
      skills: ['React', 'SpringBoot', 'MySQL', 'Figma'],
      deadline: 'D-10',
    },
    {
      id: 2,
      type: '스터디',
      title: '스터디 제목',
      skills: ['React', 'SpringBoot', 'MySQL', 'Figma'],
      deadline: 'D-10',
    },
  ];

  const filteredData =
    activeTab === '전체'
      ? data
      : data.filter((item) => item.type === activeTab);

  return (
    <Container>
      <Tabs>
        {['전체', '프로젝트', '스터디'].map((tab) => (
          <Tab
            key={tab}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Tab>
        ))}
      </Tabs>
      <TeamSection filteredData={filteredData} />
    </Container>
  );
};

export default Filter;
