// 천지인 키보드 매핑 데이터
const cheonjiinMapping = {
  // 1단계 - 기본 자음/모음
  '가': [{ key: '0', result: 'ㄱ', total: 1, isConsecutive: false }],
  '나': [{ key: '6', result: 'ㄴ', total: 1, isConsecutive: false }],
  '다': [{ key: '3', result: 'ㄷ', total: 1, isConsecutive: false }],
  '라': [{ key: '5', result: 'ㄹ', total: 1, isConsecutive: false }],
  '마': [{ key: '5', result: 'ㅁ', total: 1, isConsecutive: false }],
  '바': [{ key: '6', result: 'ㅂ', total: 1, isConsecutive: false }],
  '사': [{ key: '4', result: 'ㅅ', total: 1, isConsecutive: false }],
  '아': [{ key: '2', result: 'ㅇ', total: 1, isConsecutive: false }],
  '자': [{ key: '1', result: 'ㅈ', total: 1, isConsecutive: false }],
  '차': [{ key: '7', result: 'ㅊ', total: 1, isConsecutive: false }],
  '카': [{ key: '8', result: 'ㅋ', total: 1, isConsecutive: false }],
  '타': [{ key: '9', result: 'ㅌ', total: 1, isConsecutive: false }],
  '파': [{ key: '0', result: 'ㅍ', total: 1, isConsecutive: false }],
  '하': [{ key: '4', result: 'ㅎ', total: 1, isConsecutive: false }],

  // 2단계 - 기본 낱말
  '가나': [
    { key: '0', result: 'ㄱ', total: 1, isConsecutive: false },
    { key: '6', result: 'ㄴ', total: 1, isConsecutive: false }
  ],
  '다라': [
    { key: '3', result: 'ㄷ', total: 1, isConsecutive: false },
    { key: '5', result: 'ㄹ', total: 1, isConsecutive: false }
  ],
  '마바': [
    { key: '5', result: 'ㅁ', total: 1, isConsecutive: false },
    { key: '6', result: 'ㅂ', total: 1, isConsecutive: false }
  ],
  '사아': [
    { key: '4', result: 'ㅅ', total: 1, isConsecutive: false },
    { key: '2', result: 'ㅇ', total: 1, isConsecutive: false }
  ],
  '자차': [
    { key: '1', result: 'ㅈ', total: 1, isConsecutive: false },
    { key: '7', result: 'ㅊ', total: 1, isConsecutive: false }
  ],
  '카타': [
    { key: '8', result: 'ㅋ', total: 1, isConsecutive: false },
    { key: '9', result: 'ㅌ', total: 1, isConsecutive: false }
  ],
  '파하': [
    { key: '0', result: 'ㅍ', total: 1, isConsecutive: false },
    { key: '4', result: 'ㅎ', total: 1, isConsecutive: false }
  ],

  // 3단계 - 생활 단어
  '가족': [
    { key: '0', result: 'ㄱ', total: 1, isConsecutive: false },
    { key: '1', result: 'ㅈ', total: 1, isConsecutive: false }
  ],
  '나무': [
    { key: '6', result: 'ㄴ', total: 1, isConsecutive: false },
    { key: '5', result: 'ㅁ', total: 1, isConsecutive: false }
  ],
  '다리': [
    { key: '3', result: 'ㄷ', total: 1, isConsecutive: false },
    { key: '5', result: 'ㄹ', total: 1, isConsecutive: false }
  ],
  '라면': [
    { key: '5', result: 'ㄹ', total: 1, isConsecutive: false },
    { key: '5', result: 'ㅁ', total: 1, isConsecutive: false }
  ],
  '마음': [
    { key: '5', result: 'ㅁ', total: 1, isConsecutive: false },
    { key: '2', result: 'ㅇ', total: 1, isConsecutive: false }
  ],
  '바다': [
    { key: '6', result: 'ㅂ', total: 1, isConsecutive: false },
    { key: '3', result: 'ㄷ', total: 1, isConsecutive: false }
  ],
  '사랑': [
    { key: '4', result: 'ㅅ', total: 1, isConsecutive: false },
    { key: '5', result: 'ㄹ', total: 1, isConsecutive: false }
  ],
  '아들': [
    { key: '2', result: 'ㅇ', total: 1, isConsecutive: false },
    { key: '3', result: 'ㄷ', total: 1, isConsecutive: false }
  ],
  '자동차': [
    { key: '1', result: 'ㅈ', total: 1, isConsecutive: false },
    { key: '3', result: 'ㄷ', total: 1, isConsecutive: false },
    { key: '7', result: 'ㅊ', total: 1, isConsecutive: false }
  ],
  '차량': [
    { key: '7', result: 'ㅊ', total: 1, isConsecutive: false },
    { key: '5', result: 'ㄹ', total: 1, isConsecutive: false }
  ],
  '카드': [
    { key: '8', result: 'ㅋ', total: 1, isConsecutive: false },
    { key: '3', result: 'ㄷ', total: 1, isConsecutive: false }
  ],
  '타이어': [
    { key: '9', result: 'ㅌ', total: 1, isConsecutive: false },
    { key: '2', result: 'ㅇ', total: 1, isConsecutive: false }
  ],
  '파일': [
    { key: '0', result: 'ㅍ', total: 1, isConsecutive: false },
    { key: '5', result: 'ㄹ', total: 1, isConsecutive: false }
  ],
  '하늘': [
    { key: '4', result: 'ㅎ', total: 1, isConsecutive: false },
    { key: '5', result: 'ㄹ', total: 1, isConsecutive: false }
  ],

  // 4단계 - 짧은 문장
  '가족이': [
    { key: '0', result: 'ㄱ', total: 1, isConsecutive: false },
    { key: '1', result: 'ㅈ', total: 1, isConsecutive: false },
    { key: '2', result: 'ㅇ', total: 1, isConsecutive: false }
  ],
  '나무가': [
    { key: '6', result: 'ㄴ', total: 1, isConsecutive: false },
    { key: '5', result: 'ㅁ', total: 1, isConsecutive: false },
    { key: '0', result: 'ㄱ', total: 1, isConsecutive: false }
  ],
  '다리가': [
    { key: '3', result: 'ㄷ', total: 1, isConsecutive: false },
    { key: '5', result: 'ㄹ', total: 1, isConsecutive: false },
    { key: '0', result: 'ㄱ', total: 1, isConsecutive: false }
  ],
  '라면을': [
    { key: '5', result: 'ㄹ', total: 1, isConsecutive: false },
    { key: '5', result: 'ㅁ', total: 1, isConsecutive: false },
    { key: '2', result: 'ㅇ', total: 1, isConsecutive: false }
  ],
  '마음이': [
    { key: '5', result: 'ㅁ', total: 1, isConsecutive: false },
    { key: '2', result: 'ㅇ', total: 1, isConsecutive: false },
    { key: '2', result: 'ㅇ', total: 1, isConsecutive: false }
  ],
  '바다가': [
    { key: '6', result: 'ㅂ', total: 1, isConsecutive: false },
    { key: '3', result: 'ㄷ', total: 1, isConsecutive: false },
    { key: '0', result: 'ㄱ', total: 1, isConsecutive: false }
  ],
  '사랑이': [
    { key: '4', result: 'ㅅ', total: 1, isConsecutive: false },
    { key: '5', result: 'ㄹ', total: 1, isConsecutive: false },
    { key: '2', result: 'ㅇ', total: 1, isConsecutive: false }
  ],
  '아들이': [
    { key: '2', result: 'ㅇ', total: 1, isConsecutive: false },
    { key: '3', result: 'ㄷ', total: 1, isConsecutive: false },
    { key: '2', result: 'ㅇ', total: 1, isConsecutive: false }
  ],
  '자동차가': [
    { key: '1', result: 'ㅈ', total: 1, isConsecutive: false },
    { key: '3', result: 'ㄷ', total: 1, isConsecutive: false },
    { key: '7', result: 'ㅊ', total: 1, isConsecutive: false },
    { key: '0', result: 'ㄱ', total: 1, isConsecutive: false }
  ],
  '차량이': [
    { key: '7', result: 'ㅊ', total: 1, isConsecutive: false },
    { key: '5', result: 'ㄹ', total: 1, isConsecutive: false },
    { key: '2', result: 'ㅇ', total: 1, isConsecutive: false }
  ],
  '카드가': [
    { key: '8', result: 'ㅋ', total: 1, isConsecutive: false },
    { key: '3', result: 'ㄷ', total: 1, isConsecutive: false },
    { key: '0', result: 'ㄱ', total: 1, isConsecutive: false }
  ],
  '타이어가': [
    { key: '9', result: 'ㅌ', total: 1, isConsecutive: false },
    { key: '2', result: 'ㅇ', total: 1, isConsecutive: false },
    { key: '0', result: 'ㄱ', total: 1, isConsecutive: false }
  ],
  '파일이': [
    { key: '0', result: 'ㅍ', total: 1, isConsecutive: false },
    { key: '5', result: 'ㄹ', total: 1, isConsecutive: false },
    { key: '2', result: 'ㅇ', total: 1, isConsecutive: false }
  ],
  '하늘이': [
    { key: '4', result: 'ㅎ', total: 1, isConsecutive: false },
    { key: '5', result: 'ㄹ', total: 1, isConsecutive: false },
    { key: '2', result: 'ㅇ', total: 1, isConsecutive: false }
  ],

  // 5단계 - 긴 문장
  '가족이 함께': [
    { key: '0', result: 'ㄱ', total: 1, isConsecutive: false },
    { key: '1', result: 'ㅈ', total: 1, isConsecutive: false },
    { key: '2', result: 'ㅇ', total: 1, isConsecutive: false },
    { key: '4', result: 'ㅎ', total: 1, isConsecutive: false },
    { key: '5', result: 'ㄹ', total: 1, isConsecutive: false }
  ],
  '나무가 자라': [
    { key: '6', result: 'ㄴ', total: 1, isConsecutive: false },
    { key: '5', result: 'ㅁ', total: 1, isConsecutive: false },
    { key: '0', result: 'ㄱ', total: 1, isConsecutive: false },
    { key: '1', result: 'ㅈ', total: 1, isConsecutive: false },
    { key: '5', result: 'ㄹ', total: 1, isConsecutive: false }
  ],
  '다리가 아파': [
    { key: '3', result: 'ㄷ', total: 1, isConsecutive: false },
    { key: '5', result: 'ㄹ', total: 1, isConsecutive: false },
    { key: '0', result: 'ㄱ', total: 1, isConsecutive: false },
    { key: '2', result: 'ㅇ', total: 1, isConsecutive: false },
    { key: '0', result: 'ㅍ', total: 1, isConsecutive: false }
  ],
  '라면을 끓여': [
    { key: '5', result: 'ㄹ', total: 1, isConsecutive: false },
    { key: '5', result: 'ㅁ', total: 1, isConsecutive: false },
    { key: '2', result: 'ㅇ', total: 1, isConsecutive: false },
    { key: '8', result: 'ㅋ', total: 1, isConsecutive: false },
    { key: '2', result: 'ㅇ', total: 1, isConsecutive: false }
  ],
  '마음이 좋아': [
    { key: '5', result: 'ㅁ', total: 1, isConsecutive: false },
    { key: '2', result: 'ㅇ', total: 1, isConsecutive: false },
    { key: '2', result: 'ㅇ', total: 1, isConsecutive: false },
    { key: '1', result: 'ㅈ', total: 1, isConsecutive: false },
    { key: '2', result: 'ㅇ', total: 1, isConsecutive: false }
  ],
  '바다가 파도': [
    { key: '6', result: 'ㅂ', total: 1, isConsecutive: false },
    { key: '3', result: 'ㄷ', total: 1, isConsecutive: false },
    { key: '0', result: 'ㄱ', total: 1, isConsecutive: false },
    { key: '0', result: 'ㅍ', total: 1, isConsecutive: false },
    { key: '3', result: 'ㄷ', total: 1, isConsecutive: false }
  ],
  '사랑이 깊어': [
    { key: '4', result: 'ㅅ', total: 1, isConsecutive: false },
    { key: '5', result: 'ㄹ', total: 1, isConsecutive: false },
    { key: '2', result: 'ㅇ', total: 1, isConsecutive: false },
    { key: '8', result: 'ㅋ', total: 1, isConsecutive: false },
    { key: '2', result: 'ㅇ', total: 1, isConsecutive: false }
  ],
  '아들이 공부': [
    { key: '2', result: 'ㅇ', total: 1, isConsecutive: false },
    { key: '3', result: 'ㄷ', total: 1, isConsecutive: false },
    { key: '2', result: 'ㅇ', total: 1, isConsecutive: false },
    { key: '8', result: 'ㅋ', total: 1, isConsecutive: false },
    { key: '6', result: 'ㅂ', total: 1, isConsecutive: false }
  ],
  '자동차가 달려': [
    { key: '1', result: 'ㅈ', total: 1, isConsecutive: false },
    { key: '3', result: 'ㄷ', total: 1, isConsecutive: false },
    { key: '7', result: 'ㅊ', total: 1, isConsecutive: false },
    { key: '0', result: 'ㄱ', total: 1, isConsecutive: false },
    { key: '3', result: 'ㄷ', total: 1, isConsecutive: false },
    { key: '5', result: 'ㄹ', total: 1, isConsecutive: false }
  ],
  '차량이 멈춰': [
    { key: '7', result: 'ㅊ', total: 1, isConsecutive: false },
    { key: '5', result: 'ㄹ', total: 1, isConsecutive: false },
    { key: '2', result: 'ㅇ', total: 1, isConsecutive: false },
    { key: '5', result: 'ㅁ', total: 1, isConsecutive: false },
    { key: '7', result: 'ㅊ', total: 1, isConsecutive: false }
  ],
  '카드가 망가져': [
    { key: '8', result: 'ㅋ', total: 1, isConsecutive: false },
    { key: '3', result: 'ㄷ', total: 1, isConsecutive: false },
    { key: '0', result: 'ㄱ', total: 1, isConsecutive: false },
    { key: '5', result: 'ㅁ', total: 1, isConsecutive: false },
    { key: '0', result: 'ㄱ', total: 1, isConsecutive: false },
    { key: '1', result: 'ㅈ', total: 1, isConsecutive: false }
  ],
  '타이어가 터져': [
    { key: '9', result: 'ㅌ', total: 1, isConsecutive: false },
    { key: '2', result: 'ㅇ', total: 1, isConsecutive: false },
    { key: '0', result: 'ㄱ', total: 1, isConsecutive: false },
    { key: '9', result: 'ㅌ', total: 1, isConsecutive: false },
    { key: '1', result: 'ㅈ', total: 1, isConsecutive: false }
  ],
  '파일이 삭제돼': [
    { key: '0', result: 'ㅍ', total: 1, isConsecutive: false },
    { key: '5', result: 'ㄹ', total: 1, isConsecutive: false },
    { key: '2', result: 'ㅇ', total: 1, isConsecutive: false },
    { key: '4', result: 'ㅅ', total: 1, isConsecutive: false },
    { key: '1', result: 'ㅈ', total: 1, isConsecutive: false },
    { key: '3', result: 'ㄷ', total: 1, isConsecutive: false }
  ],
  '하늘이 맑아': [
    { key: '4', result: 'ㅎ', total: 1, isConsecutive: false },
    { key: '5', result: 'ㄹ', total: 1, isConsecutive: false },
    { key: '2', result: 'ㅇ', total: 1, isConsecutive: false },
    { key: '5', result: 'ㅁ', total: 1, isConsecutive: false },
    { key: '2', result: 'ㅇ', total: 1, isConsecutive: false }
  ]
};

// 단계별 연습 단어
const practiceWords = {
  1: ['가', '나', '다', '라', '마', '바', '사', '아', '자', '차', '카', '타', '파', '하'],
  2: ['가나', '다라', '마바', '사아', '자차', '카타', '파하'],
  3: ['가족', '나무', '다리', '라면', '마음', '바다', '사랑', '아들', '자동차', '차량', '카드', '타이어', '파일', '하늘'],
  4: ['가족이', '나무가', '다리가', '라면을', '마음이', '바다가', '사랑이', '아들이', '자동차가', '차량이', '카드가', '타이어가', '파일이', '하늘이'],
  5: ['가족이 함께', '나무가 자라', '다리가 아파', '라면을 끓여', '마음이 좋아', '바다가 파도', '사랑이 깊어', '아들이 공부', '자동차가 달려', '차량이 멈춰', '카드가 망가져', '타이어가 터져', '파일이 삭제돼', '하늘이 맑아']
};

// 전역 변수
let currentWord = '';
let currentInput = '';
let currentInputIndex = 0;
let currentPressCount = 0;
let isCompleted = false;
let currentLevel = 1;
let consecutiveSuccess = 0;
let keyTimeTimeout = null;

// 레벨별 키 타임 설정 (밀리초)
const keyTimeSettings = {
  1: 30000, // 30초
  2: 15000, // 15초
  3: 10000, // 10초
  4: 5000,  // 5초
  5: 1000   // 1초
};

// 현재 키 타임
let currentKeyTime = keyTimeSettings[currentLevel] || 30000;

// DOM 요소들
const currentWordElement = document.getElementById('current-word');
const inputFieldElement = document.getElementById('input-field');
const hintTextElement = document.getElementById('hint-text');
const currentLevelElement = document.getElementById('current-level');
const currentKeytimeElement = document.getElementById('current-keytime');
const consecutiveSuccessElement = document.getElementById('consecutive-success');

// 알림창 요소들
const successNotification = document.getElementById('success-notification');
const errorNotification = document.getElementById('error-notification');
const levelupNotification = document.getElementById('levelup-notification');
const stageCompleteNotification = document.getElementById('stage-complete-notification');

// 현재 단계 정보
const stepId = window.stepId || 4;
const stepData = window.stepData || { title: '4단계', subtitle: '자신 있게 짧은 문장', color: '#D0021B' };

// 현재 입력 시퀀스
let inputSequence = [];

// 현재 단계
let currentStep = null;

// 현재 키 정보
let pressInfo = null;

// 타겟 키
let targetKey = '';

// 키 타임 타이머 시작
function startKeyTimeTimer() {
  // 기존 타이머 확실히 클리어
  if (keyTimeTimeout) {
    clearTimeout(keyTimeTimeout);
    keyTimeTimeout = null;
  }
  
  // 새 타이머 시작
  keyTimeTimeout = setTimeout(() => {
    // 키 타임 초과 시 입력 초기화 및 연속 성공 카운터 리셋
    currentInputIndex = 0;
    currentPressCount = 0;
    currentInput = '';
    consecutiveSuccess = 0;
    updateUI();
    showErrorNotification('시간이 초과되었습니다. 다시 시도해주세요.');
  }, currentKeyTime);
}

// 새 단어 로드
function loadNewWord() {
  const words = practiceWords[stepId] || practiceWords[4];
  const randomIndex = Math.floor(Math.random() * words.length);
  const newWord = words[randomIndex];
  
  currentWord = newWord;
  currentInput = '';
  currentInputIndex = 0;
  currentPressCount = 0;
  isCompleted = false;
  
  // 입력 시퀀스 설정
  inputSequence = cheonjiinMapping[currentWord] || [];
  
  // 기존 타이머 확실히 클리어 (새 단어 시작 시)
  if (keyTimeTimeout) {
    clearTimeout(keyTimeTimeout);
    keyTimeTimeout = null;
  }
  
  updateUI();
}

// UI 업데이트
function updateUI() {
  currentWordElement.textContent = currentWord;
  inputFieldElement.value = currentInput;
  currentLevelElement.textContent = currentLevel;
  currentKeytimeElement.textContent = currentKeyTime / 1000;
  consecutiveSuccessElement.textContent = consecutiveSuccess;
  
  // 현재 단계 정보 업데이트
  if (currentInputIndex < inputSequence.length) {
    currentStep = inputSequence[currentInputIndex];
    pressInfo = currentStep;
    targetKey = currentStep.key;
    
    // 힌트 텍스트 업데이트
    hintTextElement.textContent = `${currentStep.keyDisplay || currentStep.key} 키를 눌러주세요`;
  } else {
    currentStep = null;
    pressInfo = null;
    targetKey = '';
    hintTextElement.textContent = '완료되었습니다!';
  }
  
  // 키보드 하이라이트 업데이트
  updateKeyboardHighlight();
}

// 키보드 하이라이트 업데이트
function updateKeyboardHighlight() {
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => {
    key.classList.remove('target');
    if (key.dataset.key === targetKey) {
      key.classList.add('target');
    }
  });
}

// 키 클릭 핸들러
function onKeyClick(key, action) {
  if (isCompleted) return;

  if (action === 'backspace') {
    if (currentInputIndex > 0) {
      currentInputIndex--;
      currentPressCount = 0;
      currentInput = currentInput.slice(0, -1);
      updateUI();
    }
    return;
  }

  if (action === 'enter') {
    if (currentInput === currentWord) {
      isCompleted = true;
      currentInput = currentWord;
      updateUI();
      showSuccessNotification('성공했습니다!');
    } else {
      showErrorNotification('틀렸습니다. 다시 시도해주세요.');
    }
    return;
  }

  // 일반 키 처리
  if (!currentStep || key !== currentStep.key) {
    // 잘못된 키 입력 - 연속 성공 카운터 리셋
    consecutiveSuccess = 0;
    updateUI();
    showErrorNotification(`잘못된 키입니다. ${currentStep?.keyDisplay || ''} 키를 눌러주세요.`);
    return;
  }

  // 올바른 키 입력 - 매번 타이머 초기화 후 재시작
  startKeyTimeTimer();
  currentPressCount++;

  // 현재 단계 완료 체크
  if (currentPressCount >= (pressInfo?.total || 1)) {
    // 연달아 누르는 경우
    if (pressInfo?.isConsecutive) {
      currentInput += pressInfo.result;
      currentInputIndex += pressInfo.total;
    } else {
      // 일반적인 경우
      currentInput += pressInfo.result;
      currentInputIndex++;
    }

    // 단어 완료 체크
    const finalInputIndex = pressInfo?.isConsecutive ?
      currentInputIndex :
      currentInputIndex;

    if (finalInputIndex >= inputSequence.length) {
      // 단어 완료 - 타이머 확실히 종료
      if (keyTimeTimeout) {
        clearTimeout(keyTimeTimeout);
        keyTimeTimeout = null;
      }
      
      isCompleted = true;
      currentInput = currentWord;
      
      // 연속 성공 카운터 증가
      consecutiveSuccess++;
      
      // 레벨업 체크
      if (consecutiveSuccess >= 10) {
        if (currentLevel < 5) {
          // 레벨업
          currentLevel++;
          consecutiveSuccess = 0;
          currentKeyTime = keyTimeSettings[currentLevel] || 30000;
          showLevelUpNotification();
        } else {
          // 5레벨 완료 - 다음 단계 도전
          consecutiveSuccess = 0;
          showStageCompleteNotification();
        }
      } else {
        // 일반 성공
        showSuccessNotification('성공했습니다!');
      }
    } else {
      // 다음 단계로
      currentPressCount = 0;
    }
  } else {
    // 아직 같은 키를 더 눌러야 함 - 중간 결과 표시
    if (pressInfo?.isConsecutive && currentPressCount > 0) {
      // 연달아 누르는 경우 중간 결과 표시
      currentInput = currentStep?.result || '';
    }
  }

  updateUI();
}

