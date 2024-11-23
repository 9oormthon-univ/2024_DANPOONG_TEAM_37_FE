import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

const Section = styled.div`
  margin-top: 20px;
  width: 90%;
`;

const RecommendCard = styled.div`
  border: 1.5px solid rgba(226, 232, 240, 0.8);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
  padding: 15px 25px 15px 25px;
  height: 270px;
  cursor: pointer;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;

    .tag {
      background: #ff6b6b;
      color: white;
      border-radius: 12px;
      font-size: 12px;
      padding: 2px 8px;
    }
  }

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
  }
`;

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '500px',
    borderRadius: '16px',
    padding: '20px',
    position: 'relative',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
};

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    color: #333;
  }

  .tag {
    background: #ff6b6b;
    color: white;
    padding: 4px 8px;
    font-size: 12px;
    border-radius: 8px;
  }
`;

const DescriptionBox = styled.div`
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  min-height: 100px;
  font-size: 14px;
  color: #555;
  overflow-y: auto;
  margin-bottom: 16px;
`;

const ApplyButton = styled.button`
  width: 100%;
  background: #007bff;
  color: white;
  border: none;
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

const RecommendSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Section>
      <h2>오늘 OOO님에게 온 MATE</h2>
      <RecommendCard onClick={() => setIsModalOpen(true)}>
        <div className='header'>
          <div className='tag'>D-10</div>
        </div>
        <div className='content'>
          <div className='title'>프로젝트 제목</div>
          <p className='text'>
            프로젝트 내용 프로젝트 내용 프로젝트 내용 프로젝트 내용 프로젝트
            프로젝트 내용 프로젝트 내용 프로젝트 내용 프로젝트 내용 프로젝트
          </p>
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
      </RecommendCard>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={modalStyles}
        contentLabel='추천 게시글'
      >
        <ModalHeader>
          <h3>프로젝트 제목</h3>
          <span className='tag'>D-10</span>
        </ModalHeader>
        <p>작성자 | 2024. 11. 02</p>

        <DescriptionBox>상세 모집글 내용이 여기에 들어갑니다.</DescriptionBox>

        <ApplyButton onClick={() => setIsModalOpen(false)}>
          지원하기
        </ApplyButton>
      </Modal>
    </Section>
  );
};

export default RecommendSection;
