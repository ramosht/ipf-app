import { FilterItem } from '@components/atoms';
import { Text } from '@components/typography';
import React from 'react';

import * as S from './styles';

type CategoryFilterProps = {
  style?: any;
  filters: Array<string>;
  setFilter: (filter: string) => void;
  filter: string;
};

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  style,
  filters,
  setFilter,
  filter,
}) => {
  return (
    <S.Wrapper style={style}>
      <Text style={{ marginRight: 18 }}>Filtrar por: </Text>
      <S.Categories
        horizontal
        data={filters}
        keyExtractor={(item: any) => item}
        renderItem={({ item, index }) => (
          <FilterItem
            label={item}
            setFilter={setFilter}
            active={filter === item}
            style={{ marginRight: 10 }}
          />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </S.Wrapper>
  );
};

export default CategoryFilter;
