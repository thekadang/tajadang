/**
 * MainPage 컴포넌트의 Styled Components
 */

import styled from 'styled-components';
import { Card, FlexContainer, Button, media } from '../common/StyledComponents';

// 메인 컨테이너
export const MainContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem 1rem;
  font-family: 'Jalnan2', sans-serif;
`;

// 메인 카드
export const MainCard = styled(Card)`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  
  ${media.mobile(`
    padding: 1.5rem;
    margin: 1rem;
  `)}
`;

// 메인 제목
export const MainTitle = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  
  ${media.mobile(`
    font-size: 2.5rem;
  `)}
`;

// 메인 부제목
export const MainSubtitle = styled.p`
  font-size: 1.3rem;
  color: #666;
  margin-bottom: 3rem;
  line-height: 1.5;
  
  ${media.mobile(`
    font-size: 1.1rem;
    margin-bottom: 2rem;
  `)}
`;

// 단계 리스트 컨테이너
export const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
`;

// 단계 카드
export const StepCard = styled(Card)<{ $color: string }>`
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 3px solid transparent;
  background: linear-gradient(135deg, ${props => props.$color}22, ${props => props.$color}11);
  
  &:hover {
    transform: translateY(-5px);
    border-color: ${props => props.$color};
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(-2px);
  }
  
  ${media.mobile(`
    padding: 1.5rem;
  `)}
`;

// 단계 헤더
export const StepHeader = styled(FlexContainer)`
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  
  ${media.mobile(`
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  `)}
`;

// 단계 번호
export const StepNumber = styled.div<{ $color: string }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${props => props.$color};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  
  ${media.mobile(`
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
  `)}
`;

// 단계 제목
export const StepTitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin: 0;
  font-weight: bold;
  flex: 1;
  text-align: left;
  
  ${media.mobile(`
    font-size: 1.5rem;
    text-align: center;
  `)}
`;

// 단계 부제목
export const StepSubtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin: 0;
  line-height: 1.4;
  
  ${media.mobile(`
    font-size: 1rem;
  `)}
`;

// 시작 버튼
export const StartButton = styled(Button)`
  margin-top: 1rem;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  
  ${media.mobile(`
    padding: 0.7rem 1.5rem;
    font-size: 0.9rem;
  `)}
`;
