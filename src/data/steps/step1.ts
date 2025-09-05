/**
 * 1단계 - 기본 자음
 * ㄱ, ㄴ, ㄷ, ㅂ, ㅅ, ㅈ, ㅇ 기본 자음 연습
 */

import { StepData } from '../../types';

export const step1Data: StepData = {
  id: 1,
  title: '1단계',
  subtitle: '왕초보 첫걸음',
  description: '천천히 한 글자씩 연습하기',
  levels: {
    1: {
      words: ['ㄱ', 'ㄴ', 'ㄷ'],
      description: '기본 자음 1 (ㄱ, ㄴ, ㄷ)'
    },
    2: {
      words: ['ㅂ', 'ㅅ', 'ㅈ'],
      description: '기본 자음 2 (ㅂ, ㅅ, ㅈ)'
    },
    3: {
      words: ['ㅇ'],
      description: '기본 자음 3 (ㅇ)'
    },
    4: {
      words: ['ㄱ', 'ㄴ', 'ㄷ', 'ㅂ'],
      description: '기본 자음 복합 1'
    },
    5: {
      words: ['ㅅ', 'ㅈ', 'ㅇ', 'ㄱ', 'ㄴ', 'ㄷ', 'ㅂ'],
      description: '기본 자음 전체 연습'
    }
  },
  mapping: {
    'ㄱ': [
      { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ' }
    ],
    'ㄴ': [
      { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: 'ㄴ' }
    ],
    'ㄷ': [
      { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: 'ㄷ' }
    ],
    'ㅂ': [
      { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅂ' }
    ],
    'ㅅ': [
      { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' }
    ],
    'ㅈ': [
      { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅈ' }
    ],
    'ㅇ': [
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' }
    ]
  }
};
