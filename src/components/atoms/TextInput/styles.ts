import theme from '@styles/Theme';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  border-width: 1px;
  border-color: ${theme.colors.lightGrey};
  padding: 4px 15px;
  border-radius: 8px;
`;

export const TextInputComponent = styled.TextInput`
  color: ${theme.colors.midGrey};
`;
