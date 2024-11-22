import React from "react";
import styled from "styled-components";

const ToggleContainer = styled.div`
  display: flex;
  height: 25px; /* 높이 유지 */
  padding: 4px 0px;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  width: 130px; /* 너비를 줄임 */
  margin: 0 auto;
  position: relative; /* 상대 위치 설정 */
  background-color: transparent; /* 배경색 없음 */
`;

const ToggleButton = styled.button`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px; /* 높이 유지 */
  padding: 4px 0px;
  background-color: transparent;
  color: ${(props) => (props.active ? "#FFF" : "#757575")};
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: ${(props) => (props.active ? "700" : "normal")};
  line-height: 20px; /* 142.857% */
`;

const Slider = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => (props.active === "팀장" ? "0" : "65px")}; /* left 위치를 조정 */
  width: 65px; /* 너비를 줄임 */
  height: 100%; /* 높이 유지 */
  background-color: #1a3d7d; /* 활성화된 버튼 색 */
  border-radius: 9999px; /* 둥근 모서리 */
  transition: all 0.3s ease; /* 이동 애니메이션 */
  z-index: -1;
`;

const Toggle = ({ onToggleChange }) => {
  const [activeTab, setActiveTab] = React.useState("팀장");

  const handleClick = (tab) => {
    setActiveTab(tab);
    onToggleChange(tab); // 상위 컴포넌트로 상태 전달
  };

  return (
    <ToggleContainer>
      {/* Slider 요소가 이동하도록 추가 */}
      <Slider active={activeTab} />
      <ToggleButton
        active={activeTab === "팀장"}
        onClick={() => handleClick("팀장")}
      >
        팀장
      </ToggleButton>
      <ToggleButton
        active={activeTab === "팀원"}
        onClick={() => handleClick("팀원")}
      >
        팀원
      </ToggleButton>
    </ToggleContainer>
  );
};

export default Toggle;
