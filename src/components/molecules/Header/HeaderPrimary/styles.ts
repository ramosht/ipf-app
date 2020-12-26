import styled from 'styled-components/native';

import { theme } from '@styles/Theme';

export const Header = styled.View`
  width: 100%;
  padding: 22px 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.white};
`;

export const HeaderButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
