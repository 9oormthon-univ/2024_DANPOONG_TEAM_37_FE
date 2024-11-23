import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { dropdown, calendar } from "../../assets"; 

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  height: 75vh;
`;

const Title = styled.h2`
  font-size: 16px;
  color: #333;
  font-family: Normal;
  margin-bottom: 2px;
  margin-left: ${(props) => (props.right ? "-170px" : "-261px")};
`;

const Select = styled.select`
  display: flex;
  width: ${(props) => props.width || "330px"};
  height: 45px;
  justify-content: center;
  align-items: center;
  font-family: Medium;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1.5px solid rgba(226, 232, 240, 0.8);
  padding: 10px;
  font-size: 14px;
  color: #757575;
  margin-bottom: 0px;
  margin-top: 0.5px;
  box-sizing: border-box;
  background-color: white;
  background-image: url(${dropdown});
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 12px;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:focus {
    outline: none;
    border: 1.5px solid rgba(226, 232, 240, 0.8);
  }
`;

const DateInput = styled.div`
  display: flex;
  width: 160px;
  height: 45px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: 14px;
  font-family: Medium;
  color: #757575;
  border-radius: 8px;
  border: 1.5px solid rgba(226, 232, 240, 0.8);
  box-sizing: border-box;
  background-color: transparent; 
  cursor: pointer;
  background-image: ${(props) => (props.hasValue ? "none" : `url(${calendar})`)}; 
  background-repeat: no-repeat;
  background-position: right 10px center; 
  background-size: 16px; 

  & .react-datepicker-wrapper {
    width: 100%;
  }

  & input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 14px;
    color: #757575;
    padding-right: 5px; 
    background-color: transparent; 
  }
`;

const Button = styled.button`
  width: 330px;
  display: flex;
  height: 45px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 16px;
  background: white;
  color: #B3B3B3;
  border: 1.5px solid #E2E8F0;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  margin-top: auto;

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    border: 1.5px solid #E2E8F0;
  }
`;

const AddButton = styled.button`
  display: flex;
  width: 53px;
  height: 25px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1.5px solid rgba(226, 232, 240, 0.80);
  background-color: transparent;
  font-size: 12px;
  color: #B3B3B3;
  cursor: pointer;
  margin-top: -35px; 
  margin-left: 273px;
`;

const TagInputContainer = styled.div`
  display: flex;
  width: 330px;
  height: 45px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1.5px solid rgba(226, 232, 240, 0.8);
  padding: 10px;
  box-sizing: border-box;
`;

const TagInputField = styled.input`
  width: 80%;
  border: none;
  outline: none;
  font-size: 14px;
  color: #757575;
  background-color: transparent;
  padding-right: 5px;
  padding-right: 63px; 
`;

const AddTagButton = styled.button`
  width: 20%;
  height: 35px;
  margin-left: 10px;
  background-color: transparent;
  border: 1.5px solid rgba(226, 232, 240, 0.8);
  border-radius: 8px;
  font-size: 12px;
  color: #757575;
  cursor: pointer;
`;

const TagsDisplay = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  color: #757575;
  font-size: 14px;
`;

