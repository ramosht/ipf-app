import { Text } from '@components/typography';
import React, { useCallback } from 'react';
import { View } from 'react-native';
// eslint-disable-next-line import/no-duplicates
import { formatDistance } from 'date-fns';
// eslint-disable-next-line import/no-duplicates
import pt from 'date-fns/locale/pt';

import * as S from './styles';

type NotificationProps = {
  title: string;
  description: string;
  date: Date;
};

const Notification: React.FC<NotificationProps> = ({
  title,
  description,
  date,
}) => {
  const getDuration = useCallback(date => {
    return formatDistance(new Date(date), new Date(), { locale: pt });
  }, []);

  return (
    <S.Wrapper>
      <View style={{ maxWidth: '75%' }}>
        <Text weight="Medium" fontSize={16} style={{ marginBottom: 4 }}>
          {title}
        </Text>
        <Text fontSize={14}>{description}</Text>
      </View>
      <Text weight="MediumItalic">{getDuration(date)}</Text>
    </S.Wrapper>
  );
};

export default Notification;
