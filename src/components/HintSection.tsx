import React from 'react';
import { CurrentStep, PressInfo } from '../types';

interface HintSectionProps {
  currentStep: CurrentStep | null;
  pressInfo: PressInfo | null;
  targetKey: string | null;
}

const HintSection: React.FC<HintSectionProps> = ({ currentStep, pressInfo, targetKey }) => {
  if (!currentStep || !pressInfo) {
    return null;
  }

  const getHintIconClass = () => {
    if (pressInfo.isConsecutive) {
      if (pressInfo.remaining === 3) {
        return 'hint-icon press-3';
      } else if (pressInfo.remaining === 2) {
        return 'hint-icon press-2';
      } else {
        return 'hint-icon press-1';
      }
    } else {
      return 'hint-icon press-1';
    }
  };

  return (
    <div className="hint-section">
      <div className="hint-container">
        <div className={getHintIconClass()} id="hint-key">
          <div className="hint-symbol">{currentStep.keyDisplay}</div>
          <div className="hint-number">{currentStep.number !== null ? currentStep.number : ''}</div>
        </div>
        <div className="hint-text">
          <span id="hint-text">{pressInfo.remaining}번 누르기</span>
        </div>
      </div>
    </div>
  );
};

export default HintSection;