const Step1 = ({ onNext }) => {
  const [endDate, setEndDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [calendarOpenEnd, setCalendarOpenEnd] = useState(false);
  const [calendarOpenStart, setCalendarOpenStart] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [selectedTechStack, setSelectedTechStack] = useState([]);

  const handleIconClickEnd = () => {
    setCalendarOpenEnd(!calendarOpenEnd); 
  };

  const handleIconClickStart = () => {
    setCalendarOpenStart(!calendarOpenStart); 
  };

  const handleInputClickEnd = () => {
    setCalendarOpenEnd(true); 
  };

  const handleInputClickStart = () => {
    setCalendarOpenStart(true); 
  };

  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const addTag = () => {
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };

  const handleTechStackChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue && !selectedTechStack.includes(selectedValue)) {
      setSelectedTechStack([...selectedTechStack, selectedValue]);
    }
  };

  

  return (
    <Container>
      <Title>모집 구분</Title>
      <Select>
        <option value="" disabled selected>스터디/프로젝트</option>
        <option>스터디</option>
        <option>프로젝트</option>
      </Select>
  
      <Title>모집 인원</Title>
      <Select>
        <option value="" disabled selected>인원미정 ~ 10명 이상</option>
        <option>인원 미정</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10명이상</option>
      </Select>
  
      <Title>진행 방식</Title>
      <Select>
        <option value="" disabled selected>오프라인/ 온라인</option>
        <option>오프라인</option>
        <option>온라인</option>
      </Select>
  
      <Title>진행 기간</Title>
      <Select>
        <option value="" disabled selected>기간미정 ~ 6개월</option>
        <option>기간 미정</option>
        <option>1개월</option>
        <option>2개월</option>
        <option>3개월</option>
        <option>4개월</option>
        <option>5개월</option>
        <option>6개월</option>
      </Select>
  
      <Title right>모집 마감일/진행 시작일</Title>
      <div style={{ display: "flex", gap: "10px" }}>
        <DateInput hasValue={!!endDate} onClick={handleInputClickEnd}>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            placeholderText="모집 마감일"
            dateFormat="yyyy-MM-dd"
            open={calendarOpenEnd}
            onClickOutside={() => setCalendarOpenEnd(false)}
          />
          {!endDate && (
            <img
              src={calendar}
              alt="calendar"
              style={{ width: "16px", height: "16px", cursor: "pointer" }}
              onClick={handleIconClickEnd}
            />
          )}
        </DateInput>
        <DateInput hasValue={!!startDate} onClick={handleInputClickStart}>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="진행 시작일"
            dateFormat="yyyy-MM-dd"
            open={calendarOpenStart}
            onClickOutside={() => setCalendarOpenStart(false)}
          />
          {!startDate && (
            <img
              src={calendar}
              alt="calendar"
              style={{ width: "16px", height: "16px", cursor: "pointer" }}
              onClick={handleIconClickStart}
            />
          )}
        </DateInput>
      </div>
  
      <Title>모집 분야</Title>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Select width="130px" onChange={(e) => setSelectedPosition(e.target.value)}>
          <option value="" disabled selected>포지션</option>
          <option>인공지능</option>
          <option>안드로이드</option>
          <option>백엔드</option>
          <option>디자이너</option>
          <option>프론트엔드</option>
          <option>iOS</option>
          <option>마케터</option>
          <option>기획자</option>
          <option>PM</option>
        </Select>
        <Select width="187px" onChange={handleTechStackChange}>
          <option value="" disabled selected>기술 스택</option>
          <option>Java</option>
  <option>Spring</option>
  <option>MySQL</option>
  <option>MongoDB</option>
  <option>React</option>
  <option>Vue</option>
  <option>SQLite</option>
  <option>Nodejs</option>
  <option>C</option>
  <option>AWS</option>
  <option>Figma</option>
  <option>Git</option>
  <option>TypeScript</option>
  <option>Kotlin</option>
  <option>Express</option>
  <option>Python</option>
  <option>Flutter</option>
  <option>Swift</option>
  <option>ReactNative</option>
  <option>Unity</option>
  <option>Docker</option>
  <option>Firebase</option>
  <option>Django</option>
  <option>Nextjs</option>
  <option>Go</option>
  <option>GhaphQL</option>
  <option>Kubernetes</option>
  <option>Svelte</option>
  <option>JavaScript</option>
        </Select>
      </div>
  
      {/* TagInputField와 선택된 기술스택 태그들이 함께 들어감 */}
      <TagInputContainer style={{ display: "flex", alignItems: "center", gap: "8px" }}>
  <div style={{ position: "relative", display: "flex", alignItems: "center", width: "100%" }}>
    <TagInputField
      type="text"
      placeholder="포지션"
      value={selectedPosition ? `${selectedPosition}ㅣ` : "포지션 "} // 포지션 뒤에 | 표시
      readOnly // 입력을 막고 선택된 포지션만 보여줌
    />
    {/* 선택된 기술스택을 태그 형태로 표시 */}
    <div style={{
      display: "flex", // 태그를 가로로 나열
      gap: "8px", // 태그 간격
      flexWrap: "nowrap", // 줄바꿈 없이 나열
      alignItems: "center",
      position: "absolute",
      left: `${selectedPosition ? `${selectedPosition.length * 10 + 20}px` : "70px"}`, // 포지션 글씨 길이에 따라 태그 위치 조정
    }}>
      {selectedTechStack.map((tech, index) => (
        <div key={index} style={{
          display: "inline-flex", 
          height: "24px",
          padding: "0px var(--Space-200, 8px)", // 양옆 여백
          alignItems: "center",
          gap: "8px", 
          flexShrink: 0,
          borderRadius: "6px",
          background: "#1A3D7D",
          color: "white",
          fontSize: "14px",
          whiteSpace: "nowrap", 
        }}>
          {tech}
         
          <button
            onClick={() => handleRemoveTag(index)}
            style={{
              background: "none",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
              margin: 0,
              cursor: "pointer",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                opacity="0.5"
                d="M5 3.88906L8.88906 0L10 1.11094L6.11094 5L10 8.88906L8.88906 10L5 6.11094L1.11094 10L0 8.88906L3.88906 5L0 1.11094L1.11094 0L5 3.88906Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  </div>
</TagInputContainer>


      <Button onClick={onNext}>다음</Button>
    </Container>
  );
  
  
  
};

export default Step1;