import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RecommendSection,Filter } from '../components';

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

const Home = () => {
  return (
    <MyPageSection>
      <RecommendSection />
      <Filter />    
    </MyPageSection>
  );
};
export default Home;
