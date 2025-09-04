import React from 'react';

interface CurrentStep {
  key: string;
  number: number;
  keyDisplay: string;
  result: string;
}

interface NotificationProps {
  showSuccess: boolean;
  showError: boolean;
  successMessage: string;
  errorMessage: string;
  currentStep: CurrentStep | null;
}

const Notification: React.FC<NotificationProps> = ({ 
  showSuccess, 
  showError, 
  successMessage, 
  errorMessage,
  currentStep 
}) => {
  const getRandomEmoji = (type: 'success' | 'error') => {
    if (type === 'success') {
      const emojis = ['🎉', '✨', '🌟', '💫', '🎊', '🏆', '👏', '🎯'];
      return emojis[Math.floor(Math.random() * emojis.length)];
    } else {
      const emojis = ['❌', '⚠️', '🚫', '💥', '🔥', '⚡'];
      return emojis[Math.floor(Math.random() * emojis.length)];
    }
  };

  const getRandomMessage = () => {
    const messages = [
      '잘못된 키입니다!',
      '틀렸습니다!',
      '오타 발생!',
      '실수했어요!',
      '다시 시도하세요!',
      '주의하세요!'
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  if (showSuccess) {
    return (
      <div id="success-notification" className="success-notification show animate">
        <div className="emoji">{getRandomEmoji('success')}</div>
        <div className="message">{successMessage}</div>
      </div>
    );
  }

  if (showError && currentStep) {
    return (
      <div id="error-notification" className="error-notification show animate">
        <div className="emoji">{getRandomEmoji('error')}</div>
        <div className="message">{getRandomMessage()}</div>
        <div className="hint">
          <div style={{ display: 'inline-block', margin: '0 12px', verticalAlign: 'middle' }}>
            <div 
              className="hint-icon" 
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                width: '70px',
                height: '70px',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 6px 16px rgba(102, 126, 234, 0.4)',
                border: '3px solid #fff'
              }}
            >
              <div className="hint-symbol" style={{ fontSize: '22px', fontWeight: 'bold', lineHeight: 1 }}>
                {currentStep.keyDisplay}
              </div>
              <div className="hint-number" style={{ fontSize: '16px', opacity: 0.8, lineHeight: 1 }}>
                {currentStep.number}
              </div>
            </div>
          </div>
          이 키를 눌러주세요!
        </div>
      </div>
    );
  }

  return null;
};

export default Notification;
