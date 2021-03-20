import React from 'react';
import { theme } from '@styles/Theme';

import { Notification, ProfilePicture, GoBack } from '@atoms/index';
import { Text } from '@typography/index';
import * as S from './styles';

type HeaderPages = {
  title?: string;
  goBack?: boolean;
  hasDescription?: boolean;
};

const HeaderPages: React.FC<HeaderPages> = ({
  title,
  goBack = true,
  hasDescription,
}) => {
  return (
    <S.Header hasDescription={hasDescription}>
      <S.GoBackWrapper>
        {goBack && <GoBack color={theme.colors.white} />}
      </S.GoBackWrapper>
      <S.TitleWrapper>
        {title && (
          <Text
            style={{
              textAlign: 'center',
              textShadowColor: 'rgba(0, 0, 0, 0.5)',
              textShadowOffset: { width: 1, height: 1 },
              textShadowRadius: 4,
            }}
            color={theme.colors.white}
            fontSize={16}
            weight="Medium"
          >
            {title}
          </Text>
        )}
      </S.TitleWrapper>
      <S.ButtonsWrapper>
        {/* <Notification color={theme.colors.white} /> */}
        <ProfilePicture style={{ marginLeft: 14 }} />
      </S.ButtonsWrapper>
    </S.Header>
  );
};

export default HeaderPages;
