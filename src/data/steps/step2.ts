/**
 * 천지인 타자 연습 2단계 데이터
 * - id: 단계 ID
 * - title: 단계 제목
 * - subtitle: 단계 부제
 * - description: 단계 설명
 * - levels: 하위 레벨 목록 (1-5)
 * - words: 해당 레벨에서 연습할 낱말 배열
 * - description: 하위 레벨 설명
 * - mapping: 각 낱말에 대한 키 입력 순서 정보
 * - key: 입력해야 할 키의 한글 자모
 * - number: 눌러야 할 키패드 번호
 * - keyDisplay: 키패드에 표시되는 문자
 * - result: 해당 키를 눌렀을 때 화면에 표시되는 중간 또는 최종 결과
 */

import { StepData } from '../../types';

export const step2Data: StepData = {
  id: 2,
  title: '2단계',
  subtitle: '쉬운 낱말',
  description: '두 글자 이상의 간단한 낱말을 연습합니다.',
  levels: {
    1: {
      words: ['아기', '나무', '모자', '바지', '소리', '허리', '머리', '도로', '고기', '너구리', '다리미', '오이', '우리', '나라', '비누', '지도', '타조', '코', '피자', '하마'],
      description: '기본 낱말 (받침 없음)'
    },
    2: {
      words: ['엄마', '아빠', '안녕', '강산', '바람', '안경', '연필', '신문', '양말', '공책', '음악', '운동', '산책', '하늘', '구름', '그림', '마음', '선물', '창문', '인생'],
      description: '받침 낱말 1 (ㄱ,ㄴ,ㅁ,ㅇ 받침)'
    },
    3: {
      words: ['학교', '학생', '효도', '얼굴', '사랑', '사람', '의자', '열쇠', '식탁', '부엌', '칫솔', '수건', '달력', '세상', '공부', '친구', '약속', '건강', '가족', '행복'],
      description: '받침 낱말 2 (다양한 받침)'
    },
    4: {
      words: ['토끼', '어깨', '아까', '오빠', '진짜', '빨리', '가짜', '예쁘다', '바쁘다', '찌개', '떡', '빵', '쓰다', '짜다', '싸다', '꼬리', '뿌리', '허리띠', '쌀', '어떠니'],
      description: '된소리 낱말'
    },
    5: {
      words: ['과자', '돼지', '시계', '병원', '회사', '의사', '요리사', '컴퓨터', '웨이터', '가위', '해외', '최고', '회의', '왜', '뭐', '궤도', '쉐이크', '기회', '동네', '지혜'],
      description: '복합 모음 낱말'
    }
  },
  mapping: {
    // Level 1 Mappings
    '아기': [
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
      { key: '|', number: 1, keyDisplay: '|', result: '이' },
      { key: '.', number: 2, keyDisplay: '.', result: '아' },
      { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '악' },
      { key: '|', number: 1, keyDisplay: '|', result: '아기' }
    ],
    '나무': [
      { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: 'ㄴ' },
      { key: '|', number: 1, keyDisplay: '|', result: '니' },
      { key: '.', number: 2, keyDisplay: '.', result: '나' },
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '낭' },
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '남' },
      { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '나므' },
      { key: '.', number: 2, keyDisplay: '.', result: '나무' }
    ],
    '모자': [
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅁ' },
      { key: '.', number: 2, keyDisplay: '.', result: 'ㅁ.' },
      { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '모' },
      { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: '몾' },
      { key: '|', number: 1, keyDisplay: '|', result: '모지' },
      { key: '.', number: 2, keyDisplay: '.', result: '모자' }
    ],
    '바지': [
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅂ'},
        { key: '|', number: 1, keyDisplay: '|', result: '비'},
        { key: '.', number: 2, keyDisplay: '.', result: '바'},
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: '밪'},
        { key: '|', number: 1, keyDisplay: '|', result: '바지'}
    ],
    '소리': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ'},
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅅ.'},
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '소'},
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '손'},
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '솔'},
        { key: '|', number: 1, keyDisplay: '|', result: '소리'}
    ],
    '허리': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅎ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅎ.' },
        { key: '|', number: 1, keyDisplay: '|', result: '허' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '헌' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '헐' },
        { key: '|', number: 1, keyDisplay: '|', result: '허리' }
    ],
    '머리': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅁ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅁ.' },
        { key: '|', number: 1, keyDisplay: '|', result: '머' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '먼' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '멀' },
        { key: '|', number: 1, keyDisplay: '|', result: '머리' }
    ],
    '도로': [
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: 'ㄷ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㄷ.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '도' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '돈' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '돌' },
        { key: '.', number: 2, keyDisplay: '.', result: '도ㄹ.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '도로' }
    ],
    '고기': [
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㄱ.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '고' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '곡' },
        { key: '|', number: 1, keyDisplay: '|', result: '고기' }
    ],
    '너구리': [
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: 'ㄴ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㄴ.' },
        { key: '|', number: 1, keyDisplay: '|', result: '너' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '넉' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '너그' },
        { key: '.', number: 2, keyDisplay: '.', result: '너구' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '너군' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '너굴' },
        { key: '|', number: 1, keyDisplay: '|', result: '너구리' }
    ],
    '다리미': [
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: 'ㄷ' },
        { key: '|', number: 1, keyDisplay: '|', result: '디' },
        { key: '.', number: 2, keyDisplay: '.', result: '다' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '단' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '달' },
        { key: '|', number: 1, keyDisplay: '|', result: '다리' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '다링' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '다림' },
        { key: '|', number: 1, keyDisplay: '|', result: '다리미' }
    ],
    '오이': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅇ.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '오' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '옹' },
        { key: '|', number: 1, keyDisplay: '|', result: '오이' }
    ],
    '우리': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '으' },
        { key: '.', number: 2, keyDisplay: '.', result: '우' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '운' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '울' },
        { key: '|', number: 1, keyDisplay: '|', result: '우리' }
    ],
    '나라': [
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: 'ㄴ' },
        { key: '|', number: 1, keyDisplay: '|', result: '니' },
        { key: '.', number: 2, keyDisplay: '.', result: '나' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '난' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '날' },
        { key: '|', number: 1, keyDisplay: '|', result: '나리' },
        { key: '.', number: 2, keyDisplay: '.', result: '나라' }
    ],
    '비누': [
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅂ' },
        { key: '|', number: 1, keyDisplay: '|', result: '비' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '빈' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '비느' },
        { key: '.', number: 2, keyDisplay: '.', result: '비누' }
    ],
    '지도': [
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅈ' },
        { key: '|', number: 1, keyDisplay: '|', result: '지' },
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: '짇' },
        { key: '.', number: 2, keyDisplay: '.', result: '지ㄷ.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '지도' }
    ],
    '타조': [
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: 'ㄷ' },
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: 'ㅌ' },
        { key: '|', number: 1, keyDisplay: '|', result: '티' },
        { key: '.', number: 2, keyDisplay: '.', result: '타' },
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: '탖' },
        { key: '.', number: 2, keyDisplay: '.', result: '탖.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '타조' }
    ],
    '코': [
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㅋ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅋ.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '코' }
    ],
    '피자': [
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅂ' },
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅍ' },
        { key: '|', number: 1, keyDisplay: '|', result: '피' },
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: '핒' },
        { key: '|', number: 1, keyDisplay: '|', result: '피지' },
        { key: '.', number: 2, keyDisplay: '.', result: '피자' }
    ],
    '하마': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅎ' },
        { key: '|', number: 1, keyDisplay: '|', result: '히' },
        { key: '.', number: 2, keyDisplay: '.', result: '하' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '항' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '함' },
        { key: '|', number: 1, keyDisplay: '|', result: '하미' },
        { key: '.', number: 2, keyDisplay: '.', result: '하마' }
    ],

    // Level 2 Mappings
    '엄마': [
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
      { key: '.', number: 2, keyDisplay: '.', result: 'ㅇ.' },
      { key: '|', number: 1, keyDisplay: '|', result: '어' },
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '엉' },
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '엄' },
      { key: ' ', number: null, keyDisplay: '[____]', result: '엄' },
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '엄ㅇ' },
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '엄ㅁ' },
      { key: '|', number: 1, keyDisplay: '|', result: '엄미' },
      { key: '.', number: 2, keyDisplay: '.', result: '엄마' }
    ],
    '아빠': [
      { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
      { key: '|', number: 1, keyDisplay: '|', result: '이' },
      { key: '.', number: 2, keyDisplay: '.', result: '아' },
      { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: '압' },
      { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: '앞' },
      { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: '아ㅃ' },
      { key: '|', number: 1, keyDisplay: '|', result: '아삐' },
      { key: '.', number: 2, keyDisplay: '.', result: '아빠' }
    ],
    '안녕': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
        { key: '|', number: 1, keyDisplay: '|', result: '이' },
        { key: '.', number: 2, keyDisplay: '.', result: '아' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '안' },
        { key: ' ', number: null, keyDisplay: '[____]', result: '안' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '안ㄴ' },
        { key: '.', number: 2, keyDisplay: '.', result: '안ㄴ.' },
        { key: '.', number: 2, keyDisplay: '.', result: '안ㄴ..' },
        { key: '|', number: 1, keyDisplay: '|', result: '안녀' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '안녕' }
    ],
    '강산': [
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ' },
        { key: '|', number: 1, keyDisplay: '|', result: '기' },
        { key: '.', number: 2, keyDisplay: '.', result: '가' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '강' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: '강ㅅ' },
        { key: '|', number: 1, keyDisplay: '|', result: '강시' },
        { key: '.', number: 2, keyDisplay: '.', result: '강사' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '강산' }
    ],
    '바람': [
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅂ' },
        { key: '|', number: 1, keyDisplay: '|', result: '비' },
        { key: '.', number: 2, keyDisplay: '.', result: '바' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '반' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '발' },
        { key: '|', number: 1, keyDisplay: '|', result: '바리' },
        { key: '.', number: 2, keyDisplay: '.', result: '바라' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '바랑' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '바람' }
    ],
    '안경': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
        { key: '|', number: 1, keyDisplay: '|', result: '이' },
        { key: '.', number: 2, keyDisplay: '.', result: '아' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '안' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '안ㄱ' },
        { key: '.', number: 2, keyDisplay: '.', result: '안ㄱ.' },
        { key: '.', number: 2, keyDisplay: '.', result: '안ㄱ..' },
        { key: '|', number: 1, keyDisplay: '|', result: '안겨' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '안경' }
    ],
    '연필': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅇ.' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅇ..' },
        { key: '|', number: 1, keyDisplay: '|', result: '여' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '연' },
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: '연ㅂ' },
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: '연ㅍ' },
        { key: '|', number: 1, keyDisplay: '|', result: '연피' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '연핀' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '연필' }
    ],
    '신문': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
        { key: '|', number: 1, keyDisplay: '|', result: '시' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '신' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '신ㅇ' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '신ㅁ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '신므' },
        { key: '.', number: 2, keyDisplay: '.', result: '신무' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '신문' }
    ],
    '양말': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
        { key: '|', number: 1, keyDisplay: '|', result: '이' },
        { key: '.', number: 2, keyDisplay: '.', result: '아' },
        { key: '.', number: 2, keyDisplay: '.', result: '야' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '양' },
        { key: ' ', number: null, keyDisplay: '[____]', result: '양' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '양ㅇ' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '양ㅁ' },
        { key: '|', number: 1, keyDisplay: '|', result: '양미' },
        { key: '.', number: 2, keyDisplay: '.', result: '양마' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '양만' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '양말' }
    ],
    '공책': [
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㄱ.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '고' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '공' },
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: '공ㅈ' },
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: '공ㅊ' },
        { key: '|', number: 1, keyDisplay: '|', result: '공치' },
        { key: '.', number: 2, keyDisplay: '.', result: '공차' },
        { key: '|', number: 1, keyDisplay: '|', result: '공채' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '공책' }
    ],
    '음악': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '으' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '응' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '음' },
        { key: ' ', number: null, keyDisplay: '[____]', result: '음' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '음ㅇ' },
        { key: '|', number: 1, keyDisplay: '|', result: '음이' },
        { key: '.', number: 2, keyDisplay: '.', result: '음아' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '음악' }
    ],
    '운동': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '으' },
        { key: '.', number: 2, keyDisplay: '.', result: '우' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '운' },
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: '운ㄷ' },
        { key: '.', number: 2, keyDisplay: '.', result: '운ㄷ.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '운도' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '운동' }
    ],
    '산책': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
        { key: '|', number: 1, keyDisplay: '|', result: '시' },
        { key: '.', number: 2, keyDisplay: '.', result: '사' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '산' },
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: '산ㅈ' },
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: '산ㅊ' },
        { key: '|', number: 1, keyDisplay: '|', result: '산치' },
        { key: '.', number: 2, keyDisplay: '.', result: '산차' },
        { key: '|', number: 1, keyDisplay: '|', result: '산채' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '산책' }
    ],
    '하늘': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅎ' },
        { key: '|', number: 1, keyDisplay: '|', result: '히' },
        { key: '.', number: 2, keyDisplay: '.', result: '하' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '한' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '하느' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '하는' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '하늘' }
    ],
    '구름': [
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '그' },
        { key: '.', number: 2, keyDisplay: '.', result: '구' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '군' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '굴' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '구르' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '구릉' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '구름' }
    ],
    '그림': [
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '그' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '근' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '글' },
        { key: '|', number: 1, keyDisplay: '|', result: '그리' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '그링' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '그림' }
    ],
    '마음': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅁ' },
        { key: '|', number: 1, keyDisplay: '|', result: '미' },
        { key: '.', number: 2, keyDisplay: '.', result: '마' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '망' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '마으' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '마응' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '마음' }
    ],
    '선물': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅅ.' },
        { key: '|', number: 1, keyDisplay: '|', result: '서' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '선' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '선ㅇ' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '선ㅁ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '선므' },
        { key: '.', number: 2, keyDisplay: '.', result: '선무' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '선문' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '선물' }
    ],
    '창문': [
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅈ' },
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅊ' },
        { key: '|', number: 1, keyDisplay: '|', result: '치' },
        { key: '.', number: 2, keyDisplay: '.', result: '차' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '창' },
        { key: ' ', number: null, keyDisplay: '[____]', result: '창' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '창ㅇ' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '창ㅁ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '창므' },
        { key: '.', number: 2, keyDisplay: '.', result: '창무' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '창문' }
    ],
    '인생': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
        { key: '|', number: 1, keyDisplay: '|', result: '이' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '인' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: '인ㅅ' },
        { key: '|', number: 1, keyDisplay: '|', result: '인시' },
        { key: '.', number: 2, keyDisplay: '.', result: '인사.' },
        { key: '|', number: 1, keyDisplay: '|', result: '인새' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '인생' }
    ],

    // Level 3 Mappings
    '학교': [
      { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
      { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅎ' },
      { key: '|', number: 1, keyDisplay: '|', result: '히' },
      { key: '.', number: 2, keyDisplay: '.', result: '하' },
      { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '학' },
      { key: ' ', number: null, keyDisplay: '[____]', result: '학' },
      { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '학ㄱ' },
      { key: '.', number: 2, keyDisplay: '.', result: '학ㄱ.' },
      { key: '.', number: 2, keyDisplay: '.', result: '학ㄱ..' },
      { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '학교' }
    ],
    '학생': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅎ' },
        { key: '|', number: 1, keyDisplay: '|', result: '히' },
        { key: '.', number: 2, keyDisplay: '.', result: '하' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '학' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: '핛' },
        { key: '|', number: 1, keyDisplay: '|', result: '학시' },
        { key: '.', number: 2, keyDisplay: '.', result: '학사' },
        { key: '|', number: 1, keyDisplay: '|', result: '학새' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '학생' }
    ],
    '효도': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅎ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅎ.' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅎ..' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '효' },
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: '횯' },
        { key: '.', number: 2, keyDisplay: '.', result: '횯.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '효도' }
    ],
    '얼굴': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅇ.' },
        { key: '|', number: 1, keyDisplay: '|', result: '어' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '언' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '얼' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '얼ㄱ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '얼그' },
        { key: '.', number: 2, keyDisplay: '.', result: '얼구' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '얼군' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '얼굴' }
    ],
    '사랑': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ'},
        { key: '|', number: 1, keyDisplay: '|', result: '시'},
        { key: '.', number: 2, keyDisplay: '.', result: '사'},
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '산'},
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '살'},
        { key: '|', number: 1, keyDisplay: '|', result: '사리'},
        { key: '.', number: 2, keyDisplay: '.', result: '사라'},
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '사랑'}
    ],
    '사람': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ'},
        { key: '|', number: 1, keyDisplay: '|', result: '시'},
        { key: '.', number: 2, keyDisplay: '.', result: '사'},
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '산'},
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '살'},
        { key: '|', number: 1, keyDisplay: '|', result: '사리'},
        { key: '.', number: 2, keyDisplay: '.', result: '사라'},
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '사랑' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '사람' }
    ],
    '의자': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '으' },
        { key: '|', number: 1, keyDisplay: '|', result: '의' },
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: '읮' },
        { key: '|', number: 1, keyDisplay: '|', result: '의지' },
        { key: '.', number: 2, keyDisplay: '.', result: '의자' }
    ],
    '열쇠': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅇ.' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅇ..' },
        { key: '|', number: 1, keyDisplay: '|', result: '여' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '연' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '열' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: '엸' },
        { key: '.', number: 2, keyDisplay: '.', result: '엸.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '열소' },
        { key: '|', number: 1, keyDisplay: '|', result: '열쇠' }
    ],
    '식탁': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
        { key: '|', number: 1, keyDisplay: '|', result: '시' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '식' },
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: '식ㄷ' },
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: '식ㅌ' },
        { key: '|', number: 1, keyDisplay: '|', result: '식티' },
        { key: '.', number: 2, keyDisplay: '.', result: '식타' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '식탁' }
    ],
    '부엌': [
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅂ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '브' },
        { key: '.', number: 2, keyDisplay: '.', result: '부' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '붕' },
        { key: '.', number: 2, keyDisplay: '.', result: '붕.' },
        { key: '|', number: 1, keyDisplay: '|', result: '부어' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '부억' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '부엌' }
    ],
    '칫솔': [
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅈ' },
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅊ' },
        { key: '|', number: 1, keyDisplay: '|', result: '치' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: '칫' },
        { key: ' ', number: null, keyDisplay: '[____]', result: '칫' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: '칫ㅅ' },
        { key: '.', number: 2, keyDisplay: '.', result: '칫ㅅ.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '칫소' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '칫손' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '칫솔' }
    ],
    '수건': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '스' },
        { key: '.', number: 2, keyDisplay: '.', result: '수' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '숙' },
        { key: '.', number: 2, keyDisplay: '.', result: '숙.' },
        { key: '|', number: 1, keyDisplay: '|', result: '수거' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '수건' }
    ],
    '달력': [
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: 'ㄷ' },
        { key: '|', number: 1, keyDisplay: '|', result: '디' },
        { key: '.', number: 2, keyDisplay: '.', result: '다' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '단' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '달' },
        { key: ' ', number: null, keyDisplay: '[____]', result: '달' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '달ㄴ' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '달ㄹ' },
        { key: '.', number: 2, keyDisplay: '.', result: '달ㄹ.' },
        { key: '.', number: 2, keyDisplay: '.', result: '달ㄹ..' },
        { key: '|', number: 1, keyDisplay: '|', result: '달려' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '달력' }
    ],
    '세상': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅅ.' },
        { key: '|', number: 1, keyDisplay: '|', result: '서' },
        { key: '|', number: 1, keyDisplay: '|', result: '세' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: '셋' },
        { key: '|', number: 1, keyDisplay: '|', result: '세시' },
        { key: '.', number: 2, keyDisplay: '.', result: '세사' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '세상' }
    ],
    '공부': [
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㄱ.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '고' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '공' },
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: '공ㅂ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '공브' },
        { key: '.', number: 2, keyDisplay: '.', result: '공부' }
    ],
    '친구': [
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅈ' },
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅊ' },
        { key: '|', number: 1, keyDisplay: '|', result: '치' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '친' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '친ㄱ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '친그' },
        { key: '.', number: 2, keyDisplay: '.', result: '친구' }
    ],
    '약속': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
        { key: '|', number: 1, keyDisplay: '|', result: '이' },
        { key: '.', number: 2, keyDisplay: '.', result: '아' },
        { key: '.', number: 2, keyDisplay: '.', result: '야' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '약' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: '앿' },
        { key: '.', number: 2, keyDisplay: '.', result: '앿.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '약소' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '약속' }
    ],
    '건강': [
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㄱ.' },
        { key: '|', number: 1, keyDisplay: '|', result: '거' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '건' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '건ㄱ' },
        { key: '|', number: 1, keyDisplay: '|', result: '건기' },
        { key: '.', number: 2, keyDisplay: '.', result: '건가' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '건강' }
    ],
    '가족': [
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ' },
        { key: '|', number: 1, keyDisplay: '|', result: '기' },
        { key: '.', number: 2, keyDisplay: '.', result: '가' },
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: '갖' },
        { key: '.', number: 2, keyDisplay: '.', result: '갖.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '가조' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '가족' }
    ],
    '행복': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅎ' },
        { key: '|', number: 1, keyDisplay: '|', result: '히' },
        { key: '.', number: 2, keyDisplay: '.', result: '하' },
        { key: '|', number: 1, keyDisplay: '|', result: '해' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '행' },
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: '행ㅂ' },
        { key: '.', number: 2, keyDisplay: '.', result: '행ㅂ.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '행보' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '행복' }
    ],

    // Level 4 Mappings
    '토끼': [
      { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: 'ㄷ' },
      { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: 'ㅌ' },
      { key: '.', number: 2, keyDisplay: '.', result: 'ㅌ.' },
      { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '토' },
      { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '톡' },
      { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '톸' },
      { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '톢' },
      { key: '|', number: 1, keyDisplay: '|', result: '토끼' }
    ],
    '어깨': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅇ.' },
        { key: '|', number: 1, keyDisplay: '|', result: '어' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '억' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '엌' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '얶' },
        { key: '|', number: 1, keyDisplay: '|', result: '어끼' },
        { key: '.', number: 2, keyDisplay: '.', result: '어까' },
        { key: '|', number: 1, keyDisplay: '|', result: '어깨' }
    ],
    '아까': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
        { key: '|', number: 1, keyDisplay: '|', result: '이' },
        { key: '.', number: 2, keyDisplay: '.', result: '아' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '악' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '앜' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '앆' },
        { key: '|', number: 1, keyDisplay: '|', result: '아끼' },
        { key: '.', number: 2, keyDisplay: '.', result: '아까' }
    ],
    '오빠': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅇ.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '오' },
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: '옵' },
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: '옾' },
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: '오ㅃ' },
        { key: '|', number: 1, keyDisplay: '|', result: '오삐' },
        { key: '.', number: 2, keyDisplay: '.', result: '오빠' }
    ],
    '진짜': [
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅈ'},
        { key: '|', number: 1, keyDisplay: '|', result: '지'},
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '진'},
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: '짅'},
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: '진ㅊ'},
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: '진ㅉ'},
        { key: '|', number: 1, keyDisplay: '|', result: '진찌'},
        { key: '.', number: 2, keyDisplay: '.', result: '진짜'}
    ],
    '빨리': [
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅂ' },
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅍ' },
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅃ' },
        { key: '|', number: 1, keyDisplay: '|', result: '삐' },
        { key: '.', number: 2, keyDisplay: '.', result: '빠' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '빤' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '빨' },
        { key: ' ', number: null, keyDisplay: '[____]', result: '빨' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '빨ㄹ' },
        { key: '|', number: 1, keyDisplay: '|', result: '빨리' }
    ],
    '가짜': [
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ' },
        { key: '|', number: 1, keyDisplay: '|', result: '기' },
        { key: '.', number: 2, keyDisplay: '.', result: '가' },
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: '갖' },
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: '갗' },
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: '가ㅉ' },
        { key: '|', number: 1, keyDisplay: '|', result: '가찌' },
        { key: '.', number: 2, keyDisplay: '.', result: '가짜' }
    ],
    '예쁘다': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅇ.' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅇ..' },
        { key: '|', number: 1, keyDisplay: '|', result: '여' },
        { key: '|', number: 1, keyDisplay: '|', result: '예' },
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: '옙' },
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: '옢' },
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: '예ㅃ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '예쁘' },
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: '예쁟' },
        { key: '|', number: 1, keyDisplay: '|', result: '예쁘디' },
        { key: '.', number: 2, keyDisplay: '.', result: '예쁘다' }
    ],
    '바쁘다': [
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅂ' },
        { key: '|', number: 1, keyDisplay: '|', result: '비' },
        { key: '.', number: 2, keyDisplay: '.', result: '바' },
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: '밥' },
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: '밮' },
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: '바ㅃ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '바쁘' },
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: '바쁟' },
        { key: '|', number: 1, keyDisplay: '|', result: '바쁘디' },
        { key: '.', number: 2, keyDisplay: '.', result: '바쁘다' }
    ],
    '찌개': [
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅈ' },
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅉ' },
        { key: '|', number: 1, keyDisplay: '|', result: '찌' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '찍' },
        { key: '|', number: 1, keyDisplay: '|', result: '찌기' },
        { key: '.', number: 2, keyDisplay: '.', result: '찌가' },
        { key: '|', number: 1, keyDisplay: '|', result: '찌개' }
    ],
    '떡': [
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: 'ㄷ' },
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: 'ㅌ' },
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: 'ㄸ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㄸ.' },
        { key: '|', number: 1, keyDisplay: '|', result: '떠' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '떡' }
    ],
    '빵': [
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅂ' },
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅍ' },
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅃ' },
        { key: '|', number: 1, keyDisplay: '|', result: '삐' },
        { key: '.', number: 2, keyDisplay: '.', result: '빠' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '빵' }
    ],
    '쓰다': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅎ' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅆ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '쓰' },
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: '쓷' },
        { key: '|', number: 1, keyDisplay: '|', result: '쓰디' },
        { key: '.', number: 2, keyDisplay: '.', result: '쓰다' }
    ],
    '짜다': [
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅈ' },
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅊ' },
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅉ' },
        { key: '|', number: 1, keyDisplay: '|', result: '찌' },
        { key: '.', number: 2, keyDisplay: '.', result: '짜' },
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: '짣' },
        { key: '|', number: 1, keyDisplay: '|', result: '짜디' },
        { key: '.', number: 2, keyDisplay: '.', result: '짜다' }
    ],
    '싸다': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅎ' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅆ' },
        { key: '|', number: 1, keyDisplay: '|', result: '씨' },
        { key: '.', number: 2, keyDisplay: '.', result: '싸' },
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: '싿' },
        { key: '|', number: 1, keyDisplay: '|', result: '싸디' },
        { key: '.', number: 2, keyDisplay: '.', result: '싸다' }
    ],
    '꼬리': [
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㅋ' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄲ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㄲ.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '꼬' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '꼰' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '꼴' },
        { key: '|', number: 1, keyDisplay: '|', result: '꼬리' }
    ],
    '뿌리': [
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅂ' },
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅍ' },
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅃ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '쁘' },
        { key: '.', number: 2, keyDisplay: '.', result: '뿌' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '뿐' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '뿔' },
        { key: '|', number: 1, keyDisplay: '|', result: '뿌리' }
    ],
    '허리띠': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅎ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅎ.' },
        { key: '|', number: 1, keyDisplay: '|', result: '허' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '헌' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '헐' },
        { key: '|', number: 1, keyDisplay: '|', result: '허리' },
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: '허릳' },
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: '허맅' },
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: '허리ㄸ' },
        { key: '|', number: 1, keyDisplay: '|', result: '허리띠' }
    ],
    '쌀': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅎ' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅆ' },
        { key: '|', number: 1, keyDisplay: '|', result: '씨' },
        { key: '.', number: 2, keyDisplay: '.', result: '싸' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '싼' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '쌀' }
    ],
    '어떠니': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅇ.' },
        { key: '|', number: 1, keyDisplay: '|', result: '어' },
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: '얻' },
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: '엍' },
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: '어ㄸ' },
        { key: '.', number: 2, keyDisplay: '.', result: '어ㄸ.' },
        { key: '|', number: 1, keyDisplay: '|', result: '어떠' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '어떤' },
        { key: '|', number: 1, keyDisplay: '|', result: '어떠니' }
    ],

    // Level 5 Mappings
    '과자': [
      { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ' },
      { key: '.', number: 2, keyDisplay: '.', result: 'ㄱ.' },
      { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '고' },
      { key: '|', number: 1, keyDisplay: '|', result: '괴' },
      { key: '.', number: 2, keyDisplay: '.', result: '과' },
      { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: '괒' },
      { key: '|', number: 1, keyDisplay: '|', result: '과지' },
      { key: '.', number: 2, keyDisplay: '.', result: '과자' }
    ],
    '돼지': [
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: 'ㄷ'},
        { key: '.', number: 2, keyDisplay: '.', result: 'ㄷ.'},
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '도'},
        { key: '|', number: 1, keyDisplay: '|', result: '되'},
        { key: '.', number: 2, keyDisplay: '.', result: '돠'},
        { key: '|', number: 1, keyDisplay: '|', result: '돼'},
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: '됒'},
        { key: '|', number: 1, keyDisplay: '|', result: '돼지'}
    ],
    '시계': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
        { key: '|', number: 1, keyDisplay: '|', result: '시' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '식' },
        { key: '.', number: 2, keyDisplay: '.', result: '식.' },
        { key: '.', number: 2, keyDisplay: '.', result: '식..' },
        { key: '|', number: 1, keyDisplay: '|', result: '시겨' },
        { key: '|', number: 1, keyDisplay: '|', result: '시계' }
    ],
    '병원': [
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: 'ㅂ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅂ.' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅂ..' },
        { key: '|', number: 1, keyDisplay: '|', result: '벼' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '병' },
        { key: ' ', number: null, keyDisplay: '[____]', result: '병' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '병ㅇ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '병으' },
        { key: '.', number: 2, keyDisplay: '.', result: '병우' },
        { key: '.', number: 2, keyDisplay: '.', result: '병유' },
        { key: '|', number: 1, keyDisplay: '|', result: '병워' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '병원' }
    ],
    '회사': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅎ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅎ.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '호' },
        { key: '|', number: 1, keyDisplay: '|', result: '회' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: '횟' },
        { key: '|', number: 1, keyDisplay: '|', result: '회시' },
        { key: '.', number: 2, keyDisplay: '.', result: '회사' }
    ],
    '의사': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '으' },
        { key: '|', number: 1, keyDisplay: '|', result: '의' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: '읫' },
        { key: '|', number: 1, keyDisplay: '|', result: '의시' },
        { key: '.', number: 2, keyDisplay: '.', result: '의사' }
    ],
    '요리사': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅇ.' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅇ..' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '요' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '욘' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '욜' },
        { key: '|', number: 1, keyDisplay: '|', result: '요리' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: '요릿' },
        { key: '|', number: 1, keyDisplay: '|', result: '요리시' },
        { key: '.', number: 2, keyDisplay: '.', result: '요리사' }
    ],
    '컴퓨터': [
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㅋ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅋ.' },
        { key: '|', number: 1, keyDisplay: '|', result: '커' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '컹' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '컴' },
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: '컴ㅂ' },
        { key: 'ㅂ', number: 7, keyDisplay: 'ㅂㅍ', result: '컴ㅍ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '컴프' },
        { key: '.', number: 2, keyDisplay: '.', result: '컴푸' },
        { key: '.', number: 2, keyDisplay: '.', result: '컴퓨' },
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: '컴퓯' },
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: '컴픁' },
        { key: '.', number: 2, keyDisplay: '.', result: '컴픁.' },
        { key: '|', number: 1, keyDisplay: '|', result: '컴퓨터' }
    ],
    '웨이터': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '으' },
        { key: '.', number: 2, keyDisplay: '.', result: '우' },
        { key: '.', number: 2, keyDisplay: '.', result: '유' },
        { key: '|', number: 1, keyDisplay: '|', result: '워' },
        { key: '|', number: 1, keyDisplay: '|', result: '웨' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '웽' },
        { key: '|', number: 1, keyDisplay: '|', result: '웨이' },
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: '웨읻' },
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: '웨잍' },
        { key: '.', number: 2, keyDisplay: '.', result: '웨잍.' },
        { key: '|', number: 1, keyDisplay: '|', result: '웨이터' }
    ],
    '가위': [
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ' },
        { key: '|', number: 1, keyDisplay: '|', result: '기' },
        { key: '.', number: 2, keyDisplay: '.', result: '가' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '강' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '가으' },
        { key: '.', number: 2, keyDisplay: '.', result: '가우' },
        { key: '|', number: 1, keyDisplay: '|', result: '가위' }
    ],
    '해외': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅎ' },
        { key: '|', number: 1, keyDisplay: '|', result: '히' },
        { key: '.', number: 2, keyDisplay: '.', result: '하' },
        { key: '|', number: 1, keyDisplay: '|', result: '해' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '행' },
        { key: '.', number: 2, keyDisplay: '.', result: '행.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '해오' },
        { key: '|', number: 1, keyDisplay: '|', result: '해외' }
    ],
    '최고': [
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅈ' },
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅊ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅊ.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '초' },
        { key: '|', number: 1, keyDisplay: '|', result: '최' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '쵝' },
        { key: '.', number: 2, keyDisplay: '.', result: '쵝.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '최고' }
    ],
    '회의': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅎ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅎ.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '호' },
        { key: '|', number: 1, keyDisplay: '|', result: '회' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '횡' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '회으' },
        { key: '|', number: 1, keyDisplay: '|', result: '회의' }
    ],
    '왜': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㅇ.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '오' },
        { key: '|', number: 1, keyDisplay: '|', result: '외' },
        { key: '.', number: 2, keyDisplay: '.', result: '와' },
        { key: '|', number: 1, keyDisplay: '|', result: '왜' }
    ],
    '뭐': [
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅇ' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: 'ㅁ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '므' },
        { key: '.', number: 2, keyDisplay: '.', result: '무' },
        { key: '.', number: 2, keyDisplay: '.', result: '뮤' },
        { key: '|', number: 1, keyDisplay: '|', result: '뭐' }
    ],
    '궤도': [
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '그' },
        { key: '.', number: 2, keyDisplay: '.', result: '구' },
        { key: '.', number: 2, keyDisplay: '.', result: '규' },
        { key: '|', number: 1, keyDisplay: '|', result: '궈' },
        { key: '|', number: 1, keyDisplay: '|', result: '궤' },
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: '궫' },
        { key: '.', number: 2, keyDisplay: '.', result: '궫.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '궤도' }
    ],
    '쉐이크': [
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: 'ㅅ' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '스' },
        { key: '.', number: 2, keyDisplay: '.', result: '수' },
        { key: '.', number: 2, keyDisplay: '.', result: '슈' },
        { key: '|', number: 1, keyDisplay: '|', result: '숴' },
        { key: '|', number: 1, keyDisplay: '|', result: '쉐' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '쉥' },
        { key: '|', number: 1, keyDisplay: '|', result: '쉐이' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '쉐익' },
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: '쉐잌' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '쉐이크' }
    ],
    '기회': [
        { key: 'ㄱ', number: 4, keyDisplay: 'ㄱㅋ', result: 'ㄱ' },
        { key: '|', number: 1, keyDisplay: '|', result: '기' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: '깃' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: '깋' },
        { key: '.', number: 2, keyDisplay: '.', result: '깋.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '기호' },
        { key: '|', number: 1, keyDisplay: '|', result: '기회' }
    ],
    '동네': [
        { key: 'ㄷ', number: 6, keyDisplay: 'ㄷㅌ', result: 'ㄷ' },
        { key: '.', number: 2, keyDisplay: '.', result: 'ㄷ.' },
        { key: 'ㅡ', number: 3, keyDisplay: 'ㅡ', result: '도' },
        { key: 'ㅇ', number: 0, keyDisplay: 'ㅇㅁ', result: '동' },
        { key: 'ㄴ', number: 5, keyDisplay: 'ㄴㄹ', result: '동ㄴ' },
        { key: '.', number: 2, keyDisplay: '.', result: '동ㄴ.' },
        { key: '|', number: 1, keyDisplay: '|', result: '동너' },
        { key: '|', number: 1, keyDisplay: '|', result: '동네' }
    ],
    '지혜': [
        { key: 'ㅈ', number: 9, keyDisplay: 'ㅈㅊ', result: 'ㅈ' },
        { key: '|', number: 1, keyDisplay: '|', result: '지' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: '짓' },
        { key: 'ㅅ', number: 8, keyDisplay: 'ㅅㅎ', result: '짛' },
        { key: '.', number: 2, keyDisplay: '.', result: '짛.' },
        { key: '.', number: 2, keyDisplay: '.', result: '짛..' },
        { key: '|', number: 1, keyDisplay: '|', result: '지혀' },
        { key: '|', number: 1, keyDisplay: '|', result: '지혜' }
    ]
  }
};
