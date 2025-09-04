import React from 'react';
import { useParams } from 'react-router-dom';
import WordDisplay from './WordDisplay';
import InputField from './InputField';
import HintSection from './HintSection';
import Keyboard from './Keyboard';
import Controls from './Controls';
import Notification from './Notification';
import { useCheonjiinKeyboard } from '../hooks/useCheonjiinKeyboard';

const StepPage: React.FC = () => {
  const { stepId } = useParams<{ stepId: string }>();
  const stepNumber = parseInt(stepId || '1', 10);

  const {
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
  } = useCheonjiinKeyboard(stepNumber);

  const stepInfo = {
    1: { title: '1단계', subtitle: '왕초보 첫걸음', color: '#4A90E2' },
    2: { title: '2단계', subtitle: '이젠 나도 낱말 타자', color: '#7ED321' },
    3: { title: '3단계', subtitle: '척척박사 생활 단어', color: '#F5A623' },
    4: { title: '4단계', subtitle: '자신 있게 짧은 문장', color: '#D0021B' },
    5: { title: '5단계', subtitle: '문자 보내기 대성공!', color: '#9013FE' }
  };

  const currentStepInfo = stepInfo[stepNumber as keyof typeof stepInfo] || stepInfo[1];


  return (
    <div className="step-page">
      <div className="app-container">
        <header 
          className="practice-header"
          style={{ backgroundColor: currentStepInfo.color }}
        >
          <div className="step-info">
            <h2 className="step-page-title">{currentStepInfo.title}</h2>
            <h3 className="step-page-subtitle">{currentStepInfo.subtitle}</h3>
          </div>
        </header>
        
        <main className="main-content">
          <div className="word-section">
            <WordDisplay word={currentWord} />
            <InputField 
              input={currentInput} 
              isCompleted={isCompleted}
            />
            <HintSection 
              currentStep={currentStep}
              pressInfo={pressInfo}
              targetKey={targetKey}
            />
          </div>
        </main>

        <Keyboard 
          onKeyClick={onKeyClick}
          targetKey={targetKey}
          pressInfo={pressInfo}
        />

        <Controls 
          onNextWord={onNextWord}
          onReset={onReset}
        />

        <Notification 
          showSuccess={showSuccessNotification}
          showError={showErrorNotification}
          successMessage={successMessage}
          errorMessage={errorMessage}
          currentStep={currentStep}
        />
      </div>
    </div>
  );
};

export default StepPage;
