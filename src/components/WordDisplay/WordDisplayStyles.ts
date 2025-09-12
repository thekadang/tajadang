/**
 * WordDisplay 컴포넌트의 Styled Components
 */

import styled from 'styled-components';
import { Card, media } from '../common/StyledComponents';

// 단어 표시 섹션
export const WordSection = styled.section`
  margin: 1.5rem 0;
`;

// 단어 표시 컨테이너
export const WordContainer = styled(Card)`
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border: 3px solid #667eea;
  
  ${media.mobile(`
    padding: 1.5rem;
  `)}
`;

// 단어 텍스트
export const WordText = styled.h2`
  font-size: 4rem;
  font-weight: bold;
  color: #333;
  margin: 0;
  letter-spacing: 3px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Jalnan2', sans-serif;
  
  ${media.mobile(`
    font-size: 3rem;
    letter-spacing: 2px;
  `)}
`;

// 단어 라벨
export const WordLabel = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin: 0 0 1rem 0;
  font-weight: 500;
  
  ${media.mobile(`
    font-size: 1rem;
  `)}
`;
