import styled from 'styled-components';

const TeamSection = styled.section`
  margin-bottom: 16px;
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .section-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default TeamSection;