import { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { useStepData } from './useStepData';

export const useCheonjiinKeyboard = (stepId: number = 4) => {
  const stepDataHook = useStepData(stepId);
  const cheonjiinMapping = stepDataHook.mapping;
  const practiceWords = stepDataHook.currentWords;
  const [currentWord, setCurrentWord] = useState('');
  const [currentInput, setCurrentInput] = useState('');
  const [currentInputIndex, setCurrentInputIndex] = useState(0);
  const [currentPressCount, setCurrentPressCount] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [showErrorNotification, setShowErrorNotification] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  // useStepData의 레벨을 사용
  const currentLevel = stepDataHook.currentLevel;
  const setCurrentLevel = stepDataHook.setCurrentLevel;
  
  // 게임 진행 상태
  const [consecutiveSuccess, setConsecutiveSuccess] = useState(0);
  const [showLevelUpNotification, setShowLevelUpNotification] = useState(false);
  const [showStageCompleteNotification, setShowStageCompleteNotification] = useState(false);
  const keyTimeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 레벨별 키 타임 설정 (밀리초)
  const keyTimeSettings = {
    1: 30000, // 30초
    2: 15000, // 15초
    3: 10000, // 10초
    4: 5000,  // 5초
    5: 1000   // 1초
  };

  // 현재 키 타임
  const currentKeyTime = keyTimeSettings[currentLevel as keyof typeof keyTimeSettings] || 30000;

  // 레벨이 변경될 때 타이머 업데이트
  useEffect(() => {
    // 현재 타이머가 실행 중이면 새로운 키타임으로 재시작
    if (keyTimeTimeoutRef.current) {
      clearTimeout(keyTimeTimeoutRef.current);
      keyTimeTimeoutRef.current = setTimeout(() => {
        setCurrentInputIndex(0);
        setCurrentPressCount(0);
        setCurrentInput('');
        setConsecutiveSuccess(0);
        setShowErrorNotification(true);
        setErrorMessage('시간이 다 되었어요. 다시 해보세요!');
        setTimeout(() => {
          setShowErrorNotification(false);
        }, 2000); // 시간 초과는 2초 표시
      }, currentKeyTime);
    }
  }, [currentLevel, currentKeyTime]);

  // 현재 입력 시퀀스
  const inputSequence = useMemo(() => {
    return cheonjiinMapping[currentWord as keyof typeof cheonjiinMapping] || [];
  }, [currentWord, cheonjiinMapping]);

  // 현재 단계 정보
  const currentStep = useMemo(() => {
    return inputSequence[currentInputIndex] || null;
  }, [inputSequence, currentInputIndex]);

  // 타겟 키
  const targetKey = useMemo(() => {
    return currentStep?.key || null;
  }, [currentStep]);

  // 눌러야 하는 횟수 정보
  const pressInfo = useMemo(() => {
    if (!currentStep) return null;

    // 현재 number와 같은 number가 연속으로 몇 개 있는지 확인
    let consecutiveCount = 1;
    for (let i = currentInputIndex + 1; i < inputSequence.length; i++) {
      if (inputSequence[i].number === currentStep.number) {
        consecutiveCount++;
      } else {
        break;
      }
    }

    if (consecutiveCount > 1) {
      // 연달아 누르는 경우
      return {
        total: consecutiveCount,
        remaining: consecutiveCount - currentPressCount,
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
  }, [currentStep, currentInputIndex, inputSequence, currentPressCount]);

  // 키 타임 타이머 시작 (키 입력 시마다)
  const startKeyTimeTimer = useCallback(() => {
    // 기존 타이머 확실히 클리어
    if (keyTimeTimeoutRef.current) {
      clearTimeout(keyTimeTimeoutRef.current);
      keyTimeTimeoutRef.current = null;
    }
    
    // 새 타이머 시작
    keyTimeTimeoutRef.current = setTimeout(() => {
      // 키 타임 초과 시 입력 초기화 및 연속 성공 카운터 리셋
      setCurrentInputIndex(0);
      setCurrentPressCount(0);
      setCurrentInput('');
      setConsecutiveSuccess(0);
      setShowErrorNotification(true);
      setErrorMessage('시간이 다 되었어요. 다시 해보세요!');
      setTimeout(() => {
        setShowErrorNotification(false);
      }, 2000); // 시간 초과는 2초 표시
    }, currentKeyTime);
  }, [currentKeyTime]);

  // 새 단어 로드
  const loadNewWord = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * practiceWords.length);
    const newWord = practiceWords[randomIndex];
    setCurrentWord(newWord);
    setCurrentInput('');
    setCurrentInputIndex(0);
    setCurrentPressCount(0);
    setIsCompleted(false);
    setShowSuccessNotification(false);
    setShowErrorNotification(false);
    
    // 기존 타이머 확실히 클리어 (새 단어 시작 시)
    if (keyTimeTimeoutRef.current) {
      clearTimeout(keyTimeTimeoutRef.current);
      keyTimeTimeoutRef.current = null;
    }
  }, [practiceWords]);

  // 키 클릭 핸들러 (원본 로직과 동일하게)
  const onKeyClick = useCallback((key: string, action?: string) => {
    if (isCompleted) return;

    if (action === 'backspace') {
      // 백스페이스 처리
      if (currentInputIndex > 0) {
        setCurrentInputIndex(prev => prev - 1);
        setCurrentPressCount(0);
        // 백스페이스 시 이전 단계의 결과로 되돌리기
        const prevIndex = currentInputIndex - 1;
        if (prevIndex >= 0 && inputSequence[prevIndex]) {
          setCurrentInput(inputSequence[prevIndex].result);
        } else {
          setCurrentInput('');
        }
      }
      return;
    }

    if (action === 'enter') {
      // 엔터 처리
      if (isCompleted) {
        loadNewWord();
      }
      return;
    }

    // 일반 키 처리
    if (!currentStep || key !== currentStep.key) {
      // 잘못된 키 입력 - 연속 성공 카운터 리셋
      setConsecutiveSuccess(0);
      setShowErrorNotification(true);
      setErrorMessage(`다른 키예요. ${currentStep?.keyDisplay || currentStep?.key} 키를 눌러보세요!`);
      setTimeout(() => {
        setShowErrorNotification(false);
      }, 2500);
      return;
    }

    // 올바른 키 입력 - 매번 타이머 초기화 후 재시작
    startKeyTimeTimer();
    const newPressCount = currentPressCount + 1;
    setCurrentPressCount(newPressCount);

    // 현재 단계 완료 체크
    if (newPressCount >= (pressInfo?.total || 1)) {
      // 연달아 누르는 경우 처리
      if (pressInfo?.isConsecutive) {
        // 연달아 누르는 경우 - 모든 연속된 단계를 한 번에 처리
        setCurrentInputIndex(prev => prev + (pressInfo?.total || 1));
        setCurrentPressCount(0);
        
        // 연속된 단계의 마지막 결과 표시
        const finalStepIndex = currentInputIndex + (pressInfo?.total || 1) - 1;
        if (finalStepIndex < inputSequence.length) {
          setCurrentInput(inputSequence[finalStepIndex].result);
        }
      } else {
        // 일반적인 경우 (1번 누르기)
        setCurrentInputIndex(prev => prev + 1);
        setCurrentPressCount(0);
        
        // 현재 단계의 결과 표시
        setCurrentInput(currentStep?.result || '');
      }

      // 단어 완료 체크
      const finalInputIndex = pressInfo?.isConsecutive ?
        currentInputIndex + (pressInfo?.total || 1) :
        currentInputIndex + 1;

      if (finalInputIndex >= inputSequence.length) {
        // 단어 완료 - 타이머 확실히 종료
        if (keyTimeTimeoutRef.current) {
          clearTimeout(keyTimeTimeoutRef.current);
          keyTimeTimeoutRef.current = null;
        }
        
        setIsCompleted(true);
        setCurrentInput(currentWord);
        
        // 연속 성공 카운터 증가
        const newConsecutiveSuccess = consecutiveSuccess + 1;
        setConsecutiveSuccess(newConsecutiveSuccess);
        
        // 레벨업 체크
        if (newConsecutiveSuccess >= 10) {
          if (currentLevel < stepDataHook.levelCount) {
            // 레벨업
            setCurrentLevel(currentLevel + 1);
            setConsecutiveSuccess(0);
            setShowLevelUpNotification(true);
            setSuccessMessage('레벨업\n좀더 높은 수준으로 갈께요');
        } else {
          // 5레벨 완료 - 다음 단계 도전 (자동으로 사라지지 않음)
          setConsecutiveSuccess(0);
          setShowStageCompleteNotification(true);
          setSuccessMessage('축하합니다.\n다음 단계에 도전하세요.');
          // 단계 완료는 자동으로 사라지지 않음 - 사용자가 버튼을 클릭해야 함
          return; // setTimeout 실행하지 않음
        }
      } else {
        // 일반 성공
        setShowSuccessNotification(true);
        setSuccessMessage('성공했습니다!');
      }

      // 일반 성공과 레벨업은 자동으로 알림 숨김
      setTimeout(() => {
        setShowSuccessNotification(false);
        setShowLevelUpNotification(false);
        loadNewWord(); // 성공 알림이 사라지면 자동으로 다음 단어 로드
      }, 1500);
      }
    } else {
      // 아직 같은 키를 더 눌러야 함 - 중간 결과 표시
      if (pressInfo?.isConsecutive && newPressCount > 0) {
        // 연달아 누르는 경우 현재까지의 중간 결과 표시
        const currentStepIndex = currentInputIndex + newPressCount - 1;
        if (currentStepIndex >= 0 && currentStepIndex < inputSequence.length) {
          const intermediateResult = inputSequence[currentStepIndex]?.result || '';
          setCurrentInput(intermediateResult);
        }
      }
    }
  }, [currentStep, currentPressCount, pressInfo, currentInputIndex, inputSequence, isCompleted, currentWord, loadNewWord, consecutiveSuccess, currentLevel, startKeyTimeTimer, setCurrentLevel, stepDataHook.levelCount]);

  // 다음 단어
  const onNextWord = useCallback(() => {
    loadNewWord();
  }, [loadNewWord]);

  // 리셋
  const onReset = useCallback(() => {
    loadNewWord();
  }, [loadNewWord]);

  // 다음 단계 도전
  const onChallengeNextStage = useCallback(() => {
    // 단계 완료 알림 숨기기
    setShowStageCompleteNotification(false);
    
    if (stepId < 5) {
      // 다음 단계로 이동 (React Router 사용)
      window.location.href = `/step/${stepId + 1}`;
    }
  }, [stepId]);

  // 다시 연습 (현재 단계 1레벨로 리셋)
  const onRetryStage = useCallback(() => {
    // 단계 완료 알림 숨기기
    setShowStageCompleteNotification(false);
    
    setCurrentLevel(1);
    setConsecutiveSuccess(0);
    loadNewWord();
  }, [loadNewWord, setCurrentLevel]);

  // 초기 단어 로드
  useEffect(() => {
    loadNewWord();
  }, [loadNewWord]);

  return {
    currentWord,
    currentInput,
    isCompleted,
    currentStep,
    pressInfo,
    targetKey,
    showSuccessNotification,
    showErrorNotification,
    errorMessage,
    successMessage,
    onKeyClick,
    onNextWord,
    onReset,
    // 레벨 시스템 관련
    currentLevel,
    consecutiveSuccess,
    currentKeyTime,
    showLevelUpNotification,
    showStageCompleteNotification,
    onChallengeNextStage,
    onRetryStage,
    // 새로운 단계 데이터 훅
    stepDataHook
  };
};