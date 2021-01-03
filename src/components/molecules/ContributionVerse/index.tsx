import { Text } from '@components/typography';
import React from 'react';
import theme from '@styles/Theme';

import * as S from './styles';

const Component: React.FC = () => {
  return (
    <S.VerseWrapper>
      <Text
        fontSize={14}
        color={theme.colors.midGrey}
        style={{ textAlign: 'center' }}
      >
        &quot;Cada um deve decidir em seu coração quanto dar. Não contribuam com
        relutância ou por obrigação. Pois Deus ama quem dá com alegreia.&quot;
      </Text>
      <Text
        fontSize={14}
        color={theme.colors.midGrey}
        style={{ textAlign: 'center', marginTop: 8 }}
      >
        2 Coríntios 9:7
      </Text>
    </S.VerseWrapper>
  );
};

export default Component;
