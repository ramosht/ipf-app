import styled from 'styled-components/native';

import theme from '@styles/Theme';

type HeaderProps = {
  type: 'main' | 'page';
  hasDescription: boolean;
};

export const Header = styled.View<HeaderProps>`
  position: relative;
  border-bottom-right-radius: ${props => (props.hasDescription ? '85px' : '0')};
  overflow: hidden;
`;

export const HeaderDescriptionWrapper = styled.View`
  padding-left: 16px;
  height: 78px;
  width: 80%;
  justify-content: center;
`;

export const HeaderBackground = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.View<WrapperProps>`
  flex: 1;
  background-color: ${theme.colors.white};
`;

export const Body = styled.View`
  padding: 16px;
`;
