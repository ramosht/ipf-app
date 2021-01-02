import React from 'react';
import { theme } from '@styles/Theme';

import * as S from './styles';

type ComponentProps = {
  style?: any;
};

const Component: React.FC<ComponentProps> = ({ style }) => {
  return (
    <S.SearchWrapper style={style}>
      <S.SearchIcon color={theme.colors.lightGrey} size={12} name="search" />
      <S.SearchInput placeholder="Pesquisar" />
    </S.SearchWrapper>
  );
};

export default Component;
