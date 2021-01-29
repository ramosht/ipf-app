import { Text } from '@components/typography';
import React from 'react';
import { View } from 'react-native';
import moment from 'moment';

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
  return (
    <S.Wrapper>
      <View>
        <Text weight="Medium" fontSize={15}>
          {title}
        </Text>
        <Text fontSize={14}>{description}</Text>
      </View>
      <Text>{moment.utc(date).format('DD/MM/YYYY')}</Text>
    </S.Wrapper>
  );
};

export default Notification;
