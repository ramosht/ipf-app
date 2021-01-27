import theme from '@styles/Theme';
import styled from 'styled-components/native';

type WrapperProps = {
  disabled: boolean;
};

export const Wrapper = styled.TouchableOpacity<WrapperProps>`
  background-color: ${props =>
    props.disabled ? `${theme.colors.secondary}90` : theme.colors.secondary};
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-radius: 8px;
`;
