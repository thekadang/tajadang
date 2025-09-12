/**
 * 천지인 키보드 타자연습 앱의 공통 타입 정의
 * 
 * 이 파일은 앱 전체에서 사용되는 타입들을 정의합니다.
 * 타입 안전성과 개발자 경험 향상을 위해 구체적이고 확장 가능한 타입들을 제공합니다.
 */

// =============================================================================
// 기본 타입 정의
// =============================================================================

/**
 * 현재 입력 단계 정보
 * 사용자가 현재 입력해야 하는 키와 관련된 모든 정보를 포함합니다.
 */
export interface CurrentStep {
  /** 실제 키 값 (예: 'ㄱ', '|', '.', ' ') */
  key: string;
  /** 키보드에 표시되는 번호 (0-9, 특수키는 null) */
  number: number | null;
  /** 사용자에게 보여지는 키 표시 (예: 'ㄱㅋ', '|', '.', '[____]') */
  keyDisplay: string;
  /** 현재 단계 완료 후 표시될 결과 문자 */
  result: string;
}

/**
 * 키 누름 정보
 * 연속 키 입력과 관련된 정보를 관리합니다.
 */
export interface PressInfo {
  /** 총 눌러야 하는 횟수 */
  total: number;
  /** 남은 입력 횟수 */
  remaining: number;
  /** 연속 입력인지 여부 (같은 키를 여러 번 눌러야 하는 경우) */
  isConsecutive: boolean;
}

/**
 * 천지인 키 매핑 정보
 * 각 단어별로 입력 시퀀스를 정의합니다.
 */
export interface CheonjiinMapping {
  [word: string]: CurrentStep[];
}

/**
 * 레벨별 데이터
 * 각 레벨별로 연습할 단어와 설명을 포함합니다.
 */
export interface LevelData {
  /** 해당 레벨에서 연습할 단어들 */
  words: string[];
  /** 레벨 설명 */
  description: string;
}

/**
 * 단계별 데이터
 * 각 단계의 모든 정보를 포함합니다.
 */
export interface StepData {
  /** 단계 ID (1-5) */
  id: number;
  /** 단계 제목 */
  title: string;
  /** 단계 부제목 */
  subtitle: string;
  /** 단계 설명 */
  description: string;
  /** 레벨별 데이터 (1-5) */
  levels: Record<number, LevelData>;
  /** 키 매핑 정보 */
  mapping: CheonjiinMapping;
}

/**
 * 단계별 기본 정보
 * 메인 페이지에서 단계 선택 시 사용됩니다.
 */
export interface StepInfo {
  /** 단계 ID (1-5) */
  id: number;
  /** 단계 제목 */
  title: string;
  /** 단계 부제목/설명 */
  subtitle: string;
  /** 단계 대표 색상 */
  color: string;
}

/**
 * 레벨별 키 타임 설정
 * 각 레벨별로 다른 제한 시간을 설정합니다.
 */
export interface LevelSettings {
  /** 레벨: 키타임(밀리초) */
  [level: number]: number;
}

/**
 * 알림 타입
 * 다양한 상황에서 표시되는 알림의 종류를 정의합니다.
 */
export type NotificationType = 'success' | 'error' | 'timeout';

/**
 * 키보드 액션 타입
 * 특수 키 입력을 구분하기 위한 타입입니다.
 */
export type KeyboardAction = 'backspace' | 'enter' | undefined;

/**
 * 키보드 키 변형 타입
 * 키 버튼의 시각적 스타일을 결정합니다.
 */
export type KeyVariant = 'normal' | 'backspace' | 'enter' | 'special';

// =============================================================================
// 컴포넌트 Props 타입
// =============================================================================

/**
 * 키보드 컴포넌트 Props
 */
export interface KeyboardProps {
  onKeyClick: (key: string, action?: KeyboardAction) => void;
  targetKey: string | null;
  pressInfo: PressInfo | null;
}

