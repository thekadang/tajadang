/**
 * StepPage 컴포넌트의 Styled Components
 */

import styled, { keyframes } from 'styled-components';
import { Container, Card, Button, FlexContainer, media } from '../common/StyledComponents';

// 레벨업 애니메이션
const levelUpScale = keyframes`
  0% { opacity: 0; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.1); }
  100% { opacity: 1; transform: scale(1); }
`;

// 단계 완료 애니메이션
const stageCompleteGlow = keyframes`
  0%, 100% { box-shadow: 0 10px 30px rgba(255, 107, 107, 0.3); }
  50% { box-shadow: 0 15px 40px rgba(255, 107, 107, 0.6); }
`;

// 단계 페이지 컨테이너
export const StepPageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  font-family: 'Jalnan2', sans-serif;
`;

// 앱 컨테이너
export const AppContainer = styled(Container)`
  padding: 1rem;
  max-width: 1000px;
`;

// 연습 헤더
export const PracticeHeader = styled.header<{ $backgroundColor?: string }>`
  text-align: center;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 15px;
  background: ${props => props.$backgroundColor || '#667eea'};
  color: white;
  position: relative;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  
  ${media.mobile(`
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  `)}
`;

// 단계 정보
export const StepInfo = styled.div`
  margin-bottom: 1.5rem;
`;

// 단계 페이지 제목
export const StepPageTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  
  ${media.mobile(`
    font-size: 2rem;
  `)}
`;

// 단계 페이지 부제목
export const StepPageSubtitle = styled.h3`
  font-size: 1.3rem;
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  margin: 0;
  
  ${media.mobile(`
    font-size: 1.1rem;
  `)}
`;

// 레벨 정보 컨테이너
export const LevelInfo = styled(FlexContainer)`
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
  
  ${media.mobile(`
    gap: 0.5rem;
  `)}
`;

// 레벨 정보 텍스트
export const LevelText = styled.span`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  
  ${media.mobile(`
    font-size: 0.8rem;
    padding: 0.2rem 0.6rem;
  `)}
`;

// 메인 콘텐츠
export const MainContent = styled.main`
  margin-bottom: 2rem;
`;

// 단어 섹션
export const WordSection = styled.section`
  margin-bottom: 2rem;
`;

// 레벨업 알림 오버레이
export const LevelUpOverlay = styled.div<{ $show?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  opacity: ${props => props.$show ? 1 : 0};
  visibility: ${props => props.$show ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
`;

// 레벨업 알림 내용
export const LevelUpContent = styled(Card)`
  background: linear-gradient(135deg, #4CAF50, #45a049);
  color: white;
  padding: 3rem 2rem;
  text-align: center;
  animation: ${levelUpScale} 0.5s ease-out;
  max-width: 400px;
  margin: 1rem;
  
  ${media.mobile(`
    padding: 2rem 1.5rem;
  `)}
`;

// 레벨업 제목
export const LevelUpTitle = styled.h3`
  font-size: 2.5rem;
  margin: 0 0 1rem 0;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  
  ${media.mobile(`
    font-size: 2rem;
  `)}
`;

// 레벨업 메시지
export const LevelUpMessage = styled.p`
  font-size: 1.3rem;
  margin: 0;
  opacity: 0.9;
  white-space: pre-line;
  
  ${media.mobile(`
    font-size: 1.1rem;
  `)}
`;

// 단계 완료 알림 오버레이
export const StageCompleteOverlay = styled(LevelUpOverlay)``;

// 단계 완료 알림 내용
export const StageCompleteContent = styled(Card)`
  background: linear-gradient(135deg, #FF6B6B, #FF5252);
  color: white;
  padding: 3rem 2rem;
  text-align: center;
  animation: ${levelUpScale} 0.5s ease-out, ${stageCompleteGlow} 2s ease-in-out infinite;
  max-width: 400px;
  margin: 1rem;
  
  ${media.mobile(`
    padding: 2rem 1.5rem;
  `)}
`;

// 단계 완료 제목
export const StageCompleteTitle = styled.h3`
  font-size: 2.5rem;
  margin: 0 0 1rem 0;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  
  ${media.mobile(`
    font-size: 2rem;
  `)}
`;

// 단계 완료 메시지
export const StageCompleteMessage = styled.p`
  font-size: 1.3rem;
  margin: 0 0 2rem 0;
  opacity: 0.9;
  white-space: pre-line;
  
  ${media.mobile(`
    font-size: 1.1rem;
  `)}
`;

// 도전 버튼 그룹
export const ChallengeButtons = styled(FlexContainer)`
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  
  ${media.mobile(`
    gap: 0.8rem;
  `)}
`;

// 도전 버튼
export const ChallengeButton = styled(Button)`
  min-width: 120px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  
  ${media.mobile(`
    min-width: 100px;
    padding: 0.8rem 1.5rem;
    font-size: 1.1rem;
  `)}
`;
