/**
 * 4단계 - 단어 연습
 * 사람, 아들, 며느리 등 단어 연습
 */

import { StepData } from '../../types';

export const step4Data: StepData = {
  id: 4,
  title: '4단계',
  subtitle: '짧은 문장',
  description: '간단한 문장들 연습하기',
  levels: {
    1: {
      words: ['사람', '아들', '며느리'],
      description: '기본 단어 1 (사람)'
    },
    2: {
      words: ['사람', '아들', '며느리'],
      description: '기본 단어 2 (아들)'
    },
    3: {
      words: ['사람', '아들', '며느리'],
      description: '복합 단어 (며느리)'
    },
    4: {
      words: ['사람', '아들', '며느리'],
      description: '기본 단어 복합'
    },
    5: {
      words: ['사람', '아들', '며느리'],
      description: '모든 단어 연습'
    }
  },
  mapping: {
    '사람': [
      { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
      { key: '|', number: 1, keyDisplay: '|', result: '시' },
      { key: '.', number: 2, keyDisplay: '.', result: '사' },
      { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '산' },
      { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '살' },
      { key: '|', number: 1, keyDisplay: '|', result: '사리' },
      { key: '.', number: 2, keyDisplay: '.', result: '사라' },
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '사랑' },
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '사람' }
    ],
    '아들': [
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
      { key: '|', number: 1, keyDisplay: '|', result: '이' },
      { key: '.', number: 2, keyDisplay: '.', result: '아' },
      { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: '앋' },
      { key: '-', number: 3, keyDisplay: '-', result: '아드' },
      { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '아든' },
      { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '아들' }
    ],
    '며느리': [
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅁ' },
      { key: '.', number: 2, keyDisplay: '.', result: 'ㅁ.' },
      { key: '.', number: 2, keyDisplay: '.', result: 'ㅁ..' },
      { key: '|', number: 1, keyDisplay: '|', result: '며' },
      { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '면' },
      { key: '-', number: 3, keyDisplay: '-', result: '며느' },
      { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '며는' },
      { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '며늘' },
      { key: '|', number: 1, keyDisplay: '|', result: '며느리' }
    ]
  }
};
