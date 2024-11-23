import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Redirection = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    const fetchToken = async () => {
      // 서버에 POST 요청 보내기
      const response = await axios.post(
        `https://teamate-server.duckdns.org/api/v1/login?code=${code}`
      );

      // 서버 응답에서 데이터 추출
      const { accessToken, userData } = response.data.data;

      console.log('로그인 성공! 서버 응답 데이터:', {
        accessToken,
        userId: userData.id,
        nickname: userData.nickname,
      });

      // 액세스 토큰과 사용자 데이터를 localStorage에 저장
      localStorage.setItem('accessToken', accessToken); // 액세스 토큰 저장
      localStorage.setItem('userId', userData.id.toString()); // 사용자 ID 저장
      localStorage.setItem('nickname', userData.nickname); // 사용자 닉네임 저장

      // 홈 화면으로 리다이렉트
      navigate('/home');
    };

    fetchToken();
  }, []);

  return <div>로그인 중입니다...</div>;
};

export default Redirection;
