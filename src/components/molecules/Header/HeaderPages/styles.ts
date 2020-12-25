import styled from 'styled-components/native';

import { theme } from '@styles/Theme';

export const Header = styled.View`
  width: 100%;
  padding: 22px 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 14px;
`;

export const GoBackWrapper = styled.View`
  width: 20%;
`;

export const TitleWrapper = styled.View`
  width: 20%;
  align-items: center;
`;
