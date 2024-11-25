import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { mainLogo, notify } from './assets';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import {
  Home,
  Mate,
  MyPage,
  WritePost,
  ApplyNow,
  Login,
  Redirection,
  Start,
  NewCv,
  BasicInfoFrom
} from './pages';

const Header = styled.header`
  margin: auto;
  width: 100%;
  max-width: 420px;
  height: 120px;
  background: #1a3d7d;
  justify-content: center;
  items-align: center;
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

const shouldRenderHeader = (pathname) => {
  return (
    pathname !== '/write' &&
    pathname !== '/apply' &&
    pathname !== '/' &&
    pathname !== '/newcv' &&
    pathname !== '/mypage/myinfo' 
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );
};

const MainContent = () => {
  const location = useLocation();

  useEffect(() => {
    // 로그인 상태 확인
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem('authToken', token);
    setIsLoggedIn(true);
  };

  return (
    <>
      {shouldRenderHeader(location.pathname) && (
        <Header>
          <LogoImage src={mainLogo} alt='' />
          <Notify src={notify} alt='' />
          <TabBar>
            <Link to='/home' style={{ textDecoration: 'none' }}>
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
      )}
      <main>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Start />} />
          <Route path='/mate' element={<Mate />} />
          <Route path='/mypage' element={<MyPage />} />
          <Route path='/write' element={<WritePost />} />
          <Route path='/apply' element={<ApplyNow />} />
          <Route path='/login' element={<Login />} />
          <Route path='/newcv' element={<NewCv />} />
          <Route path='/api/v1/kakao' element={<Redirection />} />
          <Route path='/mypage/myinfo' element={<BasicInfoFrom />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
};

export default App;
