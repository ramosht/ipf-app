import theme from '@styles/Theme';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
`;

export const HeaderWrapper = styled.View``;

export const HeaderBrackground = styled.ImageBackground`
  height: 256px;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  border-bottom-right-radius: 55px;
  border-bottom-left-radius: 55px;
  overflow: hidden;
`;

export const Body = styled.View`
  background-color: #fff;
  padding-horizontal: 30px;
  border-top-right-radius: 35px;
  border-top-left-radius: 35px;
  flex: 1;
  overflow: hidden;
`;
