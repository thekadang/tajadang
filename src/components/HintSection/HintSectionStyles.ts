/**
 * HintSection 컴포넌트의 Styled Components
 */

import styled, { keyframes } from 'styled-components';
import { Card, media } from '../common/StyledComponents';

// 힌트 펄스 애니메이션
const hintPulse = keyframes`
  0%, 100% { 
    transform: scale(1);
    box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
  }
  50% { 
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.6);
  }
`;

// 힌트 섹션
export const HintSection = styled.section`
  margin: 1.5rem 0;
`;

// 힌트 컨테이너
export const HintContainer = styled(Card)`
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
  border: 2px solid #667eea;
  
  ${media.mobile(`
    padding: 1.5rem;
  `)}
`;

// 힌트 아이콘 컨테이너
export const HintIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
  
  ${media.mobile(`
    flex-direction: column;
    gap: 1rem;
  `)}
`;

// 힌트 키 아이콘
export const HintKeyIcon = styled.div<{ $pressCount?: number }>`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  width: 80px;
  height: 80px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
  border: 3px solid #fff;
  position: relative;
  animation: ${hintPulse} 2s infinite;
  
  ${media.mobile(`
    width: 70px;
    height: 70px;
  `)}

  // 연속 누르기 표시
  ${props => props.$pressCount === 2 && `
    &::after {
      content: '2번';
      position: absolute;
      top: -10px;
      right: -10px;
      background: #ff6b6b;
      color: white;
      font-size: 12px;
      padding: 4px 8px;
      border-radius: 12px;
      font-weight: bold;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    }
  `}

  ${props => props.$pressCount === 1 && `
    &::after {
      content: '1번';
      position: absolute;
      top: -10px;
      right: -10px;
      background: #4ecdc4;
      color: white;
      font-size: 12px;
      padding: 4px 8px;
      border-radius: 12px;
      font-weight: bold;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    }
  `}
`;

// 힌트 심볼
export const HintSymbol = styled.div`
  font-size: 24px;
  font-weight: bold;
  line-height: 1;
  font-family: 'Jalnan2', sans-serif;
  
  ${media.mobile(`
    font-size: 20px;
  `)}
`;

// 힌트 번호
export const HintNumber = styled.div`
  font-size: 18px;
  opacity: 0.8;
  line-height: 1;
  font-weight: 500;
  
  ${media.mobile(`
    font-size: 16px;
  `)}
`;

// 힌트 텍스트
export const HintText = styled.div`
  font-size: 1.4rem;
  color: #333;
  font-weight: 600;
  font-family: 'Jalnan2', sans-serif;
  
  ${media.mobile(`
    font-size: 1.2rem;
  `)}
`;

// 힌트 설명
export const HintDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 1rem 0 0 0;
  line-height: 1.4;
  
  ${media.mobile(`
    font-size: 0.9rem;
  `)}
`;
