/**
 * InputField 컴포넌트의 Styled Components
 */

import styled, { keyframes, css } from 'styled-components';
import { Card, media } from '../common/StyledComponents';

// 커서 깜빡임 애니메이션
const cursorBlink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;

// 완료 애니메이션
const completeGlow = keyframes`
  0% { box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3); }
  50% { box-shadow: 0 6px 25px rgba(76, 175, 80, 0.6); }
  100% { box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3); }
`;

// 입력 섹션
export const InputSection = styled.section`
  margin: 1.5rem 0;
`;

// 입력 컨테이너
export const InputContainer = styled(Card)<{ $isCompleted?: boolean }>`
  text-align: center;
  padding: 2rem;
  background: ${props => props.$isCompleted 
    ? 'linear-gradient(135deg, #4CAF50, #45a049)' 
    : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
  };
  border: 3px solid ${props => props.$isCompleted ? '#4CAF50' : '#667eea'};
  transition: all 0.3s ease;
  
  ${props => props.$isCompleted && css`
    animation: ${completeGlow} 2s ease-in-out infinite;
    color: white;
  `}
  
  ${media.mobile(`
    padding: 1.5rem;
  `)}
`;

// 입력 필드 래퍼
export const InputFieldWrapper = styled.div`
  position: relative;
  display: inline-block;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 입력 필드 (별칭)
export const InputField = InputFieldWrapper;

// 입력 텍스트
export const InputText = styled.span<{ $isCompleted?: boolean }>`
  font-size: 3rem;
  font-weight: bold;
  color: ${props => props.$isCompleted ? 'white' : '#667eea'};
  font-family: 'Jalnan2', sans-serif;
  letter-spacing: 2px;
  transition: color 0.3s ease;
  
  ${media.mobile(`
    font-size: 2.5rem;
    letter-spacing: 1px;
  `)}
`;

// 커서
export const Cursor = styled.span<{ $isCompleted?: boolean }>`
  display: ${props => props.$isCompleted ? 'none' : 'inline-block'};
  width: 3px;
  height: 3rem;
  background: #667eea;
  margin-left: 2px;
  animation: ${cursorBlink} 1s infinite;
  
  ${media.mobile(`
    height: 2.5rem;
  `)}
`;

// 입력 라벨
export const InputLabel = styled.p<{ $isCompleted?: boolean }>`
  font-size: 1.1rem;
  color: ${props => props.$isCompleted ? 'rgba(255,255,255,0.9)' : '#666'};
  margin: 0 0 1rem 0;
  font-weight: 500;
  transition: color 0.3s ease;
  
  ${media.mobile(`
    font-size: 1rem;
  `)}
`;
