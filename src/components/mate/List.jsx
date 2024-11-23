import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";  
import PostModal from "./modal/PostModal";

const ListItem = styled.div`
  width: 350px;
  height: 119px; 
  flex-shrink: 0;
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative; 
  border: 1.5px solid rgba(226, 232, 240, 0.8);
  margin-bottom: 16px;
  cursor: pointer; 
`;

const Title = styled.h3`
  font-size: 16px;
  color: #333;
  margin-bottom: 4px; 
`;

const Info = styled.p`
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
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

// 상태
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
  width: ${(props) => (props.completed ? "44px" : "34px")};
  background: ${(props) => (props.completed ? "#F5F5F5" : "#FFEAEA")};
  color: ${(props) => (props.completed ? "#666" : "#D9534F")};
`;


const StatusButton = styled.button`
  width: 65px;
  height: 26px;
  border-radius: 5px;
  background: #1a3d7d;
  color: #fff;
  text-align: center;
  font-family: Pretendard, sans-serif;
  font-size: 10px;
  font-weight: 600;
  line-height: 13.271px; 
  letter-spacing: 0.066px;
  position: absolute;
  bottom: 8px;
  right: 8px;
  border: none;
  cursor: pointer;
`;

const List = () => {
  const navigate = useNavigate();  
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      type: "프로젝트",
      title: "프로젝트 1",
      currentMembers: 5,
      totalMembers: 10,
      status: { completed: false, remainingDays: 5 },
    },
    {
      type: "스터디",
      title: "스터디 1",
      currentMembers: 3,
      totalMembers: 5,
      status: { completed: true },
    },
    {
      type: "프로젝트",
      title: "프로젝트 2",
      currentMembers: 2,
      totalMembers: 10,
      status: { completed: false, remainingDays: 12 },
    },
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item); 
  };

  const handleCloseModal = () => {
    setSelectedItem(null); 
  };

  const handleStatusButtonClick = () => {
    navigate("/apply");  
  };

  return (
    <div>
      {items.map((item, index) => (
        <ListItem key={index} onClick={() => handleItemClick(item)}>
          <Label>{item.type}</Label>
          <StatusLabel completed={item.status.completed}>
            {item.status.completed
              ? "모집완료"
              : `D-${item.status.remainingDays}`}
          </StatusLabel>
          <Title>{item.title}</Title>
          <Info>
            {item.currentMembers}명 / {item.totalMembers}명
          </Info>
          <StatusButton onClick={handleStatusButtonClick}>지원현황</StatusButton> 
        </ListItem>
      ))}

      {selectedItem && <PostModal data={selectedItem} onClose={handleCloseModal} />}
    </div>
  );
};

export default List;
