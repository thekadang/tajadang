/**
 * 데이터 관리 페이지
 * 단계별 데이터 추가/삭제 기능 제공
 */

import React, { useState, useCallback } from 'react';
import { StepData, CurrentStep } from '../../types';
import { getStepData, getAllSteps } from '../../data/steps';
import { DataManagerContainer, TabContainer, Tab, ContentSection } from './DataManagerStyles';
import AddDataSection from './AddDataSection';
import DeleteDataSection from './DeleteDataSection';
import KeypadReference from './KeypadReference';

type TabType = 'add' | 'delete';

const DataManager: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('add');
  const [selectedStep, setSelectedStep] = useState<number>(1);
  const [selectedLevels, setSelectedLevels] = useState<number[]>([1]);

  // 탭 변경 핸들러
  const handleTabChange = useCallback((tab: TabType) => {
    setActiveTab(tab);
  }, []);

  // 단계 변경 핸들러
  const handleStepChange = useCallback((stepId: number) => {
    setSelectedStep(stepId);
    setSelectedLevels([1]); // 단계 변경시 레벨 초기화
  }, []);

  // 레벨 선택 핸들러
  const handleLevelToggle = useCallback((level: number) => {
    setSelectedLevels(prev => {
      if (prev.includes(level)) {
        return prev.filter(l => l !== level);
      } else {
        return [...prev, level].sort((a, b) => a - b);
      }
    });
  }, []);

  return (
    <DataManagerContainer>
      <h1>📊 데이터 관리</h1>
      <p>단계별 연습 데이터를 추가하거나 삭제할 수 있습니다.</p>

      {/* 탭 메뉴 */}
      <TabContainer>
        <Tab 
          $active={activeTab === 'add'} 
          onClick={() => handleTabChange('add')}
        >
          ➕ 데이터 추가
        </Tab>
        <Tab 
          $active={activeTab === 'delete'} 
          onClick={() => handleTabChange('delete')}
        >
          🗑️ 데이터 삭제
        </Tab>
      </TabContainer>

      {/* 컨텐츠 영역 */}
      <ContentSection>
        {activeTab === 'add' ? (
          <div style={{ display: 'flex', gap: '2rem' }}>
            {/* 왼쪽: 데이터 추가 폼 */}
            <div style={{ flex: 1 }}>
              <AddDataSection
                selectedStep={selectedStep}
                selectedLevels={selectedLevels}
                onStepChange={handleStepChange}
                onLevelToggle={handleLevelToggle}
              />
            </div>
            
            {/* 오른쪽: 키패드 참고 */}
            <div style={{ flex: 1 }}>
              <KeypadReference />
            </div>
          </div>
        ) : (
          <DeleteDataSection
            selectedStep={selectedStep}
            selectedLevels={selectedLevels}
            onStepChange={handleStepChange}
            onLevelToggle={handleLevelToggle}
          />
        )}
      </ContentSection>
    </DataManagerContainer>
  );
};

export default DataManager;
