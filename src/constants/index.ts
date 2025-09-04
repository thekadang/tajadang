/**
 * 천지인 키보드 타자연습 앱의 공통 상수
 */

import { LevelSettings } from '../types';

// 레벨별 키 타임 설정 (밀리초)
export const KEY_TIME_SETTINGS: LevelSettings = {
  1: 30000, // 30초
  2: 15000, // 15초
  3: 10000, // 10초
  4: 5000,  // 5초
  5: 1000   // 1초
};

// 레벨업에 필요한 연속 성공 횟수
export const LEVEL_UP_REQUIRED_SUCCESS = 10;

// 알림 표시 시간 (밀리초)
export const NOTIFICATION_DURATION = {
  SUCCESS: 2000,
  ERROR: 1000,
  TIMEOUT: 2000
};

// 시간 초과 메시지
export const TIMEOUT_MESSAGE = '시간이 다 되었어요. 다시 해보세요!';

// 단계별 색상
export const STEP_COLORS = {
  1: '#FF6B6B', // 빨간색
  2: '#4ECDC4', // 청록색
  3: '#45B7D1', // 파란색
  4: '#96CEB4', // 녹색
  5: '#FFEAA7'  // 노란색
};

// 이모지 세트
export const EMOJI_SETS = {
  SUCCESS: ['🎉', '✨', '🌟', '💫', '🎊', '🏆', '👏', '🎯'],
  ERROR: ['❌', '⚠️', '🚫', '💥', '🔥', '⚡'],
  TIMEOUT: ['⏰', '⏱️', '⌛', '🕐', '🔔', '⚡']
};

// 오타 메시지 세트
export const ERROR_MESSAGES = [
  '다른 키예요!',
  '틀렸어요!',
  '오타 발생!',
  '실수했어요!',
  '다시 해보세요!',
  '주의하세요!'
];
