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
  const getSuccessEmoji = () => {
    const emojis = ['🎉', '✨', '🌟', '💫', '🎊', '🏆', '👏', '🎯'];
    return emojis[Math.floor(Math.random() * emojis.length)];
  };

  const isTimeoutMessage = errorMessage === '시간이 다 되었어요. 다시 해보세요!';
  
  const getErrorMessage = () => {
    // 시간 초과 메시지인 경우 그대로 사용
    if (isTimeoutMessage) {
      return errorMessage;
    }
    
    // 오타 메시지인 경우에만 랜덤 메시지 사용
    const messages = [
      '다른 키예요!',
      '틀렸어요!',
      '오타 발생!',
      '실수했어요!',
      '다시 해보세요!',
      '주의하세요!'
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };
  
  const getTimeoutEmoji = () => {
    const emojis = ['⏰', '⏱️', '⌛', '🕐', '🔔', '⚡'];
    return emojis[Math.floor(Math.random() * emojis.length)];
  };
  
  const getErrorEmoji = () => {
    const emojis = ['❌', '⚠️', '🚫', '💥', '🔥', '⚡'];
    return emojis[Math.floor(Math.random() * emojis.length)];
  };

  if (showSuccess) {
    return (
      <div id="success-notification" className="success-notification show animate">
        <div className="emoji">{getSuccessEmoji()}</div>
        <div className="message">{successMessage}</div>
      </div>
    );
  }

  if (showError) {
    // 시간 초과 메시지인 경우
    if (isTimeoutMessage) {
      return (
        <div id="error-notification" className="error-notification show animate timeout-notification">
          <div className="emoji">{getTimeoutEmoji()}</div>
          <div className="message">{getErrorMessage()}</div>
          <div className="timeout-hint">시간이 초과되었습니다</div>
        </div>
      );
    }
    
    // 오타 메시지인 경우 (currentStep이 있을 때만)
    if (currentStep) {
      return (
        <div id="error-notification" className="error-notification show animate">
          <div className="emoji">{getErrorEmoji()}</div>
          <div className="message">{getErrorMessage()}</div>
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
  }

  return null;
};

export default Notification;
