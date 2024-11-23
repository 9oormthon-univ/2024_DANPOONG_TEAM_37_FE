import React from 'react';
import { kakaoLogin } from '../assets';
import styled from 'styled-components';

const LoginButton = styled.img`
  width: 90%;
  `
const Login = () => {
  const REST_API_KEY = 'e5c130c60d0bd080e1447618d144a279';
  const REDIRECT_URI = 'http://localhost:5173/api/v1/kakao';
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    <button type='button' onClick={loginHandler}>
      <LoginButton src={kakaoLogin} alt='kakao-login' />
    </button>
  );
};

export default Login;