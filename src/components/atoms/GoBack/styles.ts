import styled from 'styled-components/native';
import { theme } from '@styles/Theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Icon = styled(MaterialIcons)`
  font-size: 28px;
  color: ${props => props.color || theme.colors.lightGrey};
`;
