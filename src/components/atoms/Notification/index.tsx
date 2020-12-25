import React from 'react';

import * as S from './styles';

type NotificationProps = {
  hasNotification?: boolean;
  color?: string;
};

const Notification: React.FC<NotificationProps> = ({
  hasNotification,
  color,
}) => {
  return (
    <S.IconWrapper>
      <S.Icon name="ios-notifications-outline" color={color} />
      {hasNotification && <S.BulletNotification />}
    </S.IconWrapper>
  );
};

export default Notification;
