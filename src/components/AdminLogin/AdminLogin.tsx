/**
 * 관리자 로그인 컴포넌트
 * 데이터 관리 페이지 접근을 위한 인증 시스템
 */

import React, { useState } from 'react';
import { AdminLoginContainer, LoginForm, LoginTitle, FormGroup, Input, LoginButton, ErrorMessage } from './AdminLoginStyles';

interface AdminLoginProps {
  onLoginSuccess: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // 환경변수에서 관리자 정보 가져오기
  const ADMIN_USERNAME = process.env.REACT_APP_ADMIN_USERNAME || 'yokadang';
  const ADMIN_PASSWORD = process.env.REACT_APP_ADMIN_PASSWORD || 'rkgudgks1!';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // 간단한 지연 시뮬레이션 (실제 인증 느낌)
    setTimeout(() => {
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        // 로그인 성공 - 세션 스토리지에 저장
        sessionStorage.setItem('admin_authenticated', 'true');
        sessionStorage.setItem('admin_login_time', Date.now().toString());
        onLoginSuccess();
      } else {
        setError('아이디 또는 비밀번호가 잘못되었습니다.');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <AdminLoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <LoginTitle>🔐 관리자 로그인</LoginTitle>
        
        <FormGroup>
          <Input
            type="text"
            placeholder="아이디"
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
            disabled={isLoading}
            autoComplete="username"
          />
        </FormGroup>

        <FormGroup>
          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            disabled={isLoading}
            autoComplete="current-password"
          />
        </FormGroup>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <LoginButton type="submit" disabled={isLoading || !username || !password}>
          {isLoading ? '로그인 중...' : '로그인'}
        </LoginButton>

        <div style={{ 
          marginTop: '1.5rem', 
          fontSize: '0.85rem', 
          opacity: 0.7, 
          textAlign: 'center',
          lineHeight: '1.4'
        }}>
          💡 이 페이지는 관리자 전용입니다.<br/>
          데이터 관리를 위해서는 관리자 권한이 필요합니다.
        </div>
      </LoginForm>
    </AdminLoginContainer>
  );
};

export default AdminLogin;
