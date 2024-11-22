import styled from 'styled-components';
import { mainLogo, notify } from '../assets';

const MyPageSection = styled.section`
  display: flex;
  height : auto
  min-height: 100vh
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const Home = () => {
  return (
    <MyPageSection>
      <div>home</div>
    </MyPageSection>
  );
};
export default Home;
