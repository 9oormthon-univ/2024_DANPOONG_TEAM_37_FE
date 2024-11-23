import styled from 'styled-components';
import React from 'react';

const Section = styled.section`
  margin-top: 20px;
  width: 350px;
  margin: 0 auto;
  h2 {
    margin-left: 5px;
    font-size: 18px;
    margin-bottom: 16px;
  }
`;

const ListItem = styled.div`
 margin: 0 auto;
  width: 350px;
  height: 270px;
  flex-shrink: 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 15px 25px 15px 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  border: 1.5px solid rgba(226, 232, 240, 0.8);
  margin-bottom: 16px;
  cursor: pointer;

  .content {
    margin-top: 32px;
    font-size: 14px;
    color: #666;
    .title {
      margin: auto;
      align-items: center;
      font-size: 16px;
      font-weight: bold;
      color: #333;
    }
    .text {
      margin-top: 16px;
      font-size: 12px;
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
`;

const Label = styled.div`
  display: flex;
  width: 44px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background: rgba(238, 246, 255, 0.7);
  color: rgba(67, 72, 143, 0.8);
  font-family: Roboto, sans-serif;
  font-size: 9.29px;
  font-weight: 500;
  line-height: 13.271px;
  letter-spacing: 0.066px;
  position: absolute;
  top: 8px;
  left: 8px;
`;

const StatusLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  font-family: Roboto, sans-serif;
  font-size: 9.29px;
  font-weight: 500;
  line-height: 13.271px;
  letter-spacing: 0.066px;
  position: absolute;
  top: 8px;
  right: 8px;
  width: ${(props) => (props.completed ? '44px' : '34px')};
  background: ${(props) => (props.completed ? '#F5F5F5' : '#FFEAEA')};
  color: ${(props) => (props.completed ? '#666' : '#D9534F')};
`;

const TitleIcon = styled.span`
  font-size: 18px;
  margin-right: 8px;
  display: flex;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
  }
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  margin-left: 5px;
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
const TeamSection = ({ filteredData = [] }) => {
  const items = [
    {
      type: '프로젝트',
      title: '프로젝트 1',
      contents: '프로젝트 1에 대한 설명',
      currentMembers: 5,
      totalMembers: 10,
      status: { completed: false, remainingDays: 5 },
    },
    {
      type: '스터디',
      title: '스터디 1',
      contents: '스터디 1에 대한 설명',
      currentMembers: 3,
      totalMembers: 5,
      status: { completed: true },
    },
    {
      type: '프로젝트',
      title: '프로젝트 2',
      contents: '프로젝트 2에 대한 설명',
      currentMembers: 2,
      totalMembers: 10,
      status: { completed: false, remainingDays: 12 },
    },
  ];

  return (
    <Section>
      {items.map((item, index) => (
        <ListItem onClick={() => handleItemClick(item)}>
          <Label>{item.type}</Label>
          <StatusLabel completed={item.status.completed}>
            {item.status.completed
              ? '모집완료'
              : `D-${item.status.remainingDays}`}
          </StatusLabel>
          <div className='content'>
            <div className='title'>{item.title}</div>
            <div className='text'>{item.contents}</div>
          </div>
        </ListItem>
      ))}
    </Section>
  );
};

export default TeamSection;