/**
 * 알림 컴포넌트 Props
 */
export interface NotificationProps {
  showSuccess: boolean;
  showError: boolean;
  successMessage: string;
  errorMessage: string;
  currentStep: CurrentStep | null;
}

/**
 * 힌트 섹션 컴포넌트 Props
 */
export interface HintSectionProps {
  currentStep: CurrentStep | null;
  pressInfo: PressInfo | null;
  targetKey: string | null;
}

/**
 * 컨트롤 버튼 컴포넌트 Props
 */
export interface ControlsProps {
  onNextWord: () => void;
  onReset: () => void;
}

/**
 * 단어 표시 컴포넌트 Props
 */
export interface WordDisplayProps {
  word: string;
}

/**
 * 입력 필드 컴포넌트 Props
 */
export interface InputFieldProps {
  input: string;
  isCompleted: boolean;
}

// =============================================================================
// 훅 반환 타입
// =============================================================================

/**
 * 천지인 키보드 훅 반환 타입
 * useCheonjiinKeyboard 훅이 반환하는 모든 상태와 함수들을 정의합니다.
 */
export interface UseCheonjiinKeyboardReturn {
  // 기본 상태
  currentWord: string;
  currentInput: string;
  currentInputIndex: number;
  currentPressCount: number;
  isCompleted: boolean;
  
  // 알림 상태
  showSuccessNotification: boolean;
  showErrorNotification: boolean;
  successMessage: string;
  errorMessage: string;
  
  // 레벨 시스템
  currentLevel: number;
  consecutiveSuccess: number;
  currentKeyTime: number;
  showLevelUpNotification: boolean;
  showStageCompleteNotification: boolean;
  
  // 현재 단계 정보
  currentStep: CurrentStep | null;
  targetKey: string | null;
  inputSequence: CurrentStep[];
  pressInfo: PressInfo | null;
  
  // 이벤트 핸들러
  onKeyClick: (key: string, action?: KeyboardAction) => void;
  onNextWord: () => void;
  onReset: () => void;
  onChallengeNextStage: () => void;
  onRetryStage: () => void;
}

/**
 * 단계별 데이터 훅 반환 타입
 * useStepData 훅이 반환하는 데이터 구조를 정의합니다.
 */
export interface UseStepDataReturn {
  mapping: CheonjiinMapping;
  words: string[];
}

// =============================================================================
// 스타일드 컴포넌트 Props 타입
// =============================================================================

/**
 * 버튼 변형 타입
 * styled-components 버튼의 시각적 스타일을 결정합니다.
 */
export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error';

/**
 * 버튼 크기 타입
 */
export type ButtonSize = 'small' | 'medium' | 'large';

/**
 * 텍스트 크기 타입
 */
export type TextSize = 'small' | 'medium' | 'large' | 'xlarge';

/**
 * 텍스트 굵기 타입
 */
export type TextWeight = 'normal' | 'bold' | 'light';

/**
 * 텍스트 정렬 타입
 */
export type TextAlign = 'left' | 'center' | 'right';

/**
 * 플렉스 방향 타입
 */
export type FlexDirection = 'row' | 'column';

/**
 * 플렉스 정렬 타입
 */
export type FlexJustify = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
export type FlexAlign = 'flex-start' | 'center' | 'flex-end' | 'stretch';

// =============================================================================
// 유틸리티 타입
// =============================================================================

/**
 * 선택적 속성을 가진 타입
 * T 타입의 K 속성들을 선택적으로 만듭니다.
 */
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * 읽기 전용 배열 타입
 */
export type ReadonlyArray<T> = readonly T[];

/**
 * 색상 값 타입
 * CSS 색상 값으로 사용 가능한 문자열
 */
export type ColorValue = string;

/**
 * 픽셀 값 타입
 * CSS 크기 값으로 사용 가능한 문자열
 */
export type PixelValue = string;
