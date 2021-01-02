import styled from 'styled-components/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { theme } from '@styles/Theme';

export const SearchWrapper = styled.View`
  position: relative;
  height: 42px;
  padding-left: 32px;
  border-bottom-color: ${theme.colors.lightGrey};
  border-bottom-width: 1px;
`;

export const SearchIcon = styled(FontAwesome5)`
  position: absolute;
  bottom: 14px;
  left: 13px;
`;

export const SearchInput = styled.TextInput`
  color: ${theme.colors.grey};
`;
