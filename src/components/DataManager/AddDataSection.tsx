/**
 * 데이터 추가 섹션 컴포넌트
 * 새로운 단어와 매핑 데이터를 추가하는 기능 제공
 */

import React, { useState, useCallback } from 'react';
import { getAllSteps } from '../../data/steps';
import { CurrentStep } from '../../types';
import { 
  FormSection, 
  SectionTitle, 
  FormGroup, 
  Label, 
  Select, 
  Input, 
  TextArea,
  CheckboxGroup, 
  CheckboxItem, 
  Button, 
  ButtonGroup, 
  HelpText, 
  ExampleBox,
  StatusMessage 
} from './DataManagerStyles';

interface AddDataSectionProps {
  selectedStep: number;
  selectedLevels: number[];
  onStepChange: (stepId: number) => void;
  onLevelToggle: (level: number) => void;
}

const AddDataSection: React.FC<AddDataSectionProps> = ({
  selectedStep,
  selectedLevels,
  onStepChange,
  onLevelToggle,
}) => {
  const [word, setWord] = useState('');
  const [numberSequence, setNumberSequence] = useState('');
  const [resultSequence, setResultSequence] = useState('');
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error' | 'info';
    text: string;
  } | null>(null);

  const allSteps = getAllSteps();

  // 키패드 매핑 정보
  const keypadMapping: { [key: string]: string } = {
    '0': 'ㅇㅁ',
    '1': '|',
    '2': '.',
    '3': '-',
    '4': 'ㄱㅋ',
    '5': 'ㄴㄹ',
    '6': 'ㄷㅌ',
    '7': 'ㅂㅍ',
    '8': 'ㅅㅎ',
    '9': 'ㅈㅊ',
  };

  // 넘버순서에서 키 정보 추출
  const getKeyFromNumber = (num: string): string => {
    const keyDisplay = keypadMapping[num];
    if (!keyDisplay) return '';
    
    // 첫 번째 문자를 키로 사용 (예: 'ㄱㅋ' → 'ㄱ')
    return keyDisplay[0];
  };

  // 입력 검증
  const validateInput = useCallback((): boolean => {
    if (!word.trim()) {
      setStatusMessage({ type: 'error', text: '단어를 입력해주세요.' });
      return false;
    }

    if (!numberSequence.trim()) {
      setStatusMessage({ type: 'error', text: '넘버순서를 입력해주세요.' });
      return false;
    }

    if (!/^[0-9]+$/.test(numberSequence)) {
      setStatusMessage({ type: 'error', text: '넘버순서는 숫자만 입력해주세요.' });
      return false;
    }

    if (!resultSequence.trim()) {
      setStatusMessage({ type: 'error', text: '리절트 값을 입력해주세요.' });
      return false;
    }

    if (selectedLevels.length === 0) {
      setStatusMessage({ type: 'error', text: '최소 하나의 레벨을 선택해주세요.' });
      return false;
    }

    const results = resultSequence.split(' ').filter(r => r.trim());
    if (results.length !== numberSequence.length) {
      setStatusMessage({ 
        type: 'error', 
        text: `리절트 개수(${results.length})와 넘버순서 길이(${numberSequence.length})가 일치하지 않습니다.` 
      });
      return false;
    }

    return true;
  }, [word, numberSequence, resultSequence, selectedLevels]);

  // 매핑 데이터 생성
  const generateMapping = useCallback((): CurrentStep[] => {
    const numbers = numberSequence.split('');
    const results = resultSequence.split(' ').filter(r => r.trim());
    
    return numbers.map((num, index) => ({
      key: getKeyFromNumber(num),
      number: parseInt(num),
      keyDisplay: keypadMapping[num] || num,
      result: results[index] || ''
    }));
  }, [numberSequence, resultSequence]);

  // 데이터 추가 처리
  const handleAddData = useCallback(async () => {
    if (!validateInput()) return;

    try {
      const mapping = generateMapping();
      
      // 여기서 실제 데이터 저장 로직을 구현
      // 현재는 콘솔에 출력
      console.log('새 데이터 추가:', {
        word: word.trim(),
        step: selectedStep,
        levels: selectedLevels,
        mapping
      });

      setStatusMessage({ 
        type: 'success', 
        text: `"${word}" 단어가 ${selectedStep}단계 ${selectedLevels.join(', ')}레벨에 성공적으로 추가되었습니다!` 
      });

      // 폼 초기화
      setWord('');
      setNumberSequence('');
      setResultSequence('');
      
    } catch (error) {
      setStatusMessage({ 
        type: 'error', 
        text: '데이터 추가 중 오류가 발생했습니다.' 
      });
    }
  }, [validateInput, generateMapping, word, selectedStep, selectedLevels]);

  // 예시 데이터 자동 입력
  const handleLoadExample = useCallback(() => {
    setWord('누나');
    setNumberSequence('532512');
    setResultSequence('ㄴ 느 누 눈 누니 누나');
    setStatusMessage({ type: 'info', text: '예시 데이터가 입력되었습니다.' });
  }, []);

  return (
    <div>
      <FormSection>
        <SectionTitle>🎯 단계 및 레벨 선택</SectionTitle>
        
        <FormGroup>
          <Label htmlFor="step-select">단계 선택</Label>
          <Select
            id="step-select"
            value={selectedStep}
            onChange={(e) => onStepChange(parseInt(e.target.value))}
          >
            {allSteps.map(step => (
              <option key={step.id} value={step.id}>
                {step.title} - {step.subtitle}
              </option>
            ))}
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>레벨 선택 (중복 선택 가능)</Label>
          <CheckboxGroup>
            {[1, 2, 3, 4, 5].map(level => (
              <CheckboxItem key={level}>
                <input
                  type="checkbox"
                  checked={selectedLevels.includes(level)}
                  onChange={() => onLevelToggle(level)}
                />
                레벨 {level}
              </CheckboxItem>
            ))}
          </CheckboxGroup>
          <HelpText>
            선택된 레벨: {selectedLevels.length > 0 ? selectedLevels.join(', ') : '없음'}
          </HelpText>
        </FormGroup>
      </FormSection>

      <FormSection>
        <SectionTitle>✏️ 단어 정보 입력</SectionTitle>
        
        <FormGroup>
          <Label htmlFor="word-input">추가할 단어</Label>
          <Input
            id="word-input"
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            placeholder="예: 누나"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="number-sequence">넘버순서</Label>
          <Input
            id="number-sequence"
            type="text"
            value={numberSequence}
            onChange={(e) => setNumberSequence(e.target.value)}
            placeholder="예: 532512"
          />
          <HelpText>
            키패드 번호를 순서대로 입력해주세요. (0-9 숫자만)
          </HelpText>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="result-sequence">리절트 값</Label>
          <TextArea
            id="result-sequence"
            value={resultSequence}
            onChange={(e) => setResultSequence(e.target.value)}
            placeholder="예: ㄴ 느 누 눈 누니 누나"
          />
          <HelpText>
            각 키 입력 후의 결과를 공백으로 구분하여 입력해주세요.
          </HelpText>
        </FormGroup>

        <ButtonGroup>
          <Button $variant="secondary" onClick={handleLoadExample}>
            📝 예시 데이터 불러오기
          </Button>
          <Button onClick={handleAddData}>
            ➕ 데이터 추가
          </Button>
        </ButtonGroup>
      </FormSection>

      {statusMessage && (
        <StatusMessage $type={statusMessage.type}>
          {statusMessage.text}
        </StatusMessage>
      )}

      <ExampleBox>
        <h4 style={{ margin: '0 0 0.5rem 0', color: '#4ecdc4' }}>💡 입력 가이드</h4>
        <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          1. <strong>단계와 레벨</strong>을 선택합니다.<br/>
          2. <strong>추가할 단어</strong>를 입력합니다.<br/>
          3. <strong>넘버순서</strong>는 키패드 번호를 순서대로 입력합니다.<br/>
          4. <strong>리절트 값</strong>은 각 키 입력 후 화면에 표시될 결과입니다.<br/>
          <br/>
          <em style={{ opacity: 0.8 }}>
            💡 오른쪽 키패드를 참고하여 정확한 번호를 입력해주세요!
          </em>
        </div>
      </ExampleBox>
    </div>
  );
};

export default AddDataSection;
