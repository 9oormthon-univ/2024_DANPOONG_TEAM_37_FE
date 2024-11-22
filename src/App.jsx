import styled from 'styled-components';
import { mainLogo, notify } from './assets';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home, Mate, MyPage, MyInfo } from './pages';


const HeaderContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  width: 100%;
  height: 120px; 
`;

const Header = styled.header`
  width: 100%;
  max-width: 420px; 
  height: 120px;
  background: #1a3d7d;
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  position: relative;
`;

const LogoImage = styled.img`
  margin: auto;
  display: block;
  margin-bottom: 12px;
  width: 138px;
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
  text-align: center;
  color: var(--Schemes-Surface-Container-Lowest, #fff);
  font-size: 15px;
  font-style: normal;
  height: 37px;
  width: 130px;
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

const App = () => {
  return (
    <>
      <BrowserRouter>
        <HeaderContainer>
          <Header>
            <LogoImage src={mainLogo} alt='' />
            <Notify src={notify} alt='' />
            <TabBar>
              <Link to='/' style={{ textDecoration: 'none' }}>
                <TabItem>HOME</TabItem>
              </Link>
              <Link to='/mate' style={{ textDecoration: 'none' }}>
                <TabItem>MATE</TabItem>
              </Link>
              <Link to='/mypage' style={{ textDecoration: 'none' }}>
                <TabItem>MY</TabItem>
              </Link>
              <Underline />
            </TabBar>
          </Header>
        </HeaderContainer>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/mate' element={<Mate />} />
            <Route path='/mypage' element={<MyPage />} />
            <Route path='/mypage/myinfo' element={<MyInfo />} />
           
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};
export default App;
