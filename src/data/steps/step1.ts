/**
 * 1단계 - 기본 자음
 * ㄱ, ㄴ, ㄷ, ㅂ, ㅅ, ㅈ, ㅇ 기본 자음 연습
 */

import { StepData } from '../../types';

export const step1Data: StepData = {
  id: 1,
  title: '1단계',
  subtitle: '한글자 연습하기',
  description: '천지인 자판의 기본 원리를 익힙니다.',
  levels: {
    1: {
      words: ['가', '너', '도', '로', '마', '버', '소', '오', '주', '그', '니', '디', '리', '미', '비', '시', '이', '고', '노', '모'],
      description: '기본 모음 + 기본 자음'
    },
    2: {
      words: ['캬', '뎌', '료', '뮤', '샤', '겨', '뇨', '뎌', '려', '며', '벼', '셔', '죠', '챠', '퍄', '혀', '교', '뇨', '됴', '료'],
      description: '이중 모음 + 모든 기본 자음'
    },
    3: {
      words: ['까', '떠', '뽀', '쑤', '쯔', '깨', '또', '삐', '씨', '쪼', '꾸', '뜨', '빠', '쏘', '찌', '꺼', '뗘', '뾰', '쓔', '쪄'],
      description: '된소리(쌍자음) 연습'
    },
    4: {
      words: ['개', '네', '되', '뢰', '괘', '뇌', '돼', '뤠', '뭐', '뵈', '쇠', '외', '쥐', '최', '훼', '귀', '궤', '쉐', '의', '줴'],
      description: '복합 모음 연습'
    },
    5: {
      words: ['강', '넌', '돌', '람', '막', '법', '속', '원', '줄', '글', '김', '답', '릇', '맘', '밥', '상', '입', '종', '창', '팥'],
      description: '받침 글자 연습'
    }
  },
  mapping: {
    // Level 1 Mappings
    '가': [
      { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ' },
      { key: '|', number: 1, keyDisplay: '|', result: '기' },
      { key: '.', number: 2, keyDisplay: '.', result: '가' }
    ],
    '너': [
      { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: 'ㄴ' },
      { key: '.', number: 2, keyDisplay: '.', result: 'ㄴ.' },
      { key: '|', number: 1, keyDisplay: '|', result: '너' }
    ],
    '도': [
      { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: 'ㄷ' },
      { key: '.', number: 2, keyDisplay: '.', result: 'ㄷ.' },
      { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '도' }
    ],
    '로': [
      { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: 'ㄴ' },
      { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: 'ㄹ' },
      { key: '.', number: 2, keyDisplay: '.', result: 'ㄹ.' },
      { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '로' }
    ],
    '마': [
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅁ' },
      { key: '|', number: 1, keyDisplay: '|', result: '미' },
      { key: '.', number: 2, keyDisplay: '.', result: '마' }
    ],
    '버': [
      { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅂ' },
      { key: '.', number: 2, keyDisplay: '.', result: 'ㅂ.' },
      { key: '|', number: 1, keyDisplay: '|', result: '버' }
    ],
    '소': [
      { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
      { key: '.', number: 2, keyDisplay: '.', result: 'ㅅ.' },
      { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '소' }
    ],
    '오': [
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
      { key: '.', number: 2, keyDisplay: '.', result: 'ㅇ.' },
      { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '오' }
    ],
    '주': [
      { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅈ' },
      { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '즈' },
      { key: '.', number: 2, keyDisplay: '.', result: '주' }
    ],
    '그': [
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ'},
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '그'}
    ],
    '니': [
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: 'ㄴ'},
        { key: '|', number: 1, keyDisplay: '|', result: '니'}
    ],
    '디': [
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: 'ㄷ'},
        { key: '|', number: 1, keyDisplay: '|', result: '디'}
    ],
    '리': [
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: 'ㄴ'},
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: 'ㄹ'},
        { key: '|', number: 1, keyDisplay: '|', result: '리'}
    ],
    '미': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ'},
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅁ'},
        { key: '|', number: 1, keyDisplay: '|', result: '미'}
    ],
    '비': [
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅂ'},
        { key: '|', number: 1, keyDisplay: '|', result: '비'}
    ],
    '시': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ'},
        { key: '|', number: 1, keyDisplay: '|', result: '시'}
    ],
    '이': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ'},
        { key: '|', number: 1, keyDisplay: '|', result: '이'}
    ],
    '고': [
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ'},
        { key: '.', number: 2, keyDisplay: '.', result: 'ㄱ.'},
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '고'}
    ],
    '노': [
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: 'ㄴ'},
        { key: '.', number: 2, keyDisplay: '.', result: 'ㄴ.'},
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '노'}
    ],
    '모': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ'},
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅁ'},
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅁ.'},
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '모'}
    ],
        
    // Level 2 Mappings
    '캬': [
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㅋ' },
        { key: '|', number: 1, keyDisplay: '|', result: '키' },
        { key: '.', number: 2, keyDisplay: '.', result: '카' },
        { key: '.', number: 2, keyDisplay: '.', result: '캬' }
    ],
    '뎌': [
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: 'ㄷ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㄷ.' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㄷ..' },
        { key: '|', number: 1, keyDisplay: '|', result: '뎌' }
    ],
    '료': [
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: 'ㄴ' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: 'ㄹ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㄹ.' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㄹ..' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '료' }
    ],
    '뮤': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅁ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '므' },
        { key: '.', number: 2, keyDisplay: '.', result: '무' },
        { key: '.', number: 2, keyDisplay: '.', result: '뮤' }
    ],
    '샤': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
        { key: '|', number: 1, keyDisplay: '|', result: '시' },
        { key: '.', number: 2, keyDisplay: '.', result: '사' },
        { key: '.', number: 2, keyDisplay: '.', result: '샤' }
    ],
    '겨': [
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㄱ.' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㄱ..' },
        { key: '|', number: 1, keyDisplay: '|', result: '겨' }
    ],
    '뇨': [
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: 'ㄴ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㄴ.' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㄴ..' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '뇨' }
    ],
    '려': [
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: 'ㄴ'},
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: 'ㄹ'},
        { key: '.', number: 2, keyDisplay: '.', result: 'ㄹ.'},
        { key: '.', number: 2, keyDisplay: '.', result: 'ㄹ..'},
        { key: '|', number: 1, keyDisplay: '|', result: '려' }
    ],
    '며': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ'},
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅁ'},
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅁ.'},
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅁ..'},
        { key: '|', number: 1, keyDisplay: '|', result: '며' }
    ],
    '벼': [
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅂ'},
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅂ.'},
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅂ..'},
        { key: '|', number: 1, keyDisplay: '|', result: '며' }
    ],
    '셔': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ'},
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅅ.'},
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅅ..'},
        { key: '|', number: 1, keyDisplay: '|', result: '셔' }
    ],
    '죠': [
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅈ'},
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅈ.'},
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅈ..'},
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '죠'}
    ],
    '챠': [
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅈ'},
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅊ'},
        { key: '|', number: 1, keyDisplay: '|', result: '치'},
        { key: '.', number: 2, keyDisplay: '.', result: '차'},
        { key: '.', number: 2, keyDisplay: '.', result: '챠'}
    ],
    '퍄': [
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅂ'},
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅍ'},
        { key: '|', number: 1, keyDisplay: '|', result: '피'},
        { key: '.', number: 2, keyDisplay: '.', result: '파'},
        { key: '.', number: 2, keyDisplay: '.', result: '퍄'}
    ],
    '혀': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ'},
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅎ'},
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅎ.'},
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅎ..'},
        { key: '|', number: 1, keyDisplay: '|', result: '혀'}
    ],
    '교': [
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ'},
        { key: '.', number: 2, keyDisplay: '.', result: 'ㄱ.'},
        { key: '.', number: 2, keyDisplay: '.', result: 'ㄱ..'},
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '교'}
    ],
    '됴': [
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: 'ㄷ'},
        { key: '.', number: 2, keyDisplay: '.', result: 'ㄷ.'},
        { key: '.', number: 2, keyDisplay: '.', result: 'ㄷ..'},
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '됴'}
    ],

  // Level 3 Mappings
    '까': [
      { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ' },
      { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㅋ' },
      { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄲ' },
      { key: '|', number: 1, keyDisplay: '|', result: '끼' },
      { key: '.', number: 2, keyDisplay: '.', result: '까' }
    ],
    '떠': [
      { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: 'ㄷ' },
      { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: 'ㅌ' },
      { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: 'ㄸ' },
      { key: '.', number: 2, keyDisplay: '.', result: 'ㄸ.' },
      { key: '|', number: 1, keyDisplay: '|', result: '떠' }
    ],
    '뽀': [
      { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅂ' },
      { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅍ' },
      { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅃ' },
      { key: '.', number: 2, keyDisplay: '.', result: 'ㅃ.' },
      { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '뽀' }
    ],
    '쑤': [
      { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
      { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅎ' },
      { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅆ' },
      { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '쓰' },
      { key: '.', number: 2, keyDisplay: '.', result: '쑤' }
    ],
    '쯔': [
      { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅈ' },
      { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅊ' },
      { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅉ' },
      { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '쯔' }
    ],
    '깨': [
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㅋ' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄲ' },
        { key: '|', number: 1, keyDisplay: '|', result: '끼' },
        { key: '.', number: 2, keyDisplay: '.', result: '까' },
        { key: '|', number: 1, keyDisplay: '|', result: '깨' }
    ],
    '또': [
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: 'ㄷ' },
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: 'ㅌ' },
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: 'ㄸ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㄸ.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '또' }
    ],
    '삐': [
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅂ' },
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅍ' },
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅃ' },
        { key: '|', number: 1, keyDisplay: '|', result: '삐' }
    ],
    '씨': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅎ' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅆ' },
        { key: '|', number: 1, keyDisplay: '|', result: '씨' }
    ],
    '쪼': [
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅈ' },
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅊ' },
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅉ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅉ.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '쪼' }
    ],
    '꾸': [
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㅋ' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄲ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '끄' },
        { key: '.', number: 2, keyDisplay: '.', result: '꾸' }
    ],
    '뜨': [
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: 'ㄷ' },
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: 'ㅌ' },
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: 'ㄸ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '뜨' }
    ],
    '빠': [
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅂ' },
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅍ' },
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅃ' },
        { key: '|', number: 1, keyDisplay: '|', result: '삐' },
        { key: '.', number: 2, keyDisplay: '.', result: '빠' }
    ],
    '쏘': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅎ' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅆ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅆ.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '쏘' }
    ],
    '찌': [
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅈ' },
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅊ' },
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅉ' },
        { key: '|', number: 1, keyDisplay: '|', result: '찌' }
    ],
    '꺼': [
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㅋ' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄲ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㄲ.' },
        { key: '|', number: 1, keyDisplay: '|', result: '꺼' }
    ],
    '뗘': [
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: 'ㄷ' },
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: 'ㅌ' },
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: 'ㄸ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㄸ.' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㄸ..' },
        { key: '|', number: 1, keyDisplay: '|', result: '뗘' }
    ],
    '뾰': [
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅂ' },
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅍ' },
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅃ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅃ.' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅃ..' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '뾰' }
    ],
    '쓔': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅎ' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅆ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '쓰' },
        { key: '.', number: 2, keyDisplay: '.', result: '쑤' },
        { key: '.', number: 2, keyDisplay: '.', result: '쓔' }
    ],
    '쪄': [
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅈ' },
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅊ' },
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅉ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅉ.' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅉ..' },
        { key: '|', number: 1, keyDisplay: '|', result: '쪄' }
    ],

    // Level 4 Mappings
    '개': [
      { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ' },
      { key: '|', number: 1, keyDisplay: '|', result: '기' },
      { key: '.', number: 2, keyDisplay: '.', result: '가' },
      { key: '|', number: 1, keyDisplay: '|', result: '개' }
    ],
    '네': [
      { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: 'ㄴ' },
      { key: '.', number: 2, keyDisplay: '.', result: 'ㄴ.' },
      { key: '|', number: 1, keyDisplay: '|', result: '너' },
      { key: '|', number: 1, keyDisplay: '|', result: '네' }
    ],
    '되': [
      { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: 'ㄷ' },
      { key: '.', number: 2, keyDisplay: '.', result: 'ㄷ.' },
      { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '도' },
      { key: '|', number: 1, keyDisplay: '|', result: '되' }
    ],
    '뢰': [
      { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: 'ㄴ' },
      { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: 'ㄹ' },
      { key: '.', number: 2, keyDisplay: '.', result: 'ㄹ.' },
      { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '로' },
      { key: '|', number: 1, keyDisplay: '|', result: '뢰' }
    ],
    '괘': [
      { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ' },
      { key: '.', number: 2, keyDisplay: '.', result: 'ㄱ.' },
      { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '고' },
      { key: '|', number: 1, keyDisplay: '|', result: '괴' },
      { key: '.', number: 2, keyDisplay: '.', result: '과' },
      { key: '|', number: 1, keyDisplay: '|', result: '괘' }
    ],
    '뇌': [
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: 'ㄴ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㄴ.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '노' },
        { key: '|', number: 1, keyDisplay: '|', result: '뇌' }
    ],
    '돼': [
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: 'ㄷ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㄷ.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '도' },
        { key: '|', number: 1, keyDisplay: '|', result: '되' },
        { key: '.', number: 2, keyDisplay: '.', result: '돠' },
        { key: '|', number: 1, keyDisplay: '|', result: '돼' }
    ],
    '뤠': [
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: 'ㄴ' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: 'ㄹ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '르' },
        { key: '.', number: 2, keyDisplay: '.', result: '루' },
        { key: '.', number: 2, keyDisplay: '.', result: '류' },
        { key: '|', number: 1, keyDisplay: '|', result: '뤄' },
        { key: '|', number: 1, keyDisplay: '|', result: '뤠' }
    ],
    '뭐': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅁ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '므' },
        { key: '.', number: 2, keyDisplay: '.', result: '무' },
        { key: '.', number: 2, keyDisplay: '.', result: '뮤' },
        { key: '|', number: 1, keyDisplay: '|', result: '뭐' }
    ],
    '뵈': [
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅂ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅂ.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '보' },
        { key: '|', number: 1, keyDisplay: '|', result: '뵈' }
    ],
    '쇠': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅅ.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '소' },
        { key: '|', number: 1, keyDisplay: '|', result: '쇠' }
    ],
    '외': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅇ.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '오' },
        { key: '|', number: 1, keyDisplay: '|', result: '외' }
    ],
    '쥐': [
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅈ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '즈' },
        { key: '.', number: 2, keyDisplay: '.', result: '주' },
        { key: '|', number: 1, keyDisplay: '|', result: '쥐' }
    ],
    '최': [
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅈ' },
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅊ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅊ.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '초' },
        { key: '|', number: 1, keyDisplay: '|', result: '최' }
    ],
    '훼': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅎ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '흐' },
        { key: '.', number: 2, keyDisplay: '.', result: '후' },
        { key: '.', number: 2, keyDisplay: '.', result: '휴' },
        { key: '|', number: 1, keyDisplay: '|', result: '훠' },
        { key: '|', number: 1, keyDisplay: '|', result: '훼' }
    ],
    '귀': [
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '그' },
        { key: '.', number: 2, keyDisplay: '.', result: '구' },
        { key: '|', number: 1, keyDisplay: '|', result: '귀' }
    ],
    '궤': [
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '그' },
        { key: '.', number: 2, keyDisplay: '.', result: '구' },
        { key: '.', number: 2, keyDisplay: '.', result: '규' },
        { key: '|', number: 1, keyDisplay: '|', result: '궈' },
        { key: '|', number: 1, keyDisplay: '|', result: '궤' }
    ],
    '쉐': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '스' },
        { key: '.', number: 2, keyDisplay: '.', result: '수' },
        { key: '.', number: 2, keyDisplay: '.', result: '슈' },
        { key: '|', number: 1, keyDisplay: '|', result: '숴' },
        { key: '|', number: 1, keyDisplay: '|', result: '쉐' }
    ],
    '의': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '으' },
        { key: '|', number: 1, keyDisplay: '|', result: '의' }
    ],
    '줴': [
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅈ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '즈' },
        { key: '.', number: 2, keyDisplay: '.', result: '주' },
        { key: '.', number: 2, keyDisplay: '.', result: '쥬' },
        { key: '|', number: 1, keyDisplay: '|', result: '줘' },
        { key: '|', number: 1, keyDisplay: '|', result: '줴' }
    ],
    
    // Level 5 Mappings
    '강': [
      { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ' },
      { key: '|', number: 1, keyDisplay: '|', result: '기' },
      { key: '.', number: 2, keyDisplay: '.', result: '가' },
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '강' }
    ],
    '넌': [
      { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: 'ㄴ' },
      { key: '.', number: 2, keyDisplay: '.', result: 'ㄴ.' },
      { key: '|', number: 1, keyDisplay: '|', result: '너' },
      { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '넌' }
    ],
    '돌': [
      { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: 'ㄷ' },
      { key: '.', number: 2, keyDisplay: '.', result: 'ㄷ.' },
      { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '도' },
      { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '돈' },
      { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '돌' }
    ],
    '람': [
      { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: 'ㄴ' },
      { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: 'ㄹ' },
      { key: '|', number: 1, keyDisplay: '|', result: '리' },
      { key: '.', number: 2, keyDisplay: '.', result: '라' },
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '랑' },
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '람' }
    ],
    '막': [
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅁ' },
      { key: '|', number: 1, keyDisplay: '|', result: '미' },
      { key: '.', number: 2, keyDisplay: '.', result: '마' },
      { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '막' }
    ],
    '법': [
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅂ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅂ.' },
        { key: '|', number: 1, keyDisplay: '|', result: '버' },
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: '법' }
    ],
    '속': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅅ.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '소' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '속' }
    ],
    '원': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '으' },
        { key: '.', number: 2, keyDisplay: '.', result: '우' },
        { key: '.', number: 2, keyDisplay: '.', result: '유' },
        { key: '|', number: 1, keyDisplay: '|', result: '워' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '원' }
    ],
    '줄': [
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅈ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '즈' },
        { key: '.', number: 2, keyDisplay: '.', result: '주' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '준' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '줄' }
    ],
    '글': [
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '그' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '근' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '글' }
    ],
    '김': [
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ' },
        { key: '|', number: 1, keyDisplay: '|', result: '기' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '깅' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '김' }
    ],
    '답': [
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: 'ㄷ' },
        { key: '|', number: 1, keyDisplay: '|', result: '디' },
        { key: '.', number: 2, keyDisplay: '.', result: '다' },
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: '답' }
    ],
    '릇': [
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: 'ㄴ' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: 'ㄹ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '르' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: '릇' }
    ],
    '맘': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅁ' },
        { key: '|', number: 1, keyDisplay: '|', result: '미' },
        { key: '.', number: 2, keyDisplay: '.', result: '마' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '망' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '맘' }
    ],
    '밥': [
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅂ' },
        { key: '|', number: 1, keyDisplay: '|', result: '비' },
        { key: '.', number: 2, keyDisplay: '.', result: '바' },
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: '밥' }
    ],
    '상': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
        { key: '|', number: 1, keyDisplay: '|', result: '시' },
        { key: '.', number: 2, keyDisplay: '.', result: '사' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '상' }
    ],
    '입': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
        { key: '|', number: 1, keyDisplay: '|', result: '이' },
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: '입' }
    ],
    '종': [
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅈ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅈ.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '조' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '종' }
    ],
    '창': [
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅈ' },
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅊ' },
        { key: '|', number: 1, keyDisplay: '|', result: '치' },
        { key: '.', number: 2, keyDisplay: '.', result: '차' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '창' }
    ],
    '팥': [
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅂ' },
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅍ' },
        { key: '|', number: 1, keyDisplay: '|', result: '피' },
        { key: '.', number: 2, keyDisplay: '.', result: '파' },
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: '팓' },
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: '팥' }
    ]
  }
};
