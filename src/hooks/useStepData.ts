/**
 * 단계별 데이터 관리 훅
 * 
 * 천지인 키보드 타자연습의 각 단계별 학습 데이터를 관리합니다.
 * 레벨별 데이터, 랜덤 연습 기능 등을 제공합니다.
 */

import { useMemo, useState, useCallback } from 'react';
import { CheonjiinMapping, StepData, LevelData } from '../types';
import { getStepData, getLevelData, getRandomWords, getAllSteps, getLevelCount } from '../data/steps';

/**
 * 단계별 데이터 훅의 반환 타입
 */
export interface UseStepDataReturn {
  // 기본 데이터
  stepData: StepData;
  mapping: CheonjiinMapping;
  
  // 현재 레벨 관리
  currentLevel: number;
  setCurrentLevel: (level: number) => void;
  levelData: LevelData;
  levelCount: number;
  
  // 단어 관리
  words: string[];
  currentWords: string[];
  
  // 랜덤 연습 기능
  isRandomMode: boolean;
  setRandomMode: (enabled: boolean) => void;
  randomWordCount: number;
  setRandomWordCount: (count: number) => void;
  generateRandomWords: () => void;
  
  // 유틸리티 함수
  goToNextLevel: () => void;
  goToPreviousLevel: () => void;
  resetToFirstLevel: () => void;
}

/**
 * 단계별 데이터 관리 훅
 * @param stepId 단계 ID (1-5)
 * @returns 단계별 데이터와 관리 함수들
 */
export const useStepData = (stepId: number = 1): UseStepDataReturn => {
  // 현재 레벨 상태
  const [currentLevel, setCurrentLevel] = useState(1);
  
  // 랜덤 모드 상태
  const [isRandomMode, setIsRandomMode] = useState(false);
  const [randomWordCount, setRandomWordCount] = useState(3);
  const [randomWords, setRandomWords] = useState<string[]>([]);
  
  // 기본 단계 데이터
  const stepData = useMemo(() => getStepData(stepId), [stepId]);
  
  // 현재 레벨 데이터
  const levelData = useMemo(() => getLevelData(stepId, currentLevel), [stepId, currentLevel]);
  
  // 레벨 수
  const levelCount = useMemo(() => getLevelCount(stepId), [stepId]);
  
  // 현재 사용할 단어들 (랜덤 모드 고려)
  const currentWords = useMemo(() => {
    if (isRandomMode && randomWords.length > 0) {
      return randomWords;
    }
    return levelData.words;
  }, [isRandomMode, randomWords, levelData.words]);
  
  // 랜덤 단어 생성
  const generateRandomWords = useCallback(() => {
    const newRandomWords = getRandomWords(stepId, currentLevel, randomWordCount);
    setRandomWords(newRandomWords);
  }, [stepId, currentLevel, randomWordCount]);
  
  // 랜덤 모드 토글
  const setRandomMode = useCallback((enabled: boolean) => {
    setIsRandomMode(enabled);
    if (enabled) {
      generateRandomWords();
    } else {
      setRandomWords([]);
    }
  }, [generateRandomWords]);
  
  // 레벨 네비게이션 함수들
  const goToNextLevel = useCallback(() => {
    if (currentLevel < levelCount) {
      setCurrentLevel(prev => prev + 1);
      // 랜덤 모드일 때는 새로운 레벨에서 다시 랜덤 생성
      if (isRandomMode) {
        setTimeout(generateRandomWords, 0);
      }
    }
  }, [currentLevel, levelCount, isRandomMode, generateRandomWords]);
  
  const goToPreviousLevel = useCallback(() => {
    if (currentLevel > 1) {
      setCurrentLevel(prev => prev - 1);
      // 랜덤 모드일 때는 새로운 레벨에서 다시 랜덤 생성
      if (isRandomMode) {
        setTimeout(generateRandomWords, 0);
      }
    }
  }, [currentLevel, isRandomMode, generateRandomWords]);
  
  const resetToFirstLevel = useCallback(() => {
    setCurrentLevel(1);
    if (isRandomMode) {
      setTimeout(generateRandomWords, 0);
    }
  }, [isRandomMode, generateRandomWords]);
  
  return {
    // 기본 데이터
    stepData,
    mapping: stepData.mapping,
    
    // 레벨 관리
    currentLevel,
    setCurrentLevel,
    levelData,
    levelCount,
    
    // 단어 관리
    words: levelData.words, // 원본 단어들
    currentWords, // 현재 사용할 단어들 (랜덤 모드 고려)
    
    // 랜덤 연습 기능
    isRandomMode,
    setRandomMode,
    randomWordCount,
    setRandomWordCount,
    generateRandomWords,
    
    // 유틸리티 함수
    goToNextLevel,
    goToPreviousLevel,
    resetToFirstLevel,
  };
};

// 기존 호환성을 위한 함수들
export { getAllSteps };
