/**
 * 단계별 데이터 중앙 관리
 */

import { step1Data } from './step1';
import { step2Data } from './step2';
import { step3Data } from './step3';
import { step4Data } from './step4';
import { step5Data } from './step5';
import { StepData } from '../../types';

// 모든 단계 데이터
export const allStepsData: Record<number, StepData> = {
  1: step1Data,
  2: step2Data,
  3: step3Data,
  4: step4Data,
  5: step5Data,
};

// 단계 데이터 가져오기
export const getStepData = (stepId: number): StepData => {
  return allStepsData[stepId] || allStepsData[1];
};

// 특정 단계의 레벨 데이터 가져오기
export const getLevelData = (stepId: number, level: number) => {
  const stepData = getStepData(stepId);
  return stepData.levels[level] || stepData.levels[1];
};

// 랜덤 단어 선택 함수
export const getRandomWords = (stepId: number, level: number, count: number = 1): string[] => {
  const levelData = getLevelData(stepId, level);
  const words = [...levelData.words];
  
  if (count >= words.length) {
    return words;
  }
  
  // Fisher-Yates 셔플 알고리즘
  const shuffled = [...words];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled.slice(0, count);
};

// 모든 단계 목록 가져오기
export const getAllSteps = (): StepData[] => {
  return Object.values(allStepsData);
};

// 단계별 레벨 수 가져오기
export const getLevelCount = (stepId: number): number => {
  const stepData = getStepData(stepId);
  return Object.keys(stepData.levels).length;
};
