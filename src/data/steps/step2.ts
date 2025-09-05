/**
 * 2단계 - 기본 모음
 * |, ., - 기본 모음 연습
 */

import { StepData } from '../../types';

export const step2Data: StepData = {
  id: 2,
  title: '2단계',
  subtitle: '이제 나도 낱말타자',
  description: '간단하고 쉬운 낱말 연습하기',
  levels: {
    1: {
      words: ['|'],
      description: '세로 모음 (|)'
    },
    2: {
      words: ['.'],
      description: '점 모음 (.)'
    },
    3: {
      words: ['-'],
      description: '가로 모음 (-)'
    },
    4: {
      words: ['|', '.'],
      description: '세로와 점 모음'
    },
    5: {
      words: ['|', '.', '-'],
      description: '모든 기본 모음'
    }
  },
  mapping: {
    '|': [
      { key: '|', number: 1, keyDisplay: '|', result: '|' }
    ],
    '.': [
      { key: '.', number: 2, keyDisplay: '.', result: '.' }
    ],
    '-': [
      { key: '-', number: 3, keyDisplay: '-', result: '-' }
    ]
  }
};
