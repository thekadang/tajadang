/**
 * 관리자 인증이 필요한 보호된 라우트 컴포넌트
 */

import React, { useState, useEffect } from 'react';
import AdminLogin from '../AdminLogin/AdminLogin';
import DataManager from '../DataManager/DataManager';

const ProtectedAdminRoute: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // 세션 유효시간 (30분)
  const SESSION_DURATION = 30 * 60 * 1000;

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = () => {
    const authStatus = sessionStorage.getItem('admin_authenticated');
    const loginTime = sessionStorage.getItem('admin_login_time');

    if (authStatus === 'true' && loginTime) {
      const currentTime = Date.now();
      const timeDiff = currentTime - parseInt(loginTime);

      // 세션이 유효한지 확인
      if (timeDiff < SESSION_DURATION) {
        setIsAuthenticated(true);
      } else {
        // 세션 만료
        sessionStorage.removeItem('admin_authenticated');
        sessionStorage.removeItem('admin_login_time');
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }

    setIsLoading(false);
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_authenticated');
    sessionStorage.removeItem('admin_login_time');
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '1.2rem'
      }}>
        🔐 인증 확인 중...
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  // 인증된 사용자에게는 로그아웃 기능이 있는 데이터 관리 페이지 표시
  return (
    <div>
      {/* 로그아웃 버튼 */}
      <div style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        zIndex: 1001
      }}>
        <button
          onClick={handleLogout}
          style={{
            background: 'rgba(231, 76, 60, 0.9)',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(192, 57, 43, 0.9)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(231, 76, 60, 0.9)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          🚪 로그아웃
        </button>
      </div>
      
      <DataManager />
    </div>
  );
};

export default ProtectedAdminRoute;
