import theme from '@styles/Theme';
import styled from 'styled-components/native';

type WrapperProps = {
  editable?: boolean;
};

export const Wrapper = styled.View<WrapperProps>`
  border-width: 1px;
  border-color: ${theme.colors.lightGrey}50;
  padding: 0 15px;
  border-radius: 8px;
  background-color: ${props =>
    props.editable === false ? '#00000010' : 'transparent'};
`;

export const TextInputComponent = styled.TextInput`
  color: ${theme.colors.midGrey};
`;
