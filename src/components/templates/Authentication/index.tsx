import { Text } from '@components/typography';
import React from 'react';

import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import theme from '@styles/Theme';
import { GoBack } from '@components/atoms';
import backgroundLogin from '../../../assets/images/backgroundLogin.png';
import * as S from './styles';
import Panel from '../../organisms/Panel';

type AuthenticationProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  buttonDisabled: boolean;
  actionOnPress: () => void;
  buttonText: string;
};

const Authentication: React.FC<AuthenticationProps> = ({
  children,
  title,
  description,
  buttonDisabled,
  actionOnPress,
  buttonText,
}) => {
  return (
    <S.Wrapper>
      <S.Background source={backgroundLogin} resizeMode="cover">
        <Panel
          buttonDisabled={buttonDisabled}
          actionOnPress={actionOnPress}
          title={title}
          description={description}
          buttonText={buttonText}
        >
          {children}
        </Panel>
      </S.Background>
    </S.Wrapper>
  );
};

export default Authentication;
