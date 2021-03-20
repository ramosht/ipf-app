import theme from '@styles/Theme';
import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

type DotProps = {
  isCurrent: boolean;
};

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const Dot = styled(Animatable.View)<DotProps>`
  width: ${(props) => (props.isCurrent ? '28px' : '18px')};
  height: 10px;
  background: ${(props) =>
    props.isCurrent ? theme.colors.primary : `${theme.colors.lightGrey}80`};
  border-radius: 50px;
  margin: 16px 2px 8px 2px;
`;
