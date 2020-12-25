import React from 'react';
import { theme } from '@styles/Theme';

import { Notification, ProfilePicture, GoBack } from '@atoms/index';
import { Text } from '@typography/index';
import * as S from './styles';

type HeaderPages = {
  title?: string;
  goBack?: boolean;
};

const HeaderPages: React.FC<HeaderPages> = ({ title, goBack = true }) => {
  return (
    <S.Header>
      {goBack && (
        <S.GoBackWrapper>
          <GoBack color={theme.colors.white} />
        </S.GoBackWrapper>
      )}
      {title && (
        <S.TitleWrapper>
          <Text color={theme.colors.white} fontSize={16} weight="Medium">
            {title}
          </Text>
        </S.TitleWrapper>
      )}
      <S.ButtonsWrapper>
        <Notification hasNotification color={theme.colors.white} />
        <ProfilePicture style={{ marginLeft: 14 }} />
      </S.ButtonsWrapper>
    </S.Header>
  );
};

export default HeaderPages;
