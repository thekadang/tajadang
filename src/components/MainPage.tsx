import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const steps = [
    {
      id: 1,
      title: '1단계',
      subtitle: '왕초보 첫걸음',
      color: '#4A90E2'
    },
    {
      id: 2,
      title: '2단계',
      subtitle: '이젠 나도 낱말 타자',
      color: '#7ED321'
    },
    {
      id: 3,
      title: '3단계',
      subtitle: '척척박사 생활 단어',
      color: '#F5A623'
    },
    {
      id: 4,
      title: '4단계',
      subtitle: '자신 있게 짧은 문장',
      color: '#D0021B'
    },
    {
      id: 5,
      title: '5단계',
      subtitle: '문자 보내기 대성공!',
      color: '#9013FE'
    }
  ];

  const handleStepClick = (stepId: number) => {
    navigate(`/step/${stepId}`);
  };


  return (
    <div className="main-page">
      <div className="main-container">
        <header className="main-header">
          <h1 className="main-title">천지인 타자 연습</h1>
          <p className="main-subtitle">단계별로 천천히 배워보세요</p>
        </header>

        <div className="steps-grid">
          {steps.map((step) => (
            <div
              key={step.id}
              className="step-card"
              onClick={() => handleStepClick(step.id)}
              style={{ '--step-color': step.color } as React.CSSProperties}
            >
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <h4 className="step-subtitle">{step.subtitle}</h4>
              </div>
              <div className="step-arrow">→</div>
            </div>
          ))}
        </div>

        <div className="main-footer">
          <p className="footer-text">
            천천히 따라하시면 누구나 할 수 있습니다
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
