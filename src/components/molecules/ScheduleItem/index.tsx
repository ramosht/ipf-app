import { Text } from '@components/typography';
import { theme } from '@styles/Theme';
import React from 'react';

import * as S from './styles';

type ScheduleItemProps = {
  children?: React.ReactNode;
};

const ScheduleItem: React.FC<ScheduleItemProps> = ({ children }) => {
  return (
    <S.Wrapper style={{ elevation: 5 }}>
      <S.ThumbnailWrapper />
      <S.Thumbnail
        source={{
          uri:
            'https://instagram.fsod2-1.fna.fbcdn.net/v/t51.2885-15/e35/124083022_2932031267068211_4536462551301074391_n.jpg?_nc_ht=instagram.fsod2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=9ggIyyoOeSwAX_cVVvh&tp=1&oh=3195834bb2ccbaaf71f681bcd52c2541&oe=601F7534',
        }}
      />
      <S.ContentWrapper>
        <Text fontSize={14} color={theme.colors.primary}>
          22 de junho, 2020
        </Text>
        <Text fontSize={18} weight="Medium" color={theme.colors.primary}>
          Escola bíblica dominical
        </Text>
        <S.TimeWrapper>
          <S.ClockIcon name="clockcircleo" color={theme.colors.midGrey} />
          <Text>Às 10h</Text>
        </S.TimeWrapper>
        <S.ArrowRight name="east" size={18} color={theme.colors.primary} />
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default ScheduleItem;
