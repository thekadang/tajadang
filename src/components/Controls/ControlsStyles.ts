/**
 * Controls 컴포넌트의 Styled Components
 */

import styled from 'styled-components';
import { Card, Button, FlexContainer, media } from '../common/StyledComponents';

// 컨트롤 섹션
export const ControlsSection = styled.section`
  margin: 2rem 0;
`;

// 컨트롤 컨테이너
export const ControlsContainer = styled(Card)`
  text-align: center;
  padding: 2rem;
  
  ${media.mobile(`
    padding: 1.5rem;
  `)}
`;

// 컨트롤 버튼 그룹
export const ControlsGroup = styled(FlexContainer)`
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  
  ${media.mobile(`
    gap: 0.8rem;
  `)}
`;

// 기본 컨트롤 버튼
export const ControlButton = styled(Button)`
  min-width: 140px;
  
  ${media.mobile(`
    min-width: 120px;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  `)}
`;

// 컨트롤 제목
export const ControlsTitle = styled.h3`
  margin-bottom: 1.5rem;
  color: #333;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: 'Jalnan2', sans-serif;
  
  ${media.mobile(`
    font-size: 1.1rem;
    margin-bottom: 1rem;
  `)}
`;