// 성공 알림 표시
function showSuccessNotification(message) {
  const successMessageElement = document.getElementById('success-message');
  successMessageElement.textContent = message;
  successNotification.style.display = 'block';
  
  setTimeout(() => {
    successNotification.style.display = 'none';
    loadNewWord(); // 성공 알림이 사라지면 자동으로 다음 단어 로드
  }, 2000);
}

// 오류 알림 표시
function showErrorNotification(message) {
  const errorMessageElement = document.getElementById('error-message');
  errorMessageElement.textContent = message;
  errorNotification.style.display = 'block';
  
  setTimeout(() => {
    errorNotification.style.display = 'none';
  }, 1000);
}

// 레벨업 알림 표시
function showLevelUpNotification() {
  levelupNotification.style.display = 'block';
  
  setTimeout(() => {
    levelupNotification.style.display = 'none';
    loadNewWord();
  }, 2000);
}

// 단계 완료 알림 표시
function showStageCompleteNotification() {
  stageCompleteNotification.style.display = 'block';
}

// 다음 단계 도전
function onChallengeNextStage() {
  if (stepId < 5) {
    // 다음 단계로 이동
    window.location.href = `step${stepId + 1}.html`;
  }
}

// 다시 연습 (현재 단계 1레벨로 리셋)
function onRetryStage() {
  currentLevel = 1;
  consecutiveSuccess = 0;
  currentKeyTime = keyTimeSettings[currentLevel] || 30000;
  stageCompleteNotification.style.display = 'none';
  loadNewWord();
}

// 이벤트 리스너 등록
document.addEventListener('DOMContentLoaded', function() {
  // 초기 단어 로드
  loadNewWord();
  
  // 키보드 이벤트
  document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', function() {
      const keyValue = this.dataset.key;
      const action = this.dataset.action;
      onKeyClick(keyValue, action);
    });
  });
  
  // 컨트롤 버튼 이벤트
  document.getElementById('next-word').addEventListener('click', function() {
    loadNewWord();
  });
  
  document.getElementById('go-main').addEventListener('click', function() {
    window.location.href = 'index.html';
  });
  
  // 도전 버튼 이벤트
  const challengeBtn = document.getElementById('challenge-btn');
  if (challengeBtn) {
    challengeBtn.addEventListener('click', onChallengeNextStage);
  }
  
  const retryBtn = document.getElementById('retry-btn');
  if (retryBtn) {
    retryBtn.addEventListener('click', onRetryStage);
  }
  
  // 물리적 키보드 이벤트
  document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (key >= '0' && key <= '9') {
      onKeyClick(key);
    } else if (key === '*') {
      onKeyClick('*');
    } else if (key === '#') {
      onKeyClick('#');
    } else if (key === 'Backspace') {
      onKeyClick('', 'backspace');
    } else if (key === 'Enter') {
      onKeyClick('', 'enter');
    }
  });
  
});
