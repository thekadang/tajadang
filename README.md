# 천지인 키보드 타자연습 앱 ✨

한국어 천지인 키보드 입력 방법을 단계별로 학습할 수 있는 React 기반 타자연습 웹 애플리케이션입니다.

## 📋 목차

- [프로젝트 개요](#-프로젝트-개요)
- [주요 기능](#-주요-기능)
- [기술 스택](#-기술-스택)
- [프로젝트 구조](#-프로젝트-구조)
- [설치 및 실행](#-설치-및-실행)
- [개발 가이드](#-개발-가이드)
- [컴포넌트 구조](#-컴포넌트-구조)
- [상태 관리](#-상태-관리)
- [스타일링](#-스타일링)
- [배포](#-배포)

## 🎯 프로젝트 개요

천지인 키보드는 한국어 입력을 위한 키패드 입력 방법으로, 주로 피처폰에서 사용되었습니다. 이 앱은 천지인 키보드 입력 방법을 5단계로 나누어 체계적으로 학습할 수 있도록 설계되었습니다.

### 학습 단계
1. **1단계**: 왕초보 첫걸음 - 기본 자음/모음 입력
2. **2단계**: 이젠 나도 낱말 타자 - 단순 단어 입력
3. **3단계**: 척척박사 생활 단어 - 일상 단어 입력
4. **4단계**: 자신 있게 짧은 문장 - 짧은 문장 입력
5. **5단계**: 문자 보내기 대성공! - 복잡한 문장 입력

## ✨ 주요 기능

### 🎮 학습 기능
- **단계별 학습 시스템**: 5단계로 나뉜 체계적인 학습 과정
- **실시간 피드백**: 키 입력에 대한 즉각적인 성공/실패 알림
- **키타임 오버 알림**: 시간 초과 시 오렌지색 경고 알림으로 집중력 향상
- **시각적 가이드**: 눌러야 할 키와 횟수를 시각적으로 표시
- **진도 추적**: 현재 입력 상태와 완료도 실시간 표시

### 🏆 레벨 시스템
- **5단계 난이도**: 30초 → 15초 → 10초 → 5초 → 1초
- **키타임 시스템**: 키를 누를 때마다 타이머 초기화 후 재시작
- **자동 레벨업**: 연속 10회 성공 시 자동 레벨 상승
- **단계 완료 시스템**: 각 단계 완료 후 다음 단계 도전 가능

### 🎨 사용자 경험
- **반응형 디자인**: 데스크톱과 모바일 모두 지원
- **접근성 고려**: 키보드 네비게이션 및 ARIA 라벨 지원
- **시각적 효과**: 성공/실패 애니메이션 및 키 하이라이트
- **직관적 UI**: 어르신도 쉽게 사용할 수 있는 큰 버튼과 명확한 안내

## 🛠 기술 스택

### Frontend
- **React 18.2.0**: 메인 프레임워크
- **TypeScript 4.7.4**: 타입 안전성
- **React Router DOM 7.8.2**: 클라이언트 사이드 라우팅
- **Styled Components 6.1.19**: CSS-in-JS 스타일링 (일부 컴포넌트)

### 개발 도구
- **Create React App 5.0.1**: 프로젝트 설정
- **ESLint**: 코드 품질 관리
- **Jest & React Testing Library**: 테스트 환경

### 폰트 및 에셋
- **Jalnan2 폰트**: 한국어 가독성 최적화
- **커스텀 배경 이미지**: 브랜드 일관성

## 📁 프로젝트 구조

```
tajaproject/
├── public/                     # 정적 파일
│   └── index.html
├── src/
│   ├── components/             # React 컴포넌트
│   │   ├── common/            # 공통 컴포넌트
│   │   │   └── StyledComponents.ts
│   │   ├── Controls/          # 컨트롤 버튼
│   │   │   ├── Controls.tsx
│   │   │   └── ControlsStyles.ts
│   │   ├── Header.tsx         # 헤더 컴포넌트
│   │   ├── HintSection/       # 힌트 표시
│   │   │   ├── HintSection.tsx
│   │   │   └── HintSectionStyles.ts
│   │   ├── InputField/        # 입력 필드
│   │   │   ├── InputField.tsx
│   │   │   └── InputFieldStyles.ts
│   │   ├── Keyboard/          # 가상 키보드
│   │   │   ├── Keyboard.tsx
│   │   │   └── KeyboardStyles.ts
│   │   ├── MainPage/          # 메인 페이지
│   │   │   ├── MainPage.tsx
│   │   │   └── MainPageStyles.ts
│   │   ├── Notification/      # 알림 시스템
│   │   │   ├── Notification.tsx
│   │   │   └── NotificationStyles.ts
│   │   ├── StepPage/          # 단계별 연습 페이지
│   │   │   ├── StepPage.tsx
│   │   │   └── StepPageStyles.ts
│   │   └── WordDisplay/       # 단어 표시
│   │       ├── WordDisplay.tsx
│   │       └── WordDisplayStyles.ts
│   ├── constants/             # 상수 정의
│   │   └── index.ts
│   ├── hooks/                 # 커스텀 훅
│   │   ├── useCheonjiinKeyboard.ts  # 메인 로직
│   │   └── useStepData.ts          # 단계별 데이터
│   ├── types/                 # TypeScript 타입 정의
│   │   └── index.ts
│   ├── utils/                 # 유틸리티 함수
│   │   ├── index.ts
│   │   ├── localFileManager.ts
│   │   └── stepFileManager.ts
│   ├── App.css               # 전역 스타일
│   ├── App.tsx               # 메인 앱 컴포넌트
│   ├── index.css             # 기본 스타일
│   └── index.tsx             # 앱 진입점
├── assets/                   # 정적 에셋
│   ├── fonts/               # 폰트 파일
│   │   ├── Jalnan2.otf
│   │   └── Jalnan2TTF.ttf
│   └── images/              # 이미지 파일
│       ├── background.png
│       └── ...
├── backup/                  # 원본 파일 백업
├── package.json            # 의존성 관리
└── tsconfig.json          # TypeScript 설정
```

## 🚀 설치 및 실행

### 필수 요구사항
- Node.js 16.x 이상
- npm 또는 yarn

### 설치
```bash
# 저장소 클론
git clone <repository-url>
cd tajaproject

# 의존성 설치
npm install
```

### 개발 서버 실행
```bash
npm start
```
브라우저에서 `http://localhost:3000` 접속


### 빌드
```bash
npm run build
```

### 테스트
```bash
npm test
```

## 👨‍💻 개발 가이드

### 코드 스타일
- **TypeScript**: 모든 컴포넌트와 함수에 타입 정의
- **ESLint**: 코드 품질 유지
- **Prettier**: 일관된 코드 포맷팅
- **JSDoc**: 함수와 컴포넌트에 상세한 주석

### 커밋 컨벤션
```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅, 세미콜론 누락 등
refactor: 코드 리팩토링
test: 테스트 추가
chore: 빌드 업무 수정, 패키지 매니저 수정
```

## 🧩 컴포넌트 구조

### 페이지 컴포넌트
- **MainPage**: 단계 선택 메인 화면
- **StepPage**: 각 단계별 연습 화면

### 기능 컴포넌트
- **WordDisplay**: 연습할 단어 표시
- **InputField**: 사용자 입력 표시
- **HintSection**: 키 입력 가이드 및 현재 키 표시
- **Keyboard**: 가상 천지인 키보드 (스페이스바 포함)
- **Controls**: 컨트롤 버튼 (다음 단어, 메인으로)
- **Notification**: 성공/실패/키타임 오버 알림

### 공통 컴포넌트 (Styled Components)
- **Button**: 재사용 가능한 버튼
- **Card**: 카드 레이아웃
- **FlexContainer**: 플렉스 레이아웃
- **미디어 쿼리**: 반응형 디자인 지원

## 🔄 상태 관리

### 메인 훅: useCheonjiinKeyboard
```typescript
const {
  // 기본 상태
  currentWord,           // 현재 연습 단어
  currentInput,          // 현재 입력된 텍스트
  isCompleted,           // 입력 완료 여부
  
  // 레벨 시스템
  currentLevel,          // 현재 레벨 (1-5)
  consecutiveSuccess,    // 연속 성공 횟수
  currentKeyTime,        // 현재 키 타임 제한
  
  // 알림 시스템
  showSuccessNotification,  // 성공 알림 표시
  showErrorNotification,    // 실패/키타임 오버 알림 표시
  errorMessage,             // 에러 메시지 내용
  
  // 이벤트 핸들러
  onKeyClick,            // 키 클릭 처리
  onNextWord,            // 다음 단어
  onReset                // 리셋
} = useCheonjiinKeyboard(stepId);
```

### 데이터 훅: useStepData
```typescript
const { mapping, words } = useStepData(stepId);
```

## 🎨 스타일링

### 스타일링 방식
1. **App.css**: 전역 스타일 및 기본 컴포넌트 스타일
2. **Styled Components**: 일부 재사용 컴포넌트 (향후 확장용)
3. **CSS 클래스**: 메인 컴포넌트들의 스타일링

### 디자인 시스템
- **색상 팔레트**: 단계별 구분 색상
- **타이포그래피**: Jalnan2 폰트 사용
- **간격 시스템**: 일관된 여백과 패딩
- **애니메이션**: 부드러운 전환 효과

### 반응형 디자인
```css
/* 모바일 최적화 */
@media (max-width: 768px) {
  /* 더 큰 버튼과 텍스트 */
  /* 터치 친화적 인터페이스 */
}

@media (max-width: 480px) {
  /* 작은 화면 최적화 */
}
```

## 🔧 주요 설정 파일

### package.json
```json
{
  "name": "tajaproject",
  "version": "0.1.0",
  "dependencies": {
    "react": "^18.2.0",
    "react-router-dom": "^7.8.2",
    "styled-components": "^6.1.19",
    "typescript": "^4.7.4"
  }
}
```

### tsconfig.json
- TypeScript 컴파일러 설정
- strict 모드 활성화
- 타입 체킹 강화

## 📊 성능 최적화

### 빌드 최적화
- **코드 분할**: React.lazy 사용 준비
- **번들 최적화**: 63.53 kB (gzipped)
- **이미지 최적화**: 적절한 포맷과 크기

### 런타임 최적화
- **useCallback**: 불필요한 리렌더링 방지
- **useMemo**: 복잡한 계산 결과 캐싱
- **React.memo**: 컴포넌트 메모이제이션

## 🚀 배포

### 빌드 준비
```bash
npm run build
```

### 정적 호스팅
- **Netlify**: 자동 배포 설정 가능
- **Vercel**: React 앱 최적화
- **GitHub Pages**: 무료 호스팅

### 환경 변수 (선택사항)
```bash
# .env 파일 생성 (필요 시)
REACT_APP_VERSION=1.0.0
```

## 🐛 문제 해결

### 자주 발생하는 문제

1. **폰트 로딩 실패**
   ```css
   @font-face {
     font-display: swap; /* 폰트 로딩 최적화 */
   }
   ```

2. **키보드 이벤트 문제**
   ```typescript
   // 키보드 접근성 확인
   onKeyDown={(e) => {
     if (e.key === 'Enter' || e.key === ' ') {
       handleClick();
     }
   }}
   ```

3. **메모리 누수**
   ```typescript
   useEffect(() => {
     return () => {
       // 타이머 정리
       if (timeoutRef.current) {
         clearTimeout(timeoutRef.current);
       }
     };
   }, []);
   ```

## 🤝 기여 가이드

### 개발 프로세스
1. 이슈 생성 및 할당
2. 기능 브랜치 생성 (`feature/기능명`)
3. 개발 및 테스트
4. Pull Request 생성
5. 코드 리뷰 및 머지

### 코드 리뷰 체크리스트
- [ ] 타입 안전성 확인
- [ ] 접근성 준수
- [ ] 성능 영향 검토
- [ ] 테스트 커버리지
- [ ] 문서 업데이트

## 📞 문의 및 지원

- **개발자**: [개발자 정보]
- **이슈 리포트**: GitHub Issues
- **문의 이메일**: [이메일 주소]

---

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

---

**천지인 키보드 타자연습 앱으로 한국어 입력을 마스터하세요! 🚀**