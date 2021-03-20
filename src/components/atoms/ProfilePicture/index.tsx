import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import * as S from './styles';
import { useUser } from '../../../contexts/user/user.context';
import BlankAvatar from '../../../assets/images/blank-avatar.jpeg';

type ProfilePictureProps = {
  style?: React.CSSProperties;
};

const ProfilePicture: React.FC<ProfilePictureProps> = ({ style }) => {
  const { user } = useUser();
  const navigation = useNavigation();

  return (
    <S.PictureWrapper
      onPress={() => navigation.navigate('Profile')}
      style={{ ...style }}
    >
      {user?.image === '' ? (
        <S.Picture source={BlankAvatar} />
      ) : (
        <S.Picture
          source={{
            uri: user?.image,
          }}
        />
      )}
    </S.PictureWrapper>
  );
};

export default ProfilePicture;
