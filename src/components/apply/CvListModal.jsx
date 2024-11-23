import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

// Modal 스타일링
const modalStyles = {
  content: {
    bottom: '0',
    left: '50%',
    right: 'auto',
    transform: 'translateX(-50%)',
    width: '90%',
    maxWidth: '400px',
    borderRadius: '16px 16px 0 0',
    padding: '20px',
    position: 'absolute',
    height: 'auto',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
};

// Styled Components
const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const OpenModalButton = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;

  h3 {
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }
`;

const TabBar = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;

  div {
    font-size: 14px;
    font-weight: bold;
    color: #666;
    cursor: pointer;

    &.active {
      color: #1a3d7d;
    }
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;

  span {
    background: #f5f5f5;
    border-radius: 8px;
    padding: 8px 12px;
    font-size: 12px;
    color: #333;
    cursor: pointer;

    &:hover {
      background: #eaeaea;
    }

    &.active {
      background: #1a3d7d;
      color: white;
    }
  }
`;

const ConfirmButton = styled.button`
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

const CvListModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTags, setActiveTags] = useState([]);

  const techStacks = [
    'Java',
    'Spring',
    'MySQL',
    'MongoDB',
    'React',
    'Vue',
    'SQLite',
    'Nodejs',
    'C',
    'AWS',
    'Figma',
    'Git',
    'TypeScript',
    'Kotlin',
    'Express',
    'Python',
    'Flutter',
    'Swift',
    'ReactNative',
    'Unity',
    'Docker',
    'Firebase',
    'Django',
    'Nextjs',
    'Go',
    'GraphQL',
    'Nestjs',
    'Kotlin',
    'React',
    'Kubernetes',
    'Svelte',
    'JavaScript',
  ];

  const toggleTag = (tag) => {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter((t) => t !== tag));
    } else {
      setActiveTags([...activeTags, tag]);
    }
  };

  return (
    <AppContainer>
      <OpenModalButton onClick={() => setIsModalOpen(true)}>
        기술 스택 바텀 시트 열기
      </OpenModalButton>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={modalStyles}
        contentLabel='기술 스택 바텀 시트'
      >
        {/* Modal Header */}
        <ModalHeader>
          <h3>기술스택 바텀시트</h3>
        </ModalHeader>

        {/* Tab Bar */}
        <TabBar>
          <div className='active'>기술 스택</div>
          <div>포지션</div>
          <div>진행 방식</div>
        </TabBar>

        {/* Tag Container */}
        <TagContainer>
          {techStacks.map((stack, index) => (
            <span
              key={index}
              className={activeTags.includes(stack) ? 'active' : ''}
              onClick={() => toggleTag(stack)}
            >
              {stack}
            </span>
          ))}
        </TagContainer>

        {/* Confirm Button */}
        <ConfirmButton onClick={() => setIsModalOpen(false)}>
          선택완료
        </ConfirmButton>
      </Modal>
    </AppContainer>
  );
};

export default CvListModal;
