import styled from 'styled-components/native';
import { theme } from '@styles/Theme';

export const Wrapper = styled.TouchableOpacity`
  background-color: ${theme.colors.primary};
  padding: 8px 20px;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  border-radius: 6px;
`;
