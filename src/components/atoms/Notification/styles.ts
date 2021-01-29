import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '@styles/Theme';

type IconProps = {
  color: string;
};

// eslint-disable-next-line prettier/prettier
export const Icon = styled(Ionicons) <IconProps>`
  font-size: 28px;
  color: ${props => props.color || theme.colors.lightGrey};
`;

export const IconWrapper = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  position: relative;
  width: 27px;
`;

export const BulletNotification = styled.View`
  width: 8px;
  height: 8px;
  background-color: ${theme.colors.secondary};
  border-radius: 8px;
  position: absolute;
  right: 3px;
  top: 3px;
`;
