import React from 'react';
import { theme } from '@styles/Theme';

import * as S from './styles';

type ComponentProps = {
  style?: any;
  search: string;
  setSearch: (val: string) => void;
};

const Component: React.FC<ComponentProps> = ({ style, search, setSearch }) => {
  return (
    <S.SearchWrapper style={style}>
      <S.SearchIcon color={theme.colors.lightGrey} size={12} name="search" />
      <S.SearchInput
        value={search}
        onChangeText={e => setSearch(e)}
        placeholder="Pesquisar"
      />
    </S.SearchWrapper>
  );
};

export default Component;
