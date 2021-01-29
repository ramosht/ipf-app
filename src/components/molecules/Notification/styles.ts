import theme from '@styles/Theme';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom-width: 0.5px;
  border-bottom-color: ${theme.colors.lightGrey};
`;
