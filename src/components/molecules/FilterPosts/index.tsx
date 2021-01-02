import { FilterItem } from '@components/atoms';
import { Text } from '@components/typography';
import React from 'react';

import * as S from './styles';

type CategoryFilterProps = {
  style?: any;
};

const CategoryFilter: React.FC<CategoryFilterProps> = ({ style }) => {
  return (
    <S.Wrapper style={style}>
      <Text style={{ marginRight: 18 }}>Filtrar por: </Text>
      <S.Categories
        horizontal
        data={[0, 1, 2]}
        renderItem={() => <FilterItem style={{ marginRight: 10 }} />}
        showsHorizontalScrollIndicator={false}
      />
    </S.Wrapper>
  );
};

export default CategoryFilter;
