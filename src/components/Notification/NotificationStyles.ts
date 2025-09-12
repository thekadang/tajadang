/**
 * Notification 컴포넌트의 Styled Components
 */

import styled from 'styled-components';
import { NotificationBase, shake, bounce } from '../common/StyledComponents';

// 성공 알림 스타일
export const SuccessNotification = styled(NotificationBase)`
  background: rgba(76, 175, 80, 0.95);
  border: 3px solid #4CAF50;
  color: white;
  
  &.animate {
    animation: ${bounce} 0.6s ease-out;
  }
`;

// 오류 알림 스타일
export const ErrorNotification = styled(NotificationBase)`
  background: rgba(244, 67, 54, 0.95);
  border: 3px solid #f44336;
  color: white;
  
  &.animate {
    animation: ${shake} 0.5s ease-in-out;
  }
`;

// 시간 초과 알림 스타일
export const TimeoutNotification = styled(NotificationBase)`
  background: rgba(255, 152, 0, 0.95) !important;
  border: 3px solid #FF9800;
  color: white;
  
  &.animate {
    animation: ${shake} 0.5s ease-in-out;
  }
`;

// 알림 이모지
export const NotificationEmoji = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  line-height: 1;
`;

// 알림 메시지
export const NotificationMessage = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  line-height: 1.3;
  white-space: pre-line;
`;

// 힌트 컨테이너
export const HintContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
`;

// 알림 힌트
export const NotificationHint = styled.div`
  font-size: 20px;
  margin-top: 8px;
  opacity: 0.9;
  font-weight: bold;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

// 힌트 아이콘
export const HintIcon = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  width: 70px;
  height: 70px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
  border: 3px solid #fff;
`;

// 힌트 키 아이콘 (별칭)
export const HintKeyIcon = HintIcon;

// 힌트 심볼
export const HintSymbol = styled.div`
  font-size: 22px;
  font-weight: bold;
  line-height: 1;
`;

// 힌트 번호
export const HintNumber = styled.div`
  font-size: 16px;
  opacity: 0.8;
  line-height: 1;
`;

// 시간 초과 힌트
export const TimeoutHint = styled.div`
  margin-top: 1rem;
  font-size: 1rem;
  color: white;
  opacity: 0.9;
  font-weight: 300;
`;
