import styled from 'styled-components/native';
import { theme } from '@styles/Theme';

type WrapperProps = {
  active: boolean;
};

export const Wrapper = styled.TouchableOpacity<WrapperProps>`
  background-color: ${props =>
    props.active ? theme.colors.primary : `${theme.colors.primary}80`};
  padding: 8px 20px;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  border-radius: 6px;
`;
