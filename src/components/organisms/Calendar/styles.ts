import styled from 'styled-components/native';
import { theme } from '@styles/Theme';
import Entypo from 'react-native-vector-icons/Entypo';

export const CalendarWrapper = styled.View`
  background-color: ${theme.colors.white};
  padding: 24px 0;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  height: 360px;
`;

export const Arrow = styled(Entypo)`
  color: ${theme.colors.grey};
  font-size: 16px;
`;
