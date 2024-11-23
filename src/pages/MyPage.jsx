import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { basicProfile } from '../assets';
import Modal from 'react-modal';
import CvModal from '../components/mypage/CvModal';

const MyPageSection = styled.section`
  display: flex;
  height : auto
  min-height: 100vh
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Profile = styled.img`
  margin: auto;
  margin-top: 46px;
  display: block;
  width: 100px;
  height: 100px;
  flex-shrink: 0;
`;

const InfoDiv = styled.div`
  margin-top: 25px;
  .section-title {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 35px; /* 218.75% */
    letter-spacing: 0.098px;
    margin-bottom: 5px;
    margin-left: 20px;
  }
`;

const InfoBox = styled.div`
  margin: auto;
  width: 90%;
  max-width: 350px; /* 최대 너비 제한 */
  height: 100px;
  flex-shrink: 0;
  background-color: #f5f5f5;
  font-size: 13px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  padding: 0 12px;
  color: black;

  .page {
    position: relative;
    width: 350px;
    height: 50px;
  }
`;

const ToggleSwitch = styled.div`
  position: relative;
  width: 40px;
  height: 20px;
  background-color: ${(props) => (props.active ? '#1A3D7D' : '#fff')};
  border-style: solid;
  border-width: 1px;
  border-color: #d9d9d9;
  border-radius: 20px;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: ${(props) => (props.active ? '20px' : '2px')};
    width: 16px;
    height: 16px;
    background-color: #d9d9d9;
    border-radius: 50%;
    transition: left 0.5s;
  }
`;

const InfoLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
`;

const MyPage = () => {
  const [projectActive, setProjectActive] = useState(true);
  const [studyActive, setStudyActive] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  Modal.setAppElement('#root');

  return (
    <div>
      <MyPageSection>
        <Profile src={basicProfile} />
        <h2 className='profile-name'>닉네임</h2>
        <div className='profile-email'>이메일</div>
        <InfoDiv>
          <div className='section-title'>내 정보</div>
          <InfoBox>
            <InfoLink to='/mypage/myinfo'>
              <div className='page'>기본정보 수정</div>
            </InfoLink>
            <InfoLink to='/mypage'>
              <div
                className='page'
                style={{ cursor: 'pointer' }}
                onClick={() => setIsModalOpen(true)}
              >
                지원서 관리
              </div>
            </InfoLink>
          </InfoBox>
        </InfoDiv>
        <InfoDiv>
          <div className='section-title'>제안 활성화</div>
          <InfoBox>
            <div className='page'>
              프로젝트 제안 활성화
              <ToggleSwitch
                active={projectActive}
                onClick={() => setProjectActive(!projectActive)}
              />
            </div>
            <div className='page'>
              스터디 제안 활성화
              <ToggleSwitch
                active={studyActive}
                onClick={() => setStudyActive(!studyActive)}
              />
            </div>
          </InfoBox>
        </InfoDiv>
        <CvModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title='지원서 관리'
        >
          <p>여기에 지원서를 추가하거나 관리할 수 있습니다.</p>
        </CvModal>
      </MyPageSection>
    </div>
  );
};

export default MyPage;
