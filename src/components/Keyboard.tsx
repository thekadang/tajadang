import React from 'react';

interface PressInfo {
  total: number;
  remaining: number;
  isConsecutive: boolean;
}

interface KeyboardProps {
  onKeyClick: (key: string, action?: string) => void;
  targetKey: string | null;
  pressInfo: PressInfo | null;
}

const Keyboard: React.FC<KeyboardProps> = ({ onKeyClick, targetKey, pressInfo }) => {
  const getKeyClass = (key: string, number?: number) => {
    let className = 'key';
    
    if (key === targetKey) {
      className += ' target';
      
      if (pressInfo?.isConsecutive) {
        if (pressInfo.remaining === 3) {
          className += ' press-3';
        } else if (pressInfo.remaining === 2) {
          className += ' press-2';
        } else {
          className += ' press-1';
        }
      } else {
        className += ' press-1';
      }
    }
    
    return className;
  };

  return (
    <div className="keyboard-section">
      <div className="keyboard-container">
        <div className="keyboard">
          {/* 첫 번째 줄 */}
          <div className="key-row">
            <div 
              className={getKeyClass('|', 1)} 
              data-key="|" 
              data-number="1"
              onClick={() => onKeyClick('|')}
            >
              <span className="key-char">|</span>
              <span className="key-number">1</span>
            </div>
            <div 
              className={getKeyClass('.', 2)} 
              data-key="." 
              data-number="2"
              onClick={() => onKeyClick('.')}
            >
              <span className="key-char">.</span>
              <span className="key-number">2</span>
            </div>
            <div 
              className={getKeyClass('ㅡ', 3)} 
              data-key="ㅡ" 
              data-number="3"
              onClick={() => onKeyClick('ㅡ')}
            >
              <span className="key-char">ㅡ</span>
              <span className="key-number">3</span>
            </div>
            <div 
              className="key backspace" 
              data-action="backspace"
              onClick={() => onKeyClick('', 'backspace')}
            >
              <span className="key-char">←</span>
            </div>
          </div>
          
          {/* 두 번째 줄 */}
          <div className="key-row">
            <div 
              className={getKeyClass('ㄱ', 4)} 
              data-key="ㄱ" 
              data-number="4"
              onClick={() => onKeyClick('ㄱ')}
            >
              <span className="key-char">ㄱㅋ</span>
              <span className="key-number">4</span>
            </div>
            <div 
              className={getKeyClass('ㄴ', 5)} 
              data-key="ㄴ" 
              data-number="5"
              onClick={() => onKeyClick('ㄴ')}
            >
              <span className="key-char">ㄴㄹ</span>
              <span className="key-number">5</span>
            </div>
            <div 
              className={getKeyClass('ㄷ', 6)} 
              data-key="ㄷ" 
              data-number="6"
              onClick={() => onKeyClick('ㄷ')}
            >
              <span className="key-char">ㄷㅌ</span>
              <span className="key-number">6</span>
            </div>
            <div 
              className="key enter" 
              data-action="enter"
              onClick={() => onKeyClick('', 'enter')}
            >
              <span className="key-char">↵</span>
            </div>
          </div>
          
          {/* 세 번째 줄 */}
          <div className="key-row">
            <div 
              className={getKeyClass('ㅂ', 7)} 
              data-key="ㅂ" 
              data-number="7"
              onClick={() => onKeyClick('ㅂ')}
            >
              <span className="key-char">ㅂㅍ</span>
              <span className="key-number">7</span>
            </div>
            <div 
              className={getKeyClass('ㅅ', 8)} 
              data-key="ㅅ" 
              data-number="8"
              onClick={() => onKeyClick('ㅅ')}
            >
              <span className="key-char">ㅅㅎ</span>
              <span className="key-number">8</span>
            </div>
            <div 
              className={getKeyClass('ㅈ', 9)} 
              data-key="ㅈ" 
              data-number="9"
              onClick={() => onKeyClick('ㅈ')}
            >
              <span className="key-char">ㅈㅊ</span>
              <span className="key-number">9</span>
            </div>
            <div 
              className="key" 
              data-key=","
              onClick={() => onKeyClick(',')}
            >
              <span className="key-char">,.?!</span>
            </div>
          </div>
          
          {/* 네 번째 줄 */}
          <div className="key-row">
            <div 
              className="key" 
              data-key="!"
              onClick={() => onKeyClick('!')}
            >
              <span className="key-char">!#1</span>
            </div>
            <div 
              className={getKeyClass('ㅇ', 0)} 
              data-key="ㅇ" 
              data-number="0"
              onClick={() => onKeyClick('ㅇ')}
            >
              <span className="key-char">ㅇㅁ</span>
              <span className="key-number">0</span>
            </div>
            <div 
              className={getKeyClass(' ')} 
              data-key=" "
              onClick={() => onKeyClick(' ')}
            >
              <span className="key-sub">[____]</span>
            </div>
            <div 
              className="key" 
              data-key=","
              onClick={() => onKeyClick(',')}
            >
              <span className="key-char">,</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;