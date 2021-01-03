import React from 'react';

import { Text } from '@components/typography';
import theme from '@styles/Theme';
import * as S from './styles';

type FilterItemProps = {
  style?: any;
  label: string;
  active?: boolean;
  setFilter: (filter: string) => void;
};

const FilterItem: React.FC<FilterItemProps> = ({
  style,
  label,
  active = false,
  setFilter,
}) => {
  return (
    <S.Wrapper onPress={() => setFilter(label)} style={style} active={active}>
      <Text weight="Bold" fontSize={12} color={theme.colors.white}>
        {label}
      </Text>
    </S.Wrapper>
  );
};

export default FilterItem;
