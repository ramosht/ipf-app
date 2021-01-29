import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useNotifications } from '../../../contexts/notifications/notifications.context';

import * as S from './styles';

type NotificationProps = {
  color?: string;
};

const Notification: React.FC<NotificationProps> = ({ color }) => {
  const navigation = useNavigation();
  const { notifications } = useNotifications();

  return (
    <S.IconWrapper onPress={() => navigation.navigate('Notifications')}>
      <S.Icon name="ios-notifications-outline" color={color} />
      {notifications.length > 0 && <S.BulletNotification />}
    </S.IconWrapper>
  );
};

export default Notification;
