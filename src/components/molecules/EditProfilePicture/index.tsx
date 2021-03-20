import theme from '@styles/Theme';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useUser } from '../../../contexts/user/user.context';
import BlankAvatar from '../../../assets/images/blank-avatar.jpeg';

import * as S from './styles';

type EditProfilePicture = {
  style: Object;
};

const EditProfilePicture: React.FC<EditProfilePicture> = ({ style }) => {
  const { user } = useUser();

  return (
    <TouchableWithoutFeedback style={style}>
      <S.WrapperContent>
        {user?.image === '' ? (
          <S.ProfilePicture source={BlankAvatar} />
        ) : (
          <S.ProfilePicture source={{ uri: user?.image }} />
        )}
        <S.IconWrapper style={{ elevation: 16 }}>
          <MaterialIcons name="edit" size={16} color={theme.colors.primary} />
        </S.IconWrapper>
      </S.WrapperContent>
    </TouchableWithoutFeedback>
  );
};

export default EditProfilePicture;
