import theme from '@styles/Theme';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useUser } from '../../../contexts/user/user.context';

import * as S from './styles';

type EditProfilePicture = {
  style: Object;
};

const EditProfilePicture: React.FC<EditProfilePicture> = ({ style }) => {
  const { user } = useUser();

  return (
    <TouchableWithoutFeedback style={style}>
      <S.WrapperContent>
        <S.ProfilePicture source={{ uri: user?.image }} />
        <S.IconWrapper style={{ elevation: 16 }}>
          <MaterialIcons name="edit" size={16} color={theme.colors.primary} />
        </S.IconWrapper>
      </S.WrapperContent>
    </TouchableWithoutFeedback>
  );
};

export default EditProfilePicture;
