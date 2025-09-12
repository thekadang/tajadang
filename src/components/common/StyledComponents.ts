/**
 * 천지인 키보드 타자연습 앱의 공통 Styled Components
 */

import styled, { keyframes, css } from 'styled-components';

// 애니메이션 정의
export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const scaleIn = keyframes`
  from { 
    opacity: 0;
    transform: scale(0.8);
  }
  to { 
    opacity: 1;
    transform: scale(1);
  }
`;

export const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
`;

export const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

// 기본 컨테이너
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

// 카드 스타일
export const Card = styled.div<{ $padding?: string; $borderRadius?: string }>`
  background: white;
  border-radius: ${props => props.$borderRadius || '15px'};
  padding: ${props => props.$padding || '2rem'};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 2px solid #e0e0e0;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
  }
`;

// 버튼 스타일
export const Button = styled.button<{ 
  $variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  $size?: 'small' | 'medium' | 'large';
  $fullWidth?: boolean;
}>`
  padding: ${props => {
    switch (props.$size) {
      case 'small': return '0.5rem 1rem';
      case 'large': return '1.2rem 2.5rem';
      default: return '1rem 2rem';
    }
  }};
  border: none;
  border-radius: 12px;
  font-size: ${props => {
    switch (props.$size) {
      case 'small': return '0.9rem';
      case 'large': return '1.3rem';
      default: return '1.1rem';
    }
  }};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: ${props => props.$fullWidth ? '100%' : 'auto'};
  font-family: 'Jalnan2', sans-serif;
  
  ${props => {
    switch (props.$variant) {
      case 'primary':
        return css`
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
          
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
          }
        `;
      case 'secondary':
        return css`
          background: #f8f9fa;
          color: #667eea;
          border: 2px solid #667eea;
          
          &:hover {
            background: #667eea;
            color: white;
          }
        `;
      case 'success':
        return css`
          background: linear-gradient(135deg, #4CAF50, #45a049);
          color: white;
          box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
          
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);
          }
        `;
      case 'warning':
        return css`
          background: linear-gradient(135deg, #FF9800, #F57C00);
          color: white;
          box-shadow: 0 4px 15px rgba(255, 152, 0, 0.3);
          
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(255, 152, 0, 0.4);
          }
        `;
      case 'error':
        return css`
          background: linear-gradient(135deg, #f44336, #d32f2f);
          color: white;
          box-shadow: 0 4px 15px rgba(244, 67, 54, 0.3);
          
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(244, 67, 54, 0.4);
          }
        `;
      default:
        return css`
          background: #f8f9fa;
          color: #333;
          border: 2px solid #e0e0e0;
          
          &:hover {
            background: #e9ecef;
          }
        `;
    }
  }}

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

// 텍스트 스타일
export const Text = styled.span<{ 
  $size?: 'small' | 'medium' | 'large' | 'xlarge';
  $weight?: 'normal' | 'bold' | 'light';
  $color?: string;
  $align?: 'left' | 'center' | 'right';
}>`
  font-size: ${props => {
    switch (props.$size) {
      case 'small': return '0.9rem';
      case 'large': return '1.3rem';
      case 'xlarge': return '2rem';
      default: return '1.1rem';
    }
  }};
  font-weight: ${props => {
    switch (props.$weight) {
      case 'bold': return '600';
      case 'light': return '300';
      default: return '400';
    }
  }};
  color: ${props => props.$color || 'inherit'};
  text-align: ${props => props.$align || 'inherit'};
  font-family: 'Jalnan2', sans-serif;
`;

// 플렉스 컨테이너
export const FlexContainer = styled.div<{
  $direction?: 'row' | 'column';
  $justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  $align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  $gap?: string;
  $wrap?: boolean;
}>`
  display: flex;
  flex-direction: ${props => props.$direction || 'row'};
  justify-content: ${props => props.$justify || 'flex-start'};
  align-items: ${props => props.$align || 'stretch'};
  gap: ${props => props.$gap || '0'};
  flex-wrap: ${props => props.$wrap ? 'wrap' : 'nowrap'};
`;

// 그리드 컨테이너
export const GridContainer = styled.div<{
  $columns?: number;
  $gap?: string;
  $minWidth?: string;
}>`
  display: grid;
  grid-template-columns: ${props => 
    props.$columns 
      ? `repeat(${props.$columns}, 1fr)` 
      : `repeat(auto-fit, minmax(${props.$minWidth || '250px'}, 1fr))`
  };
  gap: ${props => props.$gap || '1rem'};
`;

// 알림창 기본 스타일
export const NotificationBase = styled.div<{ $show?: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  opacity: ${props => props.$show ? 1 : 0};
  visibility: ${props => props.$show ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  animation: ${props => props.$show ? fadeIn : 'none'} 0.3s ease;
`;

// 반응형 미디어 쿼리 헬퍼
export const media = {
  mobile: (styles: any) => css`
    @media (max-width: 768px) {
      ${styles}
    }
  `,
  tablet: (styles: any) => css`
    @media (min-width: 769px) and (max-width: 1024px) {
      ${styles}
    }
  `,
  desktop: (styles: any) => css`
    @media (min-width: 1025px) {
      ${styles}
    }
  `
};
