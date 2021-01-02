import React from 'react';

import { Text } from '@components/typography';
import theme from '@styles/Theme';
import * as S from './styles';

type FilterItemProps = {
  style?: any;
};

const FilterItem: React.FC<FilterItemProps> = ({ style }) => {
  return (
    <S.Wrapper style={style}>
      <Text weight="Bold" fontSize={12} color={theme.colors.white}>
        Filter Item
      </Text>
    </S.Wrapper>
  );
};

export default FilterItem;
