import { useState, useCallback, useMemo } from 'react';
import { useStepData } from './useStepData';

export const useCheonjiinKeyboard = (stepId: number = 4) => {
  const stepData = useStepData(stepId);
  const cheonjiinMapping = stepData.mapping;
  const practiceWords = stepData.words;
  const [currentWord, setCurrentWord] = useState('');
  const [currentInput, setCurrentInput] = useState('');
  const [currentInputIndex, setCurrentInputIndex] = useState(0);
  const [currentPressCount, setCurrentPressCount] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [showErrorNotification, setShowErrorNotification] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

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
      // 잘못된 키 입력
      setShowErrorNotification(true);
      setErrorMessage(`잘못된 키입니다. ${currentStep?.keyDisplay || ''} 키를 눌러주세요.`);
      setTimeout(() => {
        setShowErrorNotification(false);
      }, 1000);
      return;
    }

    // 올바른 키 입력
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
        // 단어 완료
        setIsCompleted(true);
        setCurrentInput(currentWord);
        setShowSuccessNotification(true);
        setSuccessMessage('성공했습니다!');

        setTimeout(() => {
          setShowSuccessNotification(false);
          loadNewWord(); // 성공 알림이 사라지면 자동으로 다음 단어 로드
        }, 2000);
      }
    } else {
      // 아직 같은 키를 더 눌러야 함 - 중간 결과 표시
      if (pressInfo?.isConsecutive && newPressCount > 0) {
        // 연달아 누르는 경우 중간 결과 표시
        setCurrentInput(currentStep?.result || '');
      }
    }
  }, [currentStep, currentPressCount, pressInfo, currentInputIndex, inputSequence, isCompleted, currentWord, loadNewWord]);

  // 다음 단어
  const onNextWord = useCallback(() => {
    loadNewWord();
  }, [loadNewWord]);

  // 리셋
  const onReset = useCallback(() => {
    loadNewWord();
  }, [loadNewWord]);

  // 초기 단어 로드
  useState(() => {
    loadNewWord();
  });

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
    onReset
  };
};