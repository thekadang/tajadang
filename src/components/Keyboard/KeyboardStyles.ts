/**
 * Keyboard 컴포넌트의 Styled Components
 */

import styled, { css } from 'styled-components';
import { Card, media } from '../common/StyledComponents';

// 키보드 섹션 컨테이너
export const KeyboardSection = styled.section`
  margin: 1.5rem 0;
`;

// 키보드 컨테이너
export const KeyboardContainer = styled(Card)`
  text-align: center;
  padding: 2rem;
  
  ${media.mobile(`
    padding: 1.5rem;
  `)}
`;

// 키보드 제목
export const KeyboardTitle = styled.h3`
  margin-bottom: 1.5rem;
  color: #333;
  font-size: 1.3rem;
  font-weight: 600;
  
  ${media.mobile(`
    font-size: 1.1rem;
    margin-bottom: 1rem;
  `)}
`;

// 키보드 그리드
export const KeyboardGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 400px;
  margin: 0 auto;
  
  ${media.mobile(`
    max-width: 350px;
    gap: 10px;
  `)}
`;

// 키 행
export const KeyRow = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  
  ${media.mobile(`
    gap: 8px;
  `)}
`;

// 키 버튼 기본 스타일
export const KeyButton = styled.button<{ 
  $isTarget?: boolean;
  $pressCount?: number;
  $pressVariant?: 'press-1' | 'press-2' | 'press-3';
  $variant?: 'normal' | 'backspace' | 'enter' | 'special';
}>`
  min-width: 70px;
  height: 70px;
  border: none;
  border-radius: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  color: #333;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  font-family: 'Jalnan2', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  user-select: none;
  position: relative;

  ${media.mobile(`
    min-width: 60px;
    height: 60px;
    border-radius: 12px;
  `)}

  // 호버 효과
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);
  }

  // 활성화 효과
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  // 타겟 키 스타일
  ${props => props.$isTarget && css`
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-color: #667eea;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
    animation: pulse 1.5s infinite;

    @keyframes pulse {
      0%, 100% { 
        box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
      }
      50% { 
        box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
        transform: translateY(-2px) scale(1.02);
      }
    }

    // 연속 누르기 표시
    ${props.$pressCount === 2 && css`
      &::after {
        content: '2번';
        position: absolute;
        top: -8px;
        right: -8px;
        background: #ff6b6b;
        color: white;
        font-size: 10px;
        padding: 2px 6px;
        border-radius: 10px;
        font-weight: bold;
      }
    `}

    ${props.$pressCount === 1 && css`
      &::after {
        content: '1번';
        position: absolute;
        top: -8px;
        right: -8px;
        background: #4ecdc4;
        color: white;
        font-size: 10px;
        padding: 2px 6px;
        border-radius: 10px;
        font-weight: bold;
      }
    `}
  `}

  // 특수 키 스타일
  ${props => props.$variant === 'backspace' && css`
    background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
    color: white;
    font-size: 1rem;

    &:hover {
      background: linear-gradient(135deg, #ee5a52 0%, #dc4c3e 100%);
    }
  `}

  ${props => props.$variant === 'enter' && css`
    background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
    color: white;
    font-size: 1rem;

    &:hover {
      background: linear-gradient(135deg, #44a08d 0%, #093637 100%);
    }
  `}

  ${props => props.$variant === 'special' && css`
    background: linear-gradient(135deg, #96ceb4 0%, #ffeaa7 100%);
    color: #333;
    font-size: 0.9rem;
  `}
`;

// 키 버튼 별칭
export const Key = KeyButton;

// 키 문자 표시
export const KeyChar = styled.span`
  font-size: 1.4rem;
  line-height: 1;
  font-weight: bold;
  
  ${media.mobile(`
    font-size: 1.2rem;
  `)}
`;

// 키 번호 표시
export const KeyNumber = styled.span`
  font-size: 0.8rem;
  opacity: 0.7;
  line-height: 1;
  
  ${media.mobile(`
    font-size: 0.7rem;
  `)}
`;

// 키 서브 텍스트
export const KeySub = styled.span`
  font-size: 0.9rem;
  opacity: 0.8;
  line-height: 1;
  
  ${media.mobile(`
    font-size: 0.8rem;
  `)}
`;
