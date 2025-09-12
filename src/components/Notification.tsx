import React from 'react';
import { CurrentStep } from '../types';

interface NotificationProps {
  showSuccess: boolean;
  showError: boolean;
  successMessage: string;
  errorMessage: string;
  currentStep: CurrentStep | null;
}

const TIMEOUT_MESSAGE = '시간이 다 되었어요. 다시 해보세요!';

const getRandomEmoji = (type: 'success' | 'error' | 'timeout') => {
  const emojis = {
    success: ['🎉', '👏', '✨', '🌟', '💫', '🎊', '🥳', '😊'],
    error: ['😅', '🤔', '😊', '💪', '🎯', '📝', '✍️'],
    timeout: ['⏰', '⏱️', '🕐', '⏳', '⌛', '🔔']
  };
  
  const emojiList = emojis[type];
  return emojiList[Math.floor(Math.random() * emojiList.length)];
};

const getRandomErrorMessage = () => {
  const messages = [
    '다시 한번 해보세요!',
    '천천히 정확하게!',
    '조금만 더 신경써서!',
    '거의 다 왔어요!',
    '다시 도전해보세요!',
    '실수는 괜찮아요!'
  ];
  return messages[Math.floor(Math.random() * messages.length)];
};

const Notification: React.FC<NotificationProps> = ({ 
  showSuccess, 
  showError, 
  successMessage, 
  errorMessage, 
  currentStep 
}) => {
  const isTimeoutMessage = errorMessage === TIMEOUT_MESSAGE;
  
  const getErrorMessage = () => {
    return isTimeoutMessage ? errorMessage : getRandomErrorMessage();
  };

  if (showSuccess) {
    return (
      <div className={`success-notification ${showSuccess ? 'show' : ''}`} id="success-notification">
        <span className="emoji">{getRandomEmoji('success')}</span>
        <div className="message">{successMessage}</div>
      </div>
    );
  }

  if (showError) {
    if (isTimeoutMessage) {
      return (
        <div className={`timeout-notification ${showError ? 'show' : ''}`} id="error-notification">
          <span className="emoji">{getRandomEmoji('timeout')}</span>
          <div className="message">{getErrorMessage()}</div>
          <div className="hint">시간이 초과되었습니다</div>
        </div>
      );
    }

    if (currentStep) {
      return (
        <div className={`error-notification ${showError ? 'show' : ''}`} id="error-notification">
          <span className="emoji">{getRandomEmoji('error')}</span>
          <div className="message">{getErrorMessage()}</div>
          <div className="hint-section">
            <div className="hint-icon">
              <div className="hint-symbol">{currentStep.keyDisplay}</div>
              <div className="hint-number">{currentStep.number !== null ? currentStep.number : ''}</div>
            </div>
            <div className="hint-text">이 키를 눌러주세요!</div>
          </div>
        </div>
      );
    }
  }

  return null;
};

export default Notification;