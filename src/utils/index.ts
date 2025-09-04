/**
 * 천지인 키보드 타자연습 앱의 유틸리티 함수들
 */

import { EMOJI_SETS, ERROR_MESSAGES } from '../constants';
import { NotificationType } from '../types';

/**
 * 랜덤 이모지를 반환하는 함수
 * @param type 알림 타입 ('success' | 'error' | 'timeout')
 * @returns 랜덤 이모지 문자열
 */
export const getRandomEmoji = (type: NotificationType): string => {
  const emojis = EMOJI_SETS[type.toUpperCase() as keyof typeof EMOJI_SETS];
  return emojis[Math.floor(Math.random() * emojis.length)];
};

/**
 * 랜덤 오타 메시지를 반환하는 함수
 * @returns 랜덤 오타 메시지
 */
export const getRandomErrorMessage = (): string => {
  return ERROR_MESSAGES[Math.floor(Math.random() * ERROR_MESSAGES.length)];
};

/**
 * 지연 실행 함수
 * @param ms 지연 시간 (밀리초)
 * @returns Promise
 */
export const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * 키 표시 이름 매핑
 */
export const KEY_DISPLAY_MAP: { [key: string]: string } = {
  '0': 'ㆍ',
  '1': 'ㅡ', 
  '2': 'ㅣ',
  '3': 'ㄱ',
  '4': 'ㄴ',
  '5': 'ㅁ',
  '6': 'ㅂ',
  '7': 'ㅅ',
  '8': 'ㅇ',
  '9': 'ㅈ',
  '*': 'ㅋ',
  '#': 'ㅎ'
};

/**
 * 키의 표시 이름을 반환하는 함수
 * @param key 키 값
 * @returns 표시 이름
 */
export const getKeyDisplayName = (key: string): string => {
  return KEY_DISPLAY_MAP[key] || key;
};

/**
 * 단계별 색상을 반환하는 함수
 * @param stepId 단계 ID
 * @returns 색상 코드
 */
export const getStepColor = (stepId: number): string => {
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'];
  return colors[stepId - 1] || colors[0];
};
