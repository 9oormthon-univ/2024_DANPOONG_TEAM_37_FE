import React, { useState } from 'react';
import styled from 'styled-components';
import { back } from '../assets';
import { useNavigate, Link } from 'react-router-dom';

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

  .drop {
    width: 90px;
  }
`;

const Label = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const RadioButtonGroup = styled.div`
  width: 90px;
  display: flex;
  gap: 10px;
`;

const RadioButton = styled.div`
  background-color: ${(props) => (props.selected ? '#1a3d7d' : '#f5f5f5')};
  color: ${(props) => (props.selected ? '#ffffff' : '#333')};
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const MBTIContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const MBTIButton = styled.button`
  padding: 10px;
  border-radius: 8px;
  background-color: ${(props) => (props.selected ? '#1a3d7d' : '#f5f5f5')};
  color: ${(props) => (props.selected ? '#fff' : '#333')};
  border: 1px solid #ddd;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const NextButton = styled(Link)`
  width: 100%;
  background-color: #1a3d7d;
  color: white;
  border: none;
  padding: 15px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #164075;
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

const BasicInfoFrom = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const goPrevStep = () => {
    if (step === 1) {
      navigate('/mypage');
    } else {
      setStep((prev) => prev - 1);
    }
  };

  const [gender, setGender] = useState('');
  const [age, setAge] = useState('20');
  const [job, setJob] = useState('');
  const [region, setRegion] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [mbti, setMbti] = useState([]);
  const [contactMethod, setContactMethod] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  const handleMBTI = (type) => {
    setMbti((prev) =>
      prev.includes(type)
        ? prev.filter((mbtiType) => mbtiType !== type)
        : [...prev, type]
    );
  };

  return (
    <Container>
      <Header>
        <BackIcon src={back} alt='뒤로가기' onClick={goPrevStep} />
        기본정보
      </Header>
      <FormGroup>
        <Label>성별</Label>
        <RadioButtonGroup>
          <RadioButton
            selected={gender === '남자'}
            onClick={() => setGender('남자')}
          >
            남자
          </RadioButton>
          <RadioButton
            selected={gender === '여자'}
            onClick={() => setGender('여자')}
          >
            여자
          </RadioButton>
        </RadioButtonGroup>
      </FormGroup>
      <FormGroup>
        <Label>나이</Label>
      </FormGroup>
      <FormGroup>
        <Label>직업</Label>
        <RadioButtonGroup>
          {['대학생', '대학원생', '취준생', '직장인'].map((jobType) => (
            <RadioButton
              key={jobType}
              selected={job === jobType}
              onClick={() => setJob(jobType)}
            >
              {jobType}
            </RadioButton>
          ))}
        </RadioButtonGroup>
      </FormGroup>
      <FormGroup>
        <Label>거주지역</Label>
        <Select
          className='drop'
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value=''>권역 선택</option>
          <option value='수도권'>수도권</option>
          <option value='영남권'>영남권</option>
        </Select>
        <Select
          className='drop'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value=''>도시 선택</option>
          <option value='서울'>서울</option>
          <option value='부산'>부산</option>
        </Select>
        <Select
          className='drop'
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
        >
          <option value=''>행정구역 선택</option>
          <option value='노원구'>노원구</option>
          <option value='해운대구'>해운대구</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>MBTI</Label>
        <MBTIContainer>
          {['E', 'I', 'N', 'S', 'F', 'T', 'P', 'J'].map((type) => (
            <MBTIButton
              key={type}
              selected={mbti.includes(type)}
              onClick={() => handleMBTI(type)}
            >
              {type}
            </MBTIButton>
          ))}
        </MBTIContainer>
      </FormGroup>
      <FormGroup>
        <Label>선호방식</Label>
        <RadioButtonGroup>
          <RadioButton
            selected={contactMethod === '온라인'}
            onClick={() => setContactMethod('온라인')}
          >
            온라인
          </RadioButton>
          <RadioButton
            selected={contactMethod === '오프라인'}
            onClick={() => setContactMethod('오프라인')}
          >
            오프라인
          </RadioButton>
        </RadioButtonGroup>
      </FormGroup>
      <FormGroup>
        <Label>연락수단</Label>
        <Input
          type='text'
          placeholder='카카오톡 아이디'
          value={contactInfo}
          onChange={(e) => setContactInfo(e.target.value)}
        />
      </FormGroup>
      <Button>수정</Button>
    </Container>
  );
};

export default BasicInfoFrom;
