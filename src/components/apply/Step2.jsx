import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { useNavigate, Link } from 'react-router-dom';
import { back } from '../../assets';

const Container = styled.div`
  width: 100%;
  max-width: 420px;
  margin: auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow-y: auto;
`;

const Header = styled.div`
  height: 80px;
  background: #1a3d7d;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const BackIcon = styled.img`
  position: absolute;
  left: 20px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
`;

const ToggleButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const ToggleButton = styled.button`
  flex: 1;
  background-color: ${(props) => (props.selected ? '#1a3d7d' : '#f5f5f5')};
  color: ${(props) => (props.selected ? '#fff' : '#333')};
  border: 1px solid ${(props) => (props.selected ? '#1a3d7d' : '#ddd')};
  border-radius: 8px;
  padding: 10px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.selected ? '#164075' : '#eaeaea')};
  }
`;

const Dropdown = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
`;

const NextButton = styled.button`
  width: 100%;
  background-color: ${(props) => (props.disabled ? '#ddd' : '#1a3d7d')};
  color: ${(props) => (props.disabled ? '#aaa' : 'white')};
  border: none;
  padding: 15px;
  font-size: 16px;
  border-radius: 8px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(props) => (props.disabled ? '#ddd' : '#164075')};
  }
`;

const InterestTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const Tag = styled.div`
  background-color: #1a3d7d;
  color: white;
  padding: 8px 12px;
  border-radius: 16px;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    cursor: pointer;
    font-weight: bold;
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
  color: #b3b3b3;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  margin-top: auto;

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    border: 1.5px solid #e2e8f0;
  }
`;

const customSelectStyles = {
  control: (styles) => ({
    ...styles,
    borderRadius: '8px',
    border: '1px solid #ddd',
    padding: '4px',
  }),
};

const Step2 = ({onNext}) => {
  const [form, setForm] = useState({
    name: '',
    category: '프로젝트',
    position: '',
    techStack: [],
    interests: ['Spring', 'Java'],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (category) => {
    setForm((prev) => ({ ...prev, category }));
  };

  const handleTechStackChange = (selected) => {
    setForm((prev) => ({ ...prev, techStack: selected }));
  };

  const handleTagRemove = (tag) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.filter((item) => item !== tag),
    }));
  };

  const positions = [
    { value: 'frontend', label: '프론트엔드' },
    { value: 'backend', label: '백엔드' },
    { value: 'design', label: '디자인' },
  ];

  const techStackOptions = [
    { value: 'React', label: 'React' },
    { value: 'Spring', label: 'Spring' },
    { value: 'Java', label: 'Java' },
    { value: 'Node.js', label: 'Node.js' },
  ];

  return (
    <Container>
      <FormGroup>
        <Label>지원서 이름</Label>
        <Input
          name='name'
          placeholder='지원서 이름을 입력하세요.'
          value={form.name}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>분야</Label>
        <ToggleButtonGroup>
          <ToggleButton
            selected={form.category === '프로젝트'}
            onClick={() => handleCategoryChange('프로젝트')}
          >
            프로젝트
          </ToggleButton>
          <ToggleButton
            selected={form.category === '스터디'}
            onClick={() => handleCategoryChange('스터디')}
          >
            스터디
          </ToggleButton>
        </ToggleButtonGroup>
      </FormGroup>
      <FormGroup>
        <Label>포지션</Label>
        <Dropdown
          name='position'
          value={form.position}
          onChange={handleInputChange}
        >
          <option value=''>지원할 포지션을 선택해 주세요.</option>
          {positions.map((pos) => (
            <option key={pos.value} value={pos.value}>
              {pos.label}
            </option>
          ))}
        </Dropdown>
      </FormGroup>
      <FormGroup>
        <Label>기술 스택</Label>
        <Select
          isMulti
          options={techStackOptions}
          value={form.techStack}
          onChange={handleTechStackChange}
          styles={customSelectStyles}
          placeholder='기술 스택을 선택해 주세요.'
        />
      </FormGroup>
      <FormGroup>
        <Label>관심 토픽</Label>
        <InterestTags>
          {form.interests.map((tag) => (
            <Tag key={tag}>
              {tag}
              <span onClick={() => handleTagRemove(tag)}>×</span>
            </Tag>
          ))}
        </InterestTags>
      </FormGroup>
      <Button onClick={onNext}>다음</Button>
    </Container>
  );
};

export default Step2;
