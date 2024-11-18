import styled from 'styled-components';
import { logoSmall, notify } from '../assets';

const Header = styled.div`
  width: 100vw;
  height: 120px;
  background: #1a3d7d;
  justify-content: space-between;

  position: relative;
`;

const LogoImage = styled.img`
  margin: auto;
  display: block;
  margin-bottom: 12px;
`;

const Notify = styled.img`
  position: absolute;
  right: 25px;
  top: 25%;
  transform: translateY(-50%);
`;

const TabBar = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 8px 0;
`;

const TabItem = styled.div`
  flex: 1;
  text-align: center;
  color: var(--Schemes-Surface-Container-Lowest, #fff);
  font-size: 15px;
  font-style: normal;
  height: 37px;
  &:hover {
    font-weight: bold;
    border-bottom: 3px solid white;
  }
`;

const Underline = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 1px;
  background: white;
  opacity: 0.3;
	margin-bottom: 1px;
`;

const Home = () => {
  return (
    <Header>
      <LogoImage src={logoSmall} alt='' />
      <Notify src={notify} alt='' />
      <TabBar>
        <TabItem>HOME</TabItem>
        <TabItem>MATE</TabItem>
        <TabItem>MY</TabItem>
        <Underline />
      </TabBar>
    </Header>
  );
};
export default Home;
