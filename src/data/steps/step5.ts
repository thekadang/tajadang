/**
 * 5단계 - 문장 연습
 * 완성된 문장으로 타자 연습
 */

import { StepData } from '../../types';

export const step5Data: StepData = {
  id: 5,
  title: '5단계',
  subtitle: '문자보내기 대성공',
  description: '실제 문자 보내듯 연습하기',
  levels: {
    1: {
      words: ['안녕하세요'],
      description: '인사말 (안녕하세요)'
    },
    2: {
      words: ['감사합니다'],
      description: '감사 인사 (감사합니다)'
    },
    3: {
      words: ['좋은 하루'],
      description: '축복 인사 (좋은 하루)'
    },
    4: {
      words: ['안녕하세요', '감사합니다'],
      description: '기본 인사말'
    },
    5: {
      words: ['안녕하세요', '감사합니다', '좋은 하루'],
      description: '모든 문장 연습'
    }
  },
  mapping: {
    '안녕하세요': [
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
      { key: '|', number: 1, keyDisplay: '|', result: '이' },
      { key: '.', number: 2, keyDisplay: '.', result: '아' },
      { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '안' },
      { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '안ㄴ' },
      { key: '|', number: 1, keyDisplay: '|', result: '안니' },
      { key: '.', number: 2, keyDisplay: '.', result: '안나' },
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '안녕' },
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '안녕ㅇ' },
      { key: '|', number: 1, keyDisplay: '|', result: '안녕이' },
      { key: '.', number: 2, keyDisplay: '.', result: '안녕아' },
      { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: '안녕하' },
      { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: '안녕하ㅅ' },
      { key: '|', number: 1, keyDisplay: '|', result: '안녕하시' },
      { key: '.', number: 2, keyDisplay: '.', result: '안녕하사' },
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '안녕하세요' }
    ],
    '감사합니다': [
      { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ' },
      { key: '|', number: 1, keyDisplay: '|', result: '기' },
      { key: '.', number: 2, keyDisplay: '.', result: '가' },
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '감' },
      { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: '감ㅅ' },
      { key: '|', number: 1, keyDisplay: '|', result: '감시' },
      { key: '.', number: 2, keyDisplay: '.', result: '감사' },
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '감사ㅇ' },
      { key: '|', number: 1, keyDisplay: '|', result: '감사이' },
      { key: '.', number: 2, keyDisplay: '.', result: '감사아' },
      { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '감사하' },
      { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '감사하ㄴ' },
      { key: '|', number: 1, keyDisplay: '|', result: '감사하니' },
      { key: '.', number: 2, keyDisplay: '.', result: '감사하나' },
      { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: '감사합니다' }
    ],
    '좋은 하루': [
      { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅈ' },
      { key: '|', number: 1, keyDisplay: '|', result: '지' },
      { key: '.', number: 2, keyDisplay: '.', result: '자' },
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '좋' },
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '좋ㅇ' },
      { key: '|', number: 1, keyDisplay: '|', result: '좋이' },
      { key: '.', number: 2, keyDisplay: '.', result: '좋아' },
      { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '좋은' },
      { key: ' ', number: null, keyDisplay: '[____]', result: '좋은 ' },
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '좋은 ㅇ' },
      { key: '|', number: 1, keyDisplay: '|', result: '좋은 이' },
      { key: '.', number: 2, keyDisplay: '.', result: '좋은 아' },
      { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '좋은 하' },
      { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '좋은 하ㄴ' },
      { key: '|', number: 1, keyDisplay: '|', result: '좋은 하니' },
      { key: '.', number: 2, keyDisplay: '.', result: '좋은 하나' },
      { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: '좋은 하루' }
    ]
  }
};
