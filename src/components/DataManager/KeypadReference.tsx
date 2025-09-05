/**
 * 키패드 참고용 컴포넌트
 * 데이터 추가시 참고할 수 있는 키패드 레이아웃 표시
 */

import React from 'react';
import { KeypadContainer, KeypadTitle, KeypadGrid, KeypadKey, HelpText } from './DataManagerStyles';

const KeypadReference: React.FC = () => {
  const keypadData = [
    { number: 1, symbols: '|' },
    { number: 2, symbols: '.' },
    { number: 3, symbols: '-' },
    { number: 4, symbols: 'ㄱㅋ' },
    { number: 5, symbols: 'ㄴㄹ' },
    { number: 6, symbols: 'ㄷㅌ' },
    { number: 7, symbols: 'ㅂㅍ' },
    { number: 8, symbols: 'ㅅㅎ' },
    { number: 9, symbols: 'ㅈㅊ' },
    { number: 0, symbols: 'ㅇㅁ' },
  ];

  return (
    <KeypadContainer>
      <KeypadTitle>🎹 키패드 참고</KeypadTitle>
      
      <KeypadGrid>
        {keypadData.map((key) => (
          <KeypadKey key={key.number} $number={key.number}>
            <div className="number">{key.number}</div>
            <div className="symbols">{key.symbols}</div>
          </KeypadKey>
        ))}
      </KeypadGrid>

      <HelpText style={{ marginTop: '1.5rem', textAlign: 'center' }}>
        💡 <strong>사용법:</strong><br/>
        각 숫자키에 해당하는 문자를 참고하여<br/>
        넘버순서를 입력해주세요.
      </HelpText>

      <div style={{ 
        background: 'rgba(255, 255, 255, 0.1)', 
        borderRadius: '10px', 
        padding: '1rem', 
        marginTop: '1rem' 
      }}>
        <h4 style={{ margin: '0 0 0.5rem 0', color: '#4ecdc4' }}>📝 입력 예시</h4>
        <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <strong>단어:</strong> 누나<br/>
          <strong>넘버순서:</strong> 532512<br/>
          <strong>리절트:</strong> ㄴ 느 누 눈 누니 누나<br/>
          <br/>
          <em style={{ opacity: 0.8 }}>
            5번(ㄴ) → 3번(-) → 2번(.) → 5번(ㄴ) → 1번(|) → 2번(.)
          </em>
        </div>
      </div>
    </KeypadContainer>
  );
};

export default KeypadReference;
