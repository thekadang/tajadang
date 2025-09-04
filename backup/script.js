// 천지인 키보드 매핑 - 단어별 정확한 입력 순서 (단순화)
const cheonjiinMapping = {
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
};

// 연습할 단어 목록
const practiceWords = [
    '사람', '아들', '며느리'
];

class CheonjiinKeyboard {
    constructor() {
        this.currentWord = '';
        this.currentCharIndex = 0;
        this.currentInputIndex = 0;
        this.inputSequence = [];
        this.userInput = '';
        this.isCompleted = false;
        this.score = 0;
        this.totalWords = 0;
        this.currentPressCount = 0;
        this.maxPressCount = 0;
        this.currentVowelStep = 0; // 모음 입력 단계 (0: 첫 번째, 1: 두 번째)
        this.completedChars = []; // 완성된 글자들을 저장
        this.currentCharSteps = []; // 현재 글자의 입력 단계들
        this.currentWordSteps = []; // 현재 단어의 단계별 표시를 위한 배열
        this.lastKeyTime = 0; // 마지막 키 입력 시간
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.loadNewWord();
        this.updateScore();
    }
    
    setupEventListeners() {
        // 키보드 키 클릭 이벤트
        document.querySelectorAll('.key').forEach(key => {
            key.addEventListener('click', (e) => {
                this.handleKeyClick(e.target.closest('.key'));
            });
        });
        
        // 컨트롤 버튼 이벤트
        document.getElementById('next-word').addEventListener('click', () => {
            this.loadNewWord();
        });
        
        document.getElementById('reset').addEventListener('click', () => {
            this.resetCurrentWord();
        });
        
        // 키보드 이벤트 (중복 방지)
        document.addEventListener('keydown', (e) => {
            // 기본 동작 방지 (페이지 스크롤 등)
            e.preventDefault();
            this.handleKeyboardEvent(e);
        });
    }
    
    handleKeyboardEvent(e) {
        if (this.isCompleted) return;
        
        const key = e.key;
        const code = e.code;
        const currentTime = Date.now();
        
        // 키 입력 간격 제한 (100ms 이내 중복 입력 방지)
        if (currentTime - this.lastKeyTime < 100) {
            console.log(`키 입력 간격 제한: "${key}"`);
            return;
        }
        this.lastKeyTime = currentTime;
        
        // 디버깅: 키 입력 로그 (3번 키 문제 해결을 위해 임시 활성화)
        console.log(`키 입력: "${key}", 코드: ${code}`);
        
        // 숫자 키 처리 (0-9) - 키보드 상단의 숫자 키
        if (key >= '0' && key <= '9') {
            console.log(`숫자 키 처리: ${key}`);
            this.handleNumberKey(key);
        }
        // 백스페이스
        else if (key === 'Backspace') {
            this.handleBackspace();
        }
        // 엔터
        else if (key === 'Enter') {
            this.handleEnter();
        }
        // 스페이스
        else if (key === ' ') {
            this.handleSpace();
        }
        // 직접 키 처리 (숫자 키 외의 키들)
        else if (key === '|' || key === '.' || key === '-' || 
                 key === 'ㄱ' || key === 'ㄴ' || key === 'ㄷ' || 
                 key === 'ㅂ' || key === 'ㅅ' || key === 'ㅈ' || key === 'ㅇ') {
            console.log(`직접 키 처리: "${key}"`);
            this.handleCharacterKey(key);
        }
        // 기타 키는 무시
        else {
            console.log(`무시된 키: "${key}", 코드: ${code}`);
        }
    }
    
    handleNumberKey(key) {
        const keyMap = {
            '1': '|',
            '2': '.',
            '3': '-',
            '4': 'ㄱ',
            '5': 'ㄴ',
            '6': 'ㄷ',
            '7': 'ㅂ',
            '8': 'ㅅ',
            '9': 'ㅈ',
            '0': 'ㅇ'
        };
        
        const mappedKey = keyMap[key];
        console.log(`숫자 키 ${key} -> ${mappedKey} 변환`);
        this.handleCharacterKey(mappedKey);
    }
    
    loadNewWord() {
        this.currentWord = practiceWords[Math.floor(Math.random() * practiceWords.length)];
        this.currentCharIndex = 0;
        this.currentInputIndex = 0;
        this.userInput = '';
        this.isCompleted = false;
        this.currentPressCount = 0;
        this.currentVowelStep = 0;
        this.completedChars = [];
        this.currentCharSteps = [];
        this.currentWordSteps = [];
        
        document.getElementById('current-word').textContent = this.currentWord;
        document.getElementById('input-text').textContent = '';
        
        // 입력 필드 포커스 효과 제거
        document.getElementById('input-text').classList.remove('completed', 'error');
        document.querySelector('.input-container').classList.remove('completed');
        
        this.setupInputSequence();
        this.updateHint();
        
        // 애니메이션 효과
        this.animateWordDisplay();
    }
    
    animateWordDisplay() {
        const wordElement = document.getElementById('current-word');
        wordElement.style.transform = 'scale(1.1)';
        wordElement.style.transition = 'transform 0.3s ease';
        
        setTimeout(() => {
            wordElement.style.transform = 'scale(1)';
        }, 300);
    }
    
    setupInputSequence() {
        this.inputSequence = cheonjiinMapping[this.currentWord] || [];
    }
    
    updateHint() {
        if (this.currentInputIndex < this.inputSequence.length) {
            const currentStep = this.inputSequence[this.currentInputIndex];
            
            // 상단 힌트 업데이트 - 자판 모습과 동일하게
            document.getElementById('hint-key').innerHTML = `
                <div class="hint-symbol">${currentStep.keyDisplay}</div>
                <div class="hint-number">${currentStep.number}</div>
            `;
            
            // 연달아 누르는 경우 자동 파악
            const pressInfo = this.getPressInfo(this.currentInputIndex);
            document.getElementById('hint-text').textContent = `${pressInfo.remaining}번 누르기`;
            
            // 타겟 키 하이라이트 업데이트
            this.updateTargetKey(currentStep, pressInfo);
            
            // 힌트 애니메이션
            this.animateHint();
        }
    }
    
    getPressInfo(currentIndex) {
        const currentStep = this.inputSequence[currentIndex];
        
        // 현재 number와 같은 number가 연속으로 몇 개 있는지 확인
        let consecutiveCount = 1;
        for (let i = currentIndex + 1; i < this.inputSequence.length; i++) {
            if (this.inputSequence[i].number === currentStep.number) {
                consecutiveCount++;
            } else {
                break;
            }
        }
        
        if (consecutiveCount > 1) {
            // 연달아 누르는 경우
            return {
                total: consecutiveCount,
                remaining: consecutiveCount - this.currentPressCount,
                isConsecutive: true
            };
        } else {
            // 일반적인 경우 (1번 누르기)
            return {
                total: 1,
                remaining: 1,
                isConsecutive: false
            };
        }
    }
    
    updateTargetKey(currentStep, pressInfo) {
        // 모든 키에서 타겟 클래스 제거
        document.querySelectorAll('.key').forEach(key => {
            key.classList.remove('target', 'press-1', 'press-2', 'press-3', 'pressed-1', 'pressed-2');
        });
        
        // 힌트 아이콘에서도 클래스 제거
        const hintIcon = document.getElementById('hint-key');
        if (hintIcon) {
            hintIcon.classList.remove('press-1', 'press-2', 'press-3');
        }
        
        // 해당하는 키에 타겟 클래스 추가
        const targetKey = document.querySelector(`[data-key="${currentStep.key}"]`);
        if (targetKey) {
            targetKey.classList.add('target');
            
            // 연달아 누르는 경우에 따라 다른 클래스 추가
            if (pressInfo.isConsecutive) {
                if (pressInfo.remaining === 2) {
                    targetKey.classList.add('press-2'); // 첫 번째 입력 - 주황색
                    hintIcon.classList.add('press-2'); // 힌트 아이콘도 주황색
                } else {
                    targetKey.classList.add('press-1'); // 두 번째 입력 - 파란색
                    hintIcon.classList.add('press-1'); // 힌트 아이콘도 파란색
                }
            } else {
                targetKey.classList.add('press-1'); // 1번 누르기 - 파란색
                hintIcon.classList.add('press-1'); // 힌트 아이콘도 파란색
            }
        }
    }
    
    animateHint() {
        const hintIcon = document.getElementById('hint-key');
        hintIcon.style.transform = 'scale(1.1)';
        hintIcon.style.transition = 'transform 0.2s ease';
        
        setTimeout(() => {
            hintIcon.style.transform = 'scale(1)';
        }, 200);
    }
    
    handleKeyClick(keyElement) {
        if (this.isCompleted) return;
        
        const action = keyElement.dataset.action;
        const key = keyElement.dataset.key;
        
        if (action === 'backspace') {
            this.handleBackspace();
        } else if (action === 'enter') {
            this.handleEnter();
        } else {
            this.handleCharacterKey(key);
        }
        
        // 키 하이라이트 효과
        this.animateKeyPress(keyElement);
    }
    
    animateKeyPress(keyElement) {
        keyElement.classList.add('highlight');
        setTimeout(() => {
            keyElement.classList.remove('highlight');
        }, 200);
    }
    
    handleCharacterKey(key) {
        console.log(`handleCharacterKey 호출: key="${key}", currentInputIndex=${this.currentInputIndex}, isProcessingKey=${this.isProcessingKey}`);
        
        if (this.currentInputIndex < this.inputSequence.length) {
            const currentStep = this.inputSequence[this.currentInputIndex];
            console.log(`현재 단계: key="${currentStep.key}", number=${currentStep.number}`);
            
            if (key === currentStep.key) {
                this.currentPressCount++;
                
                // 성공 효과
                this.showSuccessEffect();
                
                // 모든 입력을 개별적으로 처리 (pressCount는 항상 1)
                
                // 연달아 누르는 경우 자동 파악
                const pressInfo = this.getPressInfo(this.currentInputIndex);
                
                // 현재 단계 완료 체크
                if (this.currentPressCount >= pressInfo.total) {
                    // 연달아 누르는 경우 처리
                    if (pressInfo.isConsecutive) {
                        // 연달아 누르는 경우 - 모든 연속된 단계를 한 번에 처리
                        for (let i = 0; i < pressInfo.total; i++) {
                            const stepIndex = this.currentInputIndex + i;
                            if (stepIndex < this.inputSequence.length) {
                                const step = this.inputSequence[stepIndex];
                                this.currentCharSteps.push(step.result);
                            }
                        }
                        this.updateDisplay();
                        this.currentInputIndex += pressInfo.total; // 연속된 단계만큼 증가
                        this.currentPressCount = 0;
                        
                        
                        // 천지인 방식의 실시간 조합 표시
                        this.showRealTimeCombination();
                        
                        // 현재 글자가 완성되었는지 확인
                        this.checkCharCompletion();
                        
                        if (this.currentInputIndex >= this.inputSequence.length) {
                            this.completeWord();
                        } else {
                            this.updateHint();
                        }
                    } else {
                        // 일반적인 경우 (1번 누르기)
                        this.currentCharSteps.push(currentStep.result);
                        this.updateDisplay();
                        this.currentInputIndex++;
                        this.currentPressCount = 0;
                        
                        
                        // 천지인 방식의 실시간 조합 표시
                        this.showRealTimeCombination();
                        
                        // 현재 글자가 완성되었는지 확인
                        this.checkCharCompletion();
                        
                        if (this.currentInputIndex >= this.inputSequence.length) {
                            this.completeWord();
                        } else {
                            this.updateHint();
                        }
                    }
                } else {
                    // 아직 같은 키를 더 눌러야 함 - 중간 결과 표시
                    if (pressInfo.isConsecutive && this.currentPressCount > 0) {
                        // 연달아 누르는 경우 중간 결과 표시
                        const currentStep = this.inputSequence[this.currentInputIndex];
                        const intermediateResult = currentStep.result;
                        
                        // 현재 단계의 결과만 표시 (이전 결과와 합치지 않음)
                        document.getElementById('input-text').textContent = intermediateResult;
                    }
                    this.updateHint();
                }
            } else {
                // 오류 처리 - 잘못된 키와 올바른 키 정보 전달
                console.log(`오타 발생: 입력된 키="${key}", 올바른 키="${currentStep.key}", currentInputIndex=${this.currentInputIndex}`);
                this.showError(key, currentStep.key);
                
                // 오타 발생 시 상태 안전하게 초기화
                this.currentPressCount = 0;
                return; // 오타 발생 시 더 이상 처리하지 않음
            }
        }
    }
    
    updateDisplay() {
        // 천지인 방식의 실시간 조합 표시
        const currentCombined = this.combineCurrentSteps();
        document.getElementById('input-text').textContent = currentCombined;
        
        // 단계별 표시 업데이트
        this.updateStepDisplay();
    }
    
    combineCurrentSteps() {
        // 천지인 매핑과 직접 매칭하여 현재 단계의 조합 표시
        const mapping = cheonjiinMapping[this.currentWord];
        if (!mapping) return '';
        
        // 현재까지 입력된 단계의 result 반환
        if (this.currentInputIndex > 0 && mapping[this.currentInputIndex - 1]) {
            return mapping[this.currentInputIndex - 1].result;
        }
        
        return '';
    }
    
    
    
    updateStepDisplay() {
        // 단계별 표시를 콘솔에 출력 (디버깅용)
        const currentText = document.getElementById('input-text').textContent;
        if (currentText.length > 0) {
            console.log('현재 단계별 표시:', currentText);
            
            // 아들, 사람 등의 단어별 단계별 표시 예시
            if (this.currentWord === '아들') {
                this.showAdulSteps(currentText);
            } else if (this.currentWord === '사람') {
                this.showSaramSteps(currentText);
            }
        }
    }
    
    showAdulSteps(currentText) {
        // 아들 단어의 단계별 표시 (0-1-2-6-3-5-5)
        console.log(`아들 단계: ${currentText}`);
    }
    
    showSaramSteps(currentText) {
        // 사람 단어의 단계별 표시 (8-1-2-5-5-1-2-0-0)
        console.log(`사람 단계: ${currentText}`);
    }
    
    
    showRealTimeCombination() {
        // 조합 과정 애니메이션만 실행 (현재/다음 표시 제거)
        this.animateCombinationProcess();
    }
    
    
    
    
    animateCombinationProcess() {
        // 조합 과정 애니메이션
        const inputField = document.getElementById('input-text');
        inputField.style.transform = 'scale(1.05)';
        inputField.style.transition = 'transform 0.2s ease';
        
        setTimeout(() => {
            inputField.style.transform = 'scale(1)';
        }, 200);
    }
    
    checkCharCompletion() {
        // 단계별 조합 과정에서는 글자 완성을 별도로 처리하지 않음
        // 실시간 조합 과정이 이미 정의되어 있으므로 단순히 표시만 업데이트
        this.updateDisplay();
    }
    
    showCharCompletionMessage(char) {
        // 글자 완성 메시지 표시
        let message = '';
        if (this.currentWord === '아들') {
            if (char === '아') message = '아! 첫 번째 글자 완성!';
            else if (char === '들') message = '들! 두 번째 글자 완성!';
        } else if (this.currentWord === '사람') {
            if (char === '사') message = '사! 첫 번째 글자 완성!';
            else if (char === '람') message = '람! 두 번째 글자 완성!';
        }
        
        if (message) {
            this.showToastMessage(message, '#ff6b6b');
        }
    }
    
    combineHangul(charSteps) {
        // 자음과 모음을 합쳐서 한글 글자로 만드는 함수
        if (charSteps.length === 0) return '';
        
        // 단일 자음인 경우
        if (charSteps.length === 1) {
            return charSteps[0];
        }
        
        // 자음 + 모음인 경우
        if (charSteps.length === 2) {
            const consonant = charSteps[0];
            const vowel = charSteps[1];
            return this.combineConsonantVowel(consonant, vowel);
        }
        
        // 자음 + 모음 + 받침인 경우
        if (charSteps.length === 3) {
            const consonant = charSteps[0];
            const vowel = charSteps[1];
            const final = charSteps[2];
            return this.combineConsonantVowelFinal(consonant, vowel, final);
        }
        
        return charSteps.join('');
    }
    
    combineConsonantVowel(consonant, vowel) {
        // 자음과 모음을 합쳐서 한글 글자로 만드는 매핑
        const hangulMap = {
            // ㅇ + 모음
            'ㅇㅏ': '아', 'ㅇㅓ': '어', 'ㅇㅗ': '오', 'ㅇㅜ': '우', 'ㅇㅡ': '으', 'ㅇㅣ': '이',
            // ㄱ + 모음
            'ㄱㅏ': '가', 'ㄱㅓ': '거', 'ㄱㅗ': '고', 'ㄱㅜ': '구', 'ㄱㅡ': '그', 'ㄱㅣ': '기',
            // ㄴ + 모음
            'ㄴㅏ': '나', 'ㄴㅓ': '너', 'ㄴㅗ': '노', 'ㄴㅜ': '누', 'ㄴㅡ': '느', 'ㄴㅣ': '니',
            // ㄷ + 모음
            'ㄷㅏ': '다', 'ㄷㅓ': '더', 'ㄷㅗ': '도', 'ㄷㅜ': '두', 'ㄷㅡ': '드', 'ㄷㅣ': '디',
            // ㄹ + 모음
            'ㄹㅏ': '라', 'ㄹㅓ': '러', 'ㄹㅗ': '로', 'ㄹㅜ': '루', 'ㄹㅡ': '르', 'ㄹㅣ': '리',
            // ㅁ + 모음
            'ㅁㅏ': '마', 'ㅁㅓ': '머', 'ㅁㅗ': '모', 'ㅁㅜ': '무', 'ㅁㅡ': '므', 'ㅁㅣ': '미',
            // ㅂ + 모음
            'ㅂㅏ': '바', 'ㅂㅓ': '버', 'ㅂㅗ': '보', 'ㅂㅜ': '부', 'ㅂㅡ': '브', 'ㅂㅣ': '비',
            // ㅅ + 모음
            'ㅅㅏ': '사', 'ㅅㅓ': '서', 'ㅅㅗ': '소', 'ㅅㅜ': '수', 'ㅅㅡ': '스', 'ㅅㅣ': '시',
            // ㅈ + 모음
            'ㅈㅏ': '자', 'ㅈㅓ': '저', 'ㅈㅗ': '조', 'ㅈㅜ': '주', 'ㅈㅡ': '즈', 'ㅈㅣ': '지',
            // ㅊ + 모음
            'ㅊㅏ': '차', 'ㅊㅓ': '처', 'ㅊㅗ': '초', 'ㅊㅜ': '추', 'ㅊㅡ': '츠', 'ㅊㅣ': '치',
            // ㅋ + 모음
            'ㅋㅏ': '카', 'ㅋㅓ': '커', 'ㅋㅗ': '코', 'ㅋㅜ': '쿠', 'ㅋㅡ': '크', 'ㅋㅣ': '키',
            // ㅌ + 모음
            'ㅌㅏ': '타', 'ㅌㅓ': '터', 'ㅌㅗ': '토', 'ㅌㅜ': '투', 'ㅌㅡ': '트', 'ㅌㅣ': '티',
            // ㅍ + 모음
            'ㅍㅏ': '파', 'ㅍㅓ': '퍼', 'ㅍㅗ': '포', 'ㅍㅜ': '푸', 'ㅍㅡ': '프', 'ㅍㅣ': '피',
            // ㅎ + 모음
            'ㅎㅏ': '하', 'ㅎㅓ': '허', 'ㅎㅗ': '호', 'ㅎㅜ': '후', 'ㅎㅡ': '흐', 'ㅎㅣ': '히'
        };
        
        const key = consonant + vowel;
        return hangulMap[key] || (consonant + vowel);
    }
    
    combineConsonantVowelFinal(consonant, vowel, final) {
        // 자음 + 모음 + 받침을 합쳐서 한글 글자로 만드는 매핑
        const hangulMap = {
            // ㄱ + ㅏ + 받침
            'ㄱㅏㄴ': '간', 'ㄱㅏㄹ': '갈', 'ㄱㅏㅁ': '감', 'ㄱㅏㅂ': '갑', 'ㄱㅏㅅ': '갓',
            // ㄴ + ㅏ + 받침
            'ㄴㅏㄴ': '난', 'ㄴㅏㄹ': '날', 'ㄴㅏㅁ': '남', 'ㄴㅏㅂ': '납', 'ㄴㅏㅅ': '낫',
            // ㄷ + ㅏ + 받침
            'ㄷㅏㄴ': '단', 'ㄷㅏㄹ': '달', 'ㄷㅏㅁ': '담', 'ㄷㅏㅂ': '답', 'ㄷㅏㅅ': '닷',
            // ㄹ + ㅏ + 받침
            'ㄹㅏㄴ': '란', 'ㄹㅏㄹ': '랄', 'ㄹㅏㅁ': '람', 'ㄹㅏㅂ': '랍', 'ㄹㅏㅅ': '랏',
            // ㅁ + ㅏ + 받침
            'ㅁㅏㄴ': '만', 'ㅁㅏㄹ': '말', 'ㅁㅏㅁ': '맘', 'ㅁㅏㅂ': '맙', 'ㅁㅏㅅ': '맛',
            // ㅂ + ㅏ + 받침
            'ㅂㅏㄴ': '반', 'ㅂㅏㄹ': '발', 'ㅂㅏㅁ': '밤', 'ㅂㅏㅂ': '밥', 'ㅂㅏㅅ': '밧',
            // ㅅ + ㅏ + 받침
            'ㅅㅏㄴ': '산', 'ㅅㅏㄹ': '살', 'ㅅㅏㅁ': '삼', 'ㅅㅏㅂ': '삽', 'ㅅㅏㅅ': '삿',
            // ㅇ + ㅏ + 받침
            'ㅇㅏㄴ': '안', 'ㅇㅏㄹ': '알', 'ㅇㅏㅁ': '암', 'ㅇㅏㅂ': '압', 'ㅇㅏㅅ': '앗',
            // ㅈ + ㅏ + 받침
            'ㅈㅏㄴ': '잔', 'ㅈㅏㄹ': '잘', 'ㅈㅏㅁ': '잠', 'ㅈㅏㅂ': '잡', 'ㅈㅏㅅ': '잣',
            // ㅊ + ㅏ + 받침
            'ㅊㅏㄴ': '찬', 'ㅊㅏㄹ': '찰', 'ㅊㅏㅁ': '참', 'ㅊㅏㅂ': '찹', 'ㅊㅏㅅ': '찻',
            // ㅋ + ㅏ + 받침
            'ㅋㅏㄴ': '칸', 'ㅋㅏㄹ': '칼', 'ㅋㅏㅁ': '캄', 'ㅋㅏㅂ': '캅', 'ㅋㅏㅅ': '캇',
            // ㅌ + ㅏ + 받침
            'ㅌㅏㄴ': '탄', 'ㅌㅏㄹ': '탈', 'ㅌㅏㅁ': '탐', 'ㅌㅏㅂ': '탑', 'ㅌㅏㅅ': '탓',
            // ㅍ + ㅏ + 받침
            'ㅍㅏㄴ': '판', 'ㅍㅏㄹ': '팔', 'ㅍㅏㅁ': '팜', 'ㅍㅏㅂ': '팝', 'ㅍㅏㅅ': '팟',
            // ㅎ + ㅏ + 받침
            'ㅎㅏㄴ': '한', 'ㅎㅏㄹ': '할', 'ㅎㅏㅁ': '함', 'ㅎㅏㅂ': '합', 'ㅎㅏㅅ': '핫',
            // ㅇ + ㅡ + 받침 (아들 관련)
            'ㅇㅡㄴ': '은', 'ㅇㅡㄹ': '을', 'ㅇㅡㅁ': '음', 'ㅇㅡㅂ': '읍', 'ㅇㅡㅅ': '읏',
            // ㄷ + ㅡ + 받침 (아들 관련)
            'ㄷㅡㄴ': '든', 'ㄷㅡㄹ': '들', 'ㄷㅡㅁ': '듬', 'ㄷㅡㅂ': '듭', 'ㄷㅡㅅ': '듯'
        };
        
        const key = consonant + vowel + final;
        return hangulMap[key] || (consonant + vowel + final);
    }
    
    showCharCompletionEffect() {
        const inputField = document.getElementById('input-text');
        inputField.style.color = '#27ae60';
        inputField.style.fontWeight = 'bold';
        
        setTimeout(() => {
            inputField.style.color = '#667eea';
            inputField.style.fontWeight = 'normal';
        }, 500);
    }
    
    
    
    showSuccessEffect() {
        const inputField = document.getElementById('input-text');
        inputField.style.color = '#27ae60';
        inputField.style.fontWeight = 'bold';
        
        setTimeout(() => {
            inputField.style.color = '#667eea';
        }, 300);
    }
    
    handleBackspace() {
        if (this.isCompleted) return;
        
        // 현재 입력 중인 단계가 있는지 확인 (연속 입력 중)
        if (this.currentPressCount > 0) {
            // 현재 단계의 입력을 취소하고 이전 상태로 되돌리기
            this.currentPressCount = 0;
            this.updateDisplay();
            this.updateHint();
            this.showBackspaceFeedback();
            return;
        }
        
        // 완성된 단계가 있는지 확인
        if (this.currentInputIndex > 0) {
            // 마지막 완성된 단계를 되돌리기
            this.currentInputIndex--;
            this.currentPressCount = 0;
            
            // 현재까지의 결과를 다시 계산하여 표시
            this.updateDisplay();
            this.updateHint();
            
            // 백스페이스 피드백
            this.showBackspaceFeedback();
        } else {
            // 더 이상 되돌릴 단계가 없음
            this.showBackspaceFeedback();
        }
    }
    
    showBackspaceFeedback() {
        const inputField = document.getElementById('input-text');
        
        // 백스페이스 시각적 피드백
        inputField.style.color = '#f39c12';
        inputField.style.backgroundColor = 'rgba(243, 156, 18, 0.1)';
        inputField.style.borderRadius = '5px';
        inputField.style.padding = '2px 4px';
        inputField.style.fontWeight = 'bold';
        
        setTimeout(() => {
            inputField.style.color = '#667eea';
            inputField.style.backgroundColor = 'transparent';
            inputField.style.borderRadius = '0';
            inputField.style.padding = '0';
            inputField.style.fontWeight = 'bold';
        }, 500);
    }
    
    handleEnter() {
        this.completeWord();
    }
    
    handleSpace() {
        this.handleCharacterKey('|');
    }
    
    completeWord() {
        this.isCompleted = true;
        this.score++;
        this.totalWords++;
        
        document.getElementById('input-text').textContent = this.currentWord;
        document.getElementById('input-text').classList.add('completed');
        
        // 인풋 컨테이너에 completed 클래스 추가 (테두리 반짝임 효과용)
        document.querySelector('.input-container').classList.add('completed');
        
        // 타겟 키 하이라이트 제거
        document.querySelectorAll('.key').forEach(key => {
            key.classList.remove('target');
        });
        
        // 성공 알림창 표시
        this.showSuccessNotification();
        
        // 완료 애니메이션
        this.animateCompletion();
        
        
        this.updateScore();
    }
    
    showSuccessNotification() {
        const notification = document.getElementById('success-notification');
        const emojis = ['🎉', '✨', '🌟', '💫', '🎊', '🏆', '👏', '🎯'];
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        
        // 이모지 업데이트
        notification.querySelector('.emoji').textContent = randomEmoji;
        
        // 알림창 표시
        notification.classList.add('show', 'animate');
        
        // 3초 후 자동으로 숨기기
        setTimeout(() => {
            notification.classList.remove('show', 'animate');
        }, 3000);
    }
    
    animateCompletion() {
        const wordElement = document.getElementById('current-word');
        const inputElement = document.getElementById('input-text');
        
        wordElement.style.transform = 'scale(1.05)';
        wordElement.style.color = '#27ae60';
        
        inputElement.style.transform = 'scale(1.02)';
        
        setTimeout(() => {
            wordElement.style.transform = 'scale(1)';
            wordElement.style.color = '#667eea';
            inputElement.style.transform = 'scale(1)';
        }, 1000);
    }
    
    
    showError(wrongKey, correctKey) {
        const inputField = document.getElementById('input-text');
        inputField.classList.add('error');
        
        // 오타 알림창 표시
        this.showErrorNotification(wrongKey, correctKey);
        
        // 오타 발생 시 상태 완전 초기화 (중요!)
        this.currentPressCount = 0;
        
        // 오류 사운드 효과 (선택사항)
        // this.playErrorSound();
        
        setTimeout(() => {
            inputField.classList.remove('error');
        }, 1000);
    }
    
