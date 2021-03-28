import { Text } from '@components/typography';
import { useNavigation } from '@react-navigation/native';
import { theme } from '@styles/Theme';
import React, { useMemo } from 'react';
import moment from 'moment';

import * as S from './styles';

type ScheduleItemProps = {
  style?: Object;
  eventId: string;
  title: string;
  time: string;
  thumbnail: string;
  location: string;
  description: string;
  type: string;
  date: string | Date;
};

const ScheduleItem: React.FC<ScheduleItemProps> = ({
  style,
  eventId,
  title,
  thumbnail,
  location,
  time,
  description,
  type,
  date,
}) => {
  const navigation = useNavigation();

  const getLocation = useMemo(() => {
    if (location === 'presential') {
      return 'Presencial';
    }

    if (location === 'online') {
      return 'Online';
    }

    if (location === 'presentialOnline') {
      return 'Presencial e Online';
    }
  }, [location]);

  return (
    <S.Wrapper
      style={{ elevation: 5, ...style }}
      onPress={() =>
        navigation.navigate('EventInfo', {
          event: {
            eventId,
            title,
            thumbnail,
            location,
            time,
            description,
            type,
            date,
          },
        })
      }
    >
      <S.ThumbnailWrapper />
      <S.Thumbnail
        source={{
          uri: thumbnail,
        }}
      />
      <S.ContentWrapper>
        <Text fontSize={14} weight="Medium">
          {getLocation}
        </Text>
        <Text fontSize={18} weight="Medium" color={theme.colors.primary}>
          {title}
        </Text>
        <S.TimeWrapper>
          <S.ClockIcon name="clockcircleo" color={theme.colors.midGrey} />
          <Text>{`Às ${time.split(':')[0]}h${time.split(':')[1]}`}</Text>
        </S.TimeWrapper>
        <S.ArrowRight name="east" size={18} color={theme.colors.primary} />
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default ScheduleItem;
