import { useMemo } from 'react';

// 단계별 데이터 구조
export interface StepData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  words: string[];
  mapping: Record<string, Array<{
    key: string;
    number: number;
    keyDisplay: string;
    result: string;
  }>>;
}

// 단계별 데이터 정의
const stepData: Record<number, StepData> = {
  1: {
    id: 1,
    title: '1단계',
    subtitle: '기본 자음',
    description: 'ㄱ, ㄴ, ㄷ, ㅂ, ㅅ, ㅈ, ㅇ 기본 자음 연습',
    words: ['ㄱ', 'ㄴ', 'ㄷ', 'ㅂ', 'ㅅ', 'ㅈ', 'ㅇ'],
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
  },
  2: {
    id: 2,
    title: '2단계',
    subtitle: '기본 모음',
    description: '|, ., - 기본 모음 연습',
    words: ['|', '.', '-'],
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
  },
  3: {
    id: 3,
    title: '3단계',
    subtitle: '자음+모음 조합',
    description: '가, 나, 다, 바, 사, 자, 아 조합 연습',
    words: ['가', '나', '다', '바', '사', '자', '아'],
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
  },
  4: {
    id: 4,
    title: '4단계',
    subtitle: '단어 연습',
    description: '사람, 아들, 며느리 등 단어 연습',
    words: ['사람', '아들', '며느리'],
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
  },
  5: {
    id: 5,
    title: '5단계',
    subtitle: '문장 연습',
    description: '완성된 문장으로 타자 연습',
    words: ['안녕하세요', '감사합니다', '좋은 하루'],
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
  }
};

export const useStepData = (stepId: number) => {
  return useMemo(() => {
    return stepData[stepId] || stepData[1];
  }, [stepId]);
};

export const getAllSteps = () => {
  return Object.values(stepData);
};
