import theme from '@styles/Theme';
import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-top-width: 0.5px;
  border-top-color: ${theme.colors.lightGrey};
  background-color: ${theme.colors.white};
`;
