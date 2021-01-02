import styled from 'styled-components/native';

import theme from '@styles/Theme';

type HeaderProps = {
  type: 'main' | 'page';
};

export const Header = styled.View<HeaderProps>`
  position: relative;
  border-bottom-right-radius: 85px;
  overflow: hidden;
`;

export const HeaderDescriptionWrapper = styled.View`
  padding-left: 16px;
  height: 78px;
  width: 80%;
  justify-content: center;
`;

export const HeaderBackground = styled.ImageBackground`
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
`;

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
`;

export const Body = styled.View`
  padding: 16px;
`;
