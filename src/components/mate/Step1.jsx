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
  margin-bottom: 2px;
  margin-left: ${(props) => (props.right ? "-170px" : "-261px")};
`;

const Select = styled.select`
  display: flex;
  width: 330px;
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
  background-image: ${(props) => (props.hasValue ? "none" : `url(${calendar})`)}; /* 입력값 없을 때만 아이콘 표시 */
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

const Step1 = ({ onNext }) => {
  const [endDate, setEndDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [calendarOpenEnd, setCalendarOpenEnd] = useState(false);
  const [calendarOpenStart, setCalendarOpenStart] = useState(false);

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

  return (
    <Container>
      <Title>모집 구분</Title>
      <Select>
        <option>스터디/프로젝트</option>
      </Select>
      <Title>모집 인원</Title>
      <Select>
        <option>인원 미정 ~ 10명 이상</option>
      </Select>
      <Title>진행 방식</Title>
      <Select>
        <option>오프라인/ 온라인</option>
      </Select>
      <Title>진행 기간</Title>
      <Select>
        <option>기간 미정 ~ 6개월</option>
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
            onClickOutside={() => setCalendarOpenEnd(false)} // 외부 클릭 시 달력 닫기
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
            onClickOutside={() => setCalendarOpenStart(false)} // 외부 클릭 시 달력 닫기
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
      <Select>
        <option>10명 이상</option>
      </Select>
      <Select>
        <option>10명 이상</option>
      </Select>
      <Button onClick={onNext}>다음</Button>
    </Container>
  );
};

export default Step1;
