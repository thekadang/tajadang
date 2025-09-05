/**
 * 관리자 로그인 페이지 스타일드 컴포넌트
 */

import styled from 'styled-components';

export const AdminLoginContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const LoginForm = styled.form`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;
  max-width: 400px;
`;

export const LoginTitle = styled.h1`
  text-align: center;
  color: white;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 15px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    background: white;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &::placeholder {
    color: #999;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: bold;
  background: linear-gradient(135deg, #4ecdc4 0%, #45b7d1 100%);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(78, 205, 196, 0.3);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(78, 205, 196, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ErrorMessage = styled.div`
  background: rgba(231, 76, 60, 0.2);
  color: #e74c3c;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 500;
  border: 1px solid rgba(231, 76, 60, 0.3);
`;
