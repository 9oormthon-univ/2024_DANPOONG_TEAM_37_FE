import styled from 'styled-components';
import React from 'react';

const Section = styled.section`
  margin-top: 20px;

  h2 {
    margin-left: 5px;
    font-size: 18px;
    margin-bottom: 16px;
  }
`;

const Card = styled.div`
  border: 1.5px solid rgba(226, 232, 240, 0.8);
  background: white;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 16px;
  height: 182px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

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

const TeamSection = ({ filteredData =[] }) => {
  return (
    <Section>
      {filteredData.map((item) => (
        <Card key={item.id}>
          <div className='header'>
            <div className='title'>{item.title}</div>
            <div className='tag'>{item.deadline}</div>
          </div>
          <div className='footer'>
            <div className='skills'>
              {item.skills.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </div>
            <div className='info'>{item.nickname}</div>
          </div>
        </Card>
      ))}
    </Section>
  );
};

export default TeamSection;