import styled from 'styled-components';
import { mainLogo, notify } from '../assets';

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

const Section = styled.section`
  margin-top: 20px;

  h2 {
    margin-left: 5px;
    font-size: 18px;
    margin-bottom: 16px;
    color: #333;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
  padding: 16px;
  width: 90%;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;

    .title {
      font-size: 16px;
      font-weight: bold;
      color: #333;
    }

    .tag {
      background: #ff6b6b;
      color: white;
      border-radius: 12px;
      font-size: 12px;
      padding: 2px 8px;
    }
  }

  .content {
    margin: 8px 0;
    font-size: 14px;
    color: #666;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;

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

    .info {
      font-size: 12px;
      color: #999;
    }
  }
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
      <Section>
        <h2>오늘 OOO님에게 온 MATE</h2>
        <Card>
          <div className='header'>
            <div className='title'>프로젝트 제목</div>
            <div className='tag'>D-10</div>
          </div>
          <div className='content'>
            프로젝트 내용 프로젝트 내용 프로젝트 내용 프로젝트 내용 프로젝트
            내용 프로젝트 내용 프로젝트 내용 프로젝트 내용...
          </div>
          <div className='footer'>
            <div className='skills'>
              <span>React</span>
              <span>SpringBoot</span>
              <span>MySQL</span>
              <span>Figma</span>
            </div>
            <div className='info'>2/18</div>
          </div>
        </Card>
      </Section>

      {/* Filter Bar */}
      <FilterBar>
        <div className='active'>전체</div>
        <div>프로젝트</div>
        <div>스터디</div>
      </FilterBar>

      {/* Cards for Projects and Studies */}
      <Section>
        <Card>
          <div className='header'>
            <div className='title'>프로젝트 제목</div>
            <div className='tag'>D-10</div>
          </div>
          <div className='content'>
            프로젝트 내용 프로젝트 내용 프로젝트 내용 프로젝트 내용 프로젝트
            내용 프로젝트 내용 프로젝트 내용 프로젝트 내용...
          </div>
          <div className='footer'>
            <div className='skills'>
              <span>React</span>
              <span>SpringBoot</span>
              <span>MySQL</span>
              <span>Figma</span>
            </div>
            <div className='info'>닉네임</div>
          </div>
        </Card>

        <Card>
          <div className='header'>
            <div className='title'>스터디 제목</div>
            <div className='tag'>D-10</div>
          </div>
          <div className='content'>
            스터디 내용 스터디 내용 스터디 내용 스터디 내용 스터디 내용 스터디
            내용 스터디 내용 스터디 내용...
          </div>
          <div className='footer'>
            <div className='skills'>
              <span>React</span>
              <span>SpringBoot</span>
              <span>MySQL</span>
              <span>Figma</span>
            </div>
            <div className='info'>닉네임</div>
          </div>
        </Card>
      </Section>
    </MyPageSection>
  );
};
export default Home;
