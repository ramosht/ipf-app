import React from 'react';
import { theme } from '@styles/Theme';

import * as S from './styles';

type ComponentProps = {
  children?: React.ReactNode;
};

const Component: React.FC<ComponentProps> = ({ children }) => {
  return (
    <S.SearchWrapper>
      <S.SearchIcon color={theme.colors.lightGrey} size={12} name="search" />
      <S.SearchInput placeholder="Pesquisar" />
    </S.SearchWrapper>
  );
};

export default Component;
