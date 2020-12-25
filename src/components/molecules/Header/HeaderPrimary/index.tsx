import React from 'react';

import { Logo, Notification, ProfilePicture } from '@atoms/index';
import * as S from './styles';

const HeaderPrimary: React.FC = () => {
  return (
    <S.Header style={{ elevation: 3 }}>
      <Logo />
      <S.HeaderButtons>
        <Notification hasNotification />
        <ProfilePicture style={{ marginLeft: 14 }} />
      </S.HeaderButtons>
    </S.Header>
  );
};

export default HeaderPrimary;
