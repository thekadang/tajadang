import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ControlsProps {
  onNextWord: () => void;
  onReset: () => void;
}

const Controls: React.FC<ControlsProps> = ({ onNextWord, onReset }) => {
  const navigate = useNavigate();
  
  const handleGoToMain = () => {
    navigate('/');
  };

  return (
    <div className="controls-section">
      <div className="controls-container">
        <button 
          id="next-word"
          className="control-btn primary"
          onClick={onNextWord}
        >
          다른단어
        </button>
        <button 
          id="reset"
          className="control-btn secondary"
          onClick={handleGoToMain}
        >
          첫 화면으로
        </button>
      </div>
    </div>
  );
};

export default Controls;