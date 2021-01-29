import styled from 'styled-components/native';

import { theme } from '@styles/Theme';

type HeaderProps = {
  hasDescription?: boolean;
};

export const Header = styled.View<HeaderProps>`
  width: 100%;
  padding: 22px 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: ${props => (props.hasDescription ? '0.5px' : '0')};
  border-bottom-color: #fff;
`;

export const ButtonsWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 30%;
`;

export const Title = styled.Text`
  font-size: 14px;
`;

export const GoBackWrapper = styled.View`
  width: 30%;
`;

export const TitleWrapper = styled.View`
  width: 40%;
  align-items: center;
`;
