/**
 * 데이터 삭제 섹션 컴포넌트
 * 기존 단어 데이터를 삭제하는 기능 제공
 */

import React, { useState, useCallback, useMemo } from 'react';
import { getAllSteps, getStepData, getLevelData } from '../../data/steps';
import { 
  FormSection, 
  SectionTitle, 
  FormGroup, 
  Label, 
  Select, 
  Input,
  CheckboxGroup, 
  CheckboxItem, 
  Button, 
  ButtonGroup, 
  HelpText, 
  WordList,
  WordItem,
  SearchContainer,
  StatusMessage 
} from './DataManagerStyles';

interface DeleteDataSectionProps {
  selectedStep: number;
  selectedLevels: number[];
  onStepChange: (stepId: number) => void;
  onLevelToggle: (level: number) => void;
}

type DeleteMode = 'by-level' | 'by-search';

interface WordInfo {
  word: string;
  stepId: number;
  stepTitle: string;
  levels: number[];
}

const DeleteDataSection: React.FC<DeleteDataSectionProps> = ({
  selectedStep,
  selectedLevels,
  onStepChange,
  onLevelToggle,
}) => {
  const [deleteMode, setDeleteMode] = useState<DeleteMode>('by-level');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error' | 'info';
    text: string;
  } | null>(null);

  const allSteps = getAllSteps();

  // 레벨별 단어 목록 가져오기
  const levelWords = useMemo(() => {
    if (selectedLevels.length === 0) return [];
    
    const words = new Set<string>();
    selectedLevels.forEach(level => {
      const levelData = getLevelData(selectedStep, level);
      levelData.words.forEach(word => words.add(word));
    });
    
    return Array.from(words).sort();
  }, [selectedStep, selectedLevels]);

  // 검색 결과 (모든 단계에서 검색)
  const searchResults = useMemo((): WordInfo[] => {
    if (!searchQuery.trim()) return [];
    
    const results: WordInfo[] = [];
    const query = searchQuery.toLowerCase();
    
    allSteps.forEach(step => {
      const stepData = getStepData(step.id);
      Object.keys(stepData.levels).forEach(levelKey => {
        const level = parseInt(levelKey);
        const levelData = getLevelData(step.id, level);
        
        levelData.words.forEach(word => {
          if (word.toLowerCase().includes(query)) {
            // 이미 추가된 단어인지 확인
            const existingIndex = results.findIndex(r => 
              r.word === word && r.stepId === step.id
            );
            
            if (existingIndex >= 0) {
              // 기존 항목에 레벨 추가
              if (!results[existingIndex].levels.includes(level)) {
                results[existingIndex].levels.push(level);
                results[existingIndex].levels.sort((a, b) => a - b);
              }
            } else {
              // 새 항목 추가
              results.push({
                word,
                stepId: step.id,
                stepTitle: `${step.title} - ${step.subtitle}`,
                levels: [level]
              });
            }
          }
        });
      });
    });
    
    return results.sort((a, b) => a.word.localeCompare(b.word));
  }, [searchQuery, allSteps]);

  // 단어 선택/해제
  const handleWordToggle = useCallback((word: string) => {
    setSelectedWords(prev => {
      if (prev.includes(word)) {
        return prev.filter(w => w !== word);
      } else {
        return [...prev, word];
      }
    });
  }, []);

  // 전체 선택/해제
  const handleSelectAll = useCallback(() => {
    const availableWords = deleteMode === 'by-level' 
      ? levelWords 
      : searchResults.map(r => r.word);
      
    if (selectedWords.length === availableWords.length) {
      setSelectedWords([]);
    } else {
      setSelectedWords(availableWords);
    }
  }, [deleteMode, levelWords, searchResults, selectedWords.length]);

  // 데이터 삭제 처리
  const handleDeleteData = useCallback(async () => {
    if (selectedWords.length === 0) {
      setStatusMessage({ type: 'error', text: '삭제할 단어를 선택해주세요.' });
      return;
    }

    try {
      // 여기서 실제 데이터 삭제 로직을 구현
      // 현재는 콘솔에 출력
      if (deleteMode === 'by-level') {
        console.log('레벨별 삭제:', {
          step: selectedStep,
          levels: selectedLevels,
          words: selectedWords
        });
      } else {
        const deleteInfo = selectedWords.map(word => {
          const info = searchResults.find(r => r.word === word);
          return {
            word,
            stepId: info?.stepId,
            levels: info?.levels
          };
        });
        console.log('검색 결과 삭제:', deleteInfo);
      }

      setStatusMessage({ 
        type: 'success', 
        text: `${selectedWords.length}개의 단어가 성공적으로 삭제되었습니다!` 
      });

      // 선택 초기화
      setSelectedWords([]);
      
    } catch (error) {
      setStatusMessage({ 
        type: 'error', 
        text: '데이터 삭제 중 오류가 발생했습니다.' 
      });
    }
  }, [selectedWords, deleteMode, selectedStep, selectedLevels, searchResults]);

  return (
    <div>
      <FormSection>
        <SectionTitle>🗑️ 삭제 방식 선택</SectionTitle>
        
        <CheckboxGroup>
          <CheckboxItem>
            <input
              type="radio"
              name="delete-mode"
              checked={deleteMode === 'by-level'}
              onChange={() => setDeleteMode('by-level')}
            />
            레벨별 삭제
          </CheckboxItem>
          <CheckboxItem>
            <input
              type="radio"
              name="delete-mode"
              checked={deleteMode === 'by-search'}
              onChange={() => setDeleteMode('by-search')}
            />
            검색으로 삭제
          </CheckboxItem>
        </CheckboxGroup>
      </FormSection>

      {deleteMode === 'by-level' ? (
        <FormSection>
          <SectionTitle>📍 단계 및 레벨 선택</SectionTitle>
          
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
            <Label>레벨 선택</Label>
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

          {levelWords.length > 0 && (
            <FormGroup>
              <Label>단어 목록 ({levelWords.length}개)</Label>
              <ButtonGroup style={{ justifyContent: 'flex-start', marginBottom: '1rem' }}>
                <Button $variant="secondary" onClick={handleSelectAll}>
                  {selectedWords.length === levelWords.length ? '전체 해제' : '전체 선택'}
                </Button>
              </ButtonGroup>
              <WordList>
                {levelWords.map(word => (
                  <WordItem
                    key={word}
                    $selected={selectedWords.includes(word)}
                    onClick={() => handleWordToggle(word)}
                  >
                    <span>{word}</span>
                    {selectedWords.includes(word) && <span>✓</span>}
                  </WordItem>
                ))}
              </WordList>
            </FormGroup>
          )}
        </FormSection>
      ) : (
        <FormSection>
          <SectionTitle>🔍 단어 검색</SectionTitle>
          
          <SearchContainer>
            <Label htmlFor="search-input">단어 검색</Label>
            <Input
              id="search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="검색할 단어를 입력하세요..."
            />
            <HelpText>
              모든 단계에서 입력한 단어를 포함하는 항목을 검색합니다.
            </HelpText>
          </SearchContainer>

          {searchResults.length > 0 && (
            <FormGroup>
              <Label>검색 결과 ({searchResults.length}개)</Label>
              <ButtonGroup style={{ justifyContent: 'flex-start', marginBottom: '1rem' }}>
                <Button $variant="secondary" onClick={handleSelectAll}>
                  {selectedWords.length === searchResults.length ? '전체 해제' : '전체 선택'}
                </Button>
              </ButtonGroup>
              <WordList>
                {searchResults.map((item, index) => (
                  <WordItem
                    key={`${item.word}-${item.stepId}-${index}`}
                    $selected={selectedWords.includes(item.word)}
                    onClick={() => handleWordToggle(item.word)}
                  >
                    <div>
                      <div style={{ fontWeight: 'bold' }}>{item.word}</div>
                      <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>
                        {item.stepTitle} - 레벨 {item.levels.join(', ')}
                      </div>
                    </div>
                    {selectedWords.includes(item.word) && <span>✓</span>}
                  </WordItem>
                ))}
              </WordList>
            </FormGroup>
          )}

          {searchQuery && searchResults.length === 0 && (
            <HelpText style={{ textAlign: 'center', padding: '2rem' }}>
              검색 결과가 없습니다.
            </HelpText>
          )}
        </FormSection>
      )}

      {((deleteMode === 'by-level' && levelWords.length > 0) || 
        (deleteMode === 'by-search' && searchResults.length > 0)) && (
        <FormSection>
          <SectionTitle>⚠️ 삭제 실행</SectionTitle>
          
          <HelpText>
            선택된 단어: {selectedWords.length}개
            {selectedWords.length > 0 && (
              <div style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
                {selectedWords.join(', ')}
              </div>
            )}
          </HelpText>

          <ButtonGroup>
            <Button 
              $variant="danger" 
              onClick={handleDeleteData}
              disabled={selectedWords.length === 0}
            >
              🗑️ 선택한 단어 삭제
            </Button>
          </ButtonGroup>
        </FormSection>
      )}

      {statusMessage && (
        <StatusMessage $type={statusMessage.type}>
          {statusMessage.text}
        </StatusMessage>
      )}
    </div>
  );
};

export default DeleteDataSection;
