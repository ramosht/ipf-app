import React, { useCallback } from 'react';

import { Text } from '@components/typography';

import theme from '@styles/Theme';
import * as S from './styles';

type MoreItemProps = {
  style?: any;
  children?: React.ReactNode;
  path: string;
};

const MoreItem: React.FC<MoreItemProps> = ({ style, children, path }) => {
  const actionOnPress = useCallback(() => {
    console.log(path);
  }, [path]);

  return (
    <S.Wrapper style={style} onPress={() => actionOnPress(path)}>
      <Text fontSize={14} color={theme.colors.grey}>
        {children}
      </Text>
      <S.Icon name="chevron-right" size={16} color={theme.colors.primary} />
    </S.Wrapper>
  );
};

export default MoreItem;
