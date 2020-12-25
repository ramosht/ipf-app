import styled from 'styled-components/native';

import { theme } from '@styles/Theme';

export const Header = styled.View`
  width: 100%;
  padding: 22px 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.white};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
`;

export const HeaderButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
