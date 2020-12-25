import React from 'react';

import * as S from './styles';

type ProfilePictureProps = {
  style?: React.CSSProperties;
};

const ProfilePicture: React.FC<ProfilePictureProps> = ({ style }) => {
  return (
    <S.PictureWrapper style={{ ...style }}>
      <S.Picture
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1319078690853167106/EeOnRVMS_400x400.jpg',
        }}
      />
    </S.PictureWrapper>
  );
};

export default ProfilePicture;
