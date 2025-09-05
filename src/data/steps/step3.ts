/**
 * 3단계 - 자음+모음 조합
 * 가, 나, 다, 바, 사, 자, 아 조합 연습
 */

import { StepData } from '../../types';

export const step3Data: StepData = {
  id: 3,
  title: '3단계',
  subtitle: '척척박사 생활단어',
  description: '자주 사용하는 생활단어 연습하기',
  levels: {
    1: {
      words: ['가', '나'],
      description: '기본 조합 1 (가, 나)'
    },
    2: {
      words: ['다', '바'],
      description: '기본 조합 2 (다, 바)'
    },
    3: {
      words: ['사', '자'],
      description: '기본 조합 3 (사, 자)'
    },
    4: {
      words: ['아'],
      description: '모음으로 시작하는 글자 (아)'
    },
    5: {
      words: ['가', '나', '다', '바', '사', '자', '아'],
      description: '모든 자음+모음 조합'
    }
  },
  mapping: {
    '가': [
      { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ' },
      { key: '|', number: 1, keyDisplay: '|', result: '기' },
      { key: '.', number: 2, keyDisplay: '.', result: '가' }
    ],
    '나': [
      { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: 'ㄴ' },
      { key: '|', number: 1, keyDisplay: '|', result: '니' },
      { key: '.', number: 2, keyDisplay: '.', result: '나' }
    ],
    '다': [
      { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: 'ㄷ' },
      { key: '|', number: 1, keyDisplay: '|', result: '디' },
      { key: '.', number: 2, keyDisplay: '.', result: '다' }
    ],
    '바': [
      { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅂ' },
      { key: '|', number: 1, keyDisplay: '|', result: '비' },
      { key: '.', number: 2, keyDisplay: '.', result: '바' }
    ],
    '사': [
      { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
      { key: '|', number: 1, keyDisplay: '|', result: '시' },
      { key: '.', number: 2, keyDisplay: '.', result: '사' }
    ],
    '자': [
      { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅈ' },
      { key: '|', number: 1, keyDisplay: '|', result: '지' },
      { key: '.', number: 2, keyDisplay: '.', result: '자' }
    ],
    '아': [
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
      { key: '|', number: 1, keyDisplay: '|', result: '이' },
      { key: '.', number: 2, keyDisplay: '.', result: '아' }
    ]
  }
};
