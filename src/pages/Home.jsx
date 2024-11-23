import React from 'react';
import styled from 'styled-components';
import { TeamSection, RecommendSection } from '../components';

const MyPageSection = styled.section`
  margin: auto;
  width: 100%;
  max-width: 420px; 
  display: flex;
  height : auto
  min-height: 100vh
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FilterBar = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 16px 0;
  padding-bottom: 8px;
  border-bottom: 1px solid #ddd;

  div {
    cursor: pointer;

    &.active {
      font-weight: bold;
      color: #1a3d7d;
    }
  }
`;

const Home = () => {
  return (
    <MyPageSection>
      <RecommendSection />
      <FilterBar>
        <div className='active'>전체</div>
        <div>프로젝트</div>
        <div>스터디</div>
      </FilterBar>
      <TeamSection />
      <TeamSection />
    </MyPageSection>
  );
};
export default Home;