    showErrorNotification(wrongKey, correctKey) {
        const notification = document.getElementById('error-notification');
        const hintIcon = document.getElementById('hint-key');
        const emojis = ['❌', '⚠️', '🚫', '💥', '🔥', '⚡'];
        const messages = [
            '잘못된 키입니다!',
            '틀렸습니다!',
            '오타 발생!',
            '실수했어요!',
            '다시 시도하세요!',
            '주의하세요!'
        ];
        
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        // 현재 단계 정보 가져오기
        const currentStep = this.inputSequence[this.currentInputIndex];
        const correctKeyDisplay = currentStep ? currentStep.keyDisplay : correctKey;
        const correctKeyNumber = currentStep ? currentStep.number : '';
        
        // 힌트키 버튼 모양 생성 (실제 hint-key 구조 복사, 크기 확대)
        const hintButtonHTML = `
            <div style="display: inline-block; margin: 0 12px; vertical-align: middle;">
                <div class="hint-icon" style="
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    width: 70px;
                    height: 70px;
                    border-radius: 16px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
                    border: 3px solid #fff;
                ">
                    <div class="hint-symbol" style="font-size: 22px; font-weight: bold; line-height: 1;">${correctKeyDisplay}</div>
                    <div class="hint-number" style="font-size: 16px; opacity: 0.8; line-height: 1;">${correctKeyNumber}</div>
                </div>
            </div>
        `;
        
        // 메시지 업데이트
        notification.innerHTML = `
            <div class="emoji">${randomEmoji}</div>
            <div class="message">${randomMessage}</div>
            <div class="hint">${hintButtonHTML}이 키를 눌러주세요!</div>
        `;
        
        // 힌트 키와 실제 키보드 키 하이라이트 시작
        hintIcon.classList.add('error-highlight');
        
        // 실제 키보드의 해당 키도 하이라이트
        const targetKey = document.querySelector(`[data-key="${correctKey}"]`);
        if (targetKey) {
            targetKey.classList.add('error-highlight');
        }
        
        // 클릭 이벤트 추가 (알림창 클릭 시 숨기기)
        const clickHandler = () => {
            notification.classList.remove('show', 'animate');
            hintIcon.classList.remove('error-highlight');
            if (targetKey) {
                targetKey.classList.remove('error-highlight');
            }
            notification.removeEventListener('click', clickHandler);
        };
        notification.addEventListener('click', clickHandler);
        
        // 알림창 표시
        notification.classList.add('show', 'animate');
        
        // 3초 후 자동으로 숨기기
        setTimeout(() => {
            notification.classList.remove('show', 'animate');
            hintIcon.classList.remove('error-highlight');
            if (targetKey) {
                targetKey.classList.remove('error-highlight');
            }
            notification.removeEventListener('click', clickHandler);
        }, 3000);
    }
    
    resetCurrentWord() {
        this.currentInputIndex = 0;
        this.userInput = '';
        this.isCompleted = false;
        this.currentPressCount = 0;
        this.currentVowelStep = 0;
        this.completedChars = [];
        this.currentCharSteps = [];
        this.lastKeyTime = 0; // 키 입력 시간 초기화
        
        document.getElementById('input-text').textContent = '';
        document.getElementById('input-text').classList.remove('completed', 'error');
        document.querySelector('.input-container').classList.remove('completed');
        
        // 알림창들 숨기기
        const successNotification = document.getElementById('success-notification');
        const errorNotification = document.getElementById('error-notification');
        const hintIcon = document.getElementById('hint-key');
        successNotification.classList.remove('show', 'animate');
        errorNotification.classList.remove('show', 'animate');
        hintIcon.classList.remove('error-highlight');
        
        // 모든 키보드 키의 오타 하이라이트 제거
        document.querySelectorAll('.key.error-highlight').forEach(key => {
            key.classList.remove('error-highlight');
        });
        
        this.updateHint();
    }
    
    updateScore() {
        // 점수 표시가 필요한 경우 여기에 구현
        console.log(`점수: ${this.score}/${this.totalWords}`);
    }
}

// CSS 애니메이션 추가
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from { transform: translateX(-50%) translateY(-100%); opacity: 0; }
        to { transform: translateX(-50%) translateY(0); opacity: 1; }
    }
    
    @keyframes slideUp {
        from { transform: translateX(-50%) translateY(0); opacity: 1; }
        to { transform: translateX(-50%) translateY(-100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// 페이지 로드 시 키보드 초기화
document.addEventListener('DOMContentLoaded', () => {
    new CheonjiinKeyboard();
}); 