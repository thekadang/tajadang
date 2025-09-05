/**
 * 데이터 관리 페이지 스타일드 컴포넌트
 */

import styled from 'styled-components';

export const DataManagerContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: white;

  h1 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  > p {
    text-align: center;
    font-size: 1.1rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 1rem;
`;

export const Tab = styled.button<{ $active: boolean }>`
  padding: 1rem 2rem;
  border: none;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  
  ${props => props.$active ? `
    background: white;
    color: #667eea;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  ` : `
    background: rgba(255, 255, 255, 0.2);
    color: white;
    
    &:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: translateY(-1px);
    }
  `}
`;

export const ContentSection = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

export const FormSection = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const SectionTitle = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 1rem;
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  background: white;
  color: #333;
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  background: white;
  color: #333;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
  }

  &::placeholder {
    color: #999;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  background: white;
  color: #333;
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
  }

  &::placeholder {
    color: #999;
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const CheckboxItem = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
`;

export const Button = styled.button<{ $variant?: 'primary' | 'secondary' | 'danger' }>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  
  ${props => {
    switch (props.$variant) {
      case 'danger':
        return `
          background: #e74c3c;
          color: white;
          &:hover {
            background: #c0392b;
            transform: translateY(-1px);
          }
        `;
      case 'secondary':
        return `
          background: rgba(255, 255, 255, 0.2);
          color: white;
          &:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: translateY(-1px);
          }
        `;
      default:
        return `
          background: #4ecdc4;
          color: white;
          &:hover {
            background: #45b7d1;
            transform: translateY(-1px);
          }
        `;
    }
  }}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`;

export const WordList = styled.div`
  max-height: 300px;
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1rem;
`;

export const WordItem = styled.div<{ $selected?: boolean }>`
  padding: 0.75rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  ${props => props.$selected ? `
    background: rgba(255, 255, 255, 0.3);
    color: white;
  ` : `
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.9);
    
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  `}
`;

export const SearchContainer = styled.div`
  margin-bottom: 1.5rem;
`;

export const HelpText = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
  margin-top: 0.5rem;
  line-height: 1.4;
`;

export const ExampleBox = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1rem;
  margin-top: 1rem;
  border-left: 4px solid #4ecdc4;
`;

export const KeypadContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
`;

export const KeypadTitle = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 1.3rem;
  text-align: center;
  color: white;
`;

export const KeypadGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  max-width: 300px;
  margin: 0 auto;
`;

export const KeypadKey = styled.div<{ $number: number }>`
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 15px;
  color: white;
  font-weight: bold;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
  
  .number {
    font-size: 1.2rem;
    margin-bottom: 0.25rem;
  }
  
  .symbols {
    font-size: 0.9rem;
    opacity: 0.9;
  }
`;

export const StatusMessage = styled.div<{ $type: 'success' | 'error' | 'info' }>`
  padding: 1rem;
  border-radius: 10px;
  margin: 1rem 0;
  font-weight: bold;
  
  ${props => {
    switch (props.$type) {
      case 'success':
        return `
          background: rgba(46, 204, 113, 0.2);
          color: #2ecc71;
          border: 1px solid rgba(46, 204, 113, 0.3);
        `;
      case 'error':
        return `
          background: rgba(231, 76, 60, 0.2);
          color: #e74c3c;
          border: 1px solid rgba(231, 76, 60, 0.3);
        `;
      default:
        return `
          background: rgba(52, 152, 219, 0.2);
          color: #3498db;
          border: 1px solid rgba(52, 152, 219, 0.3);
        `;
    }
  }}
`;
