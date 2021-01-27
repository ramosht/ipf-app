import React, { useState } from 'react';

import { AuthenticationTemplate } from '@templates';
import { Button, GoBack, TextInputAlternate } from '@atoms/index';
import { Text } from '@components/typography';
import theme from '@styles/Theme';
import { onChange } from 'react-native-reanimated';
import { Header } from '@molecules/index';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';

type SignupProps = {
  children?: React.ReactNode;
};

const Signup: React.FC<SignupProps> = ({ children }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  return (
    <AuthenticationTemplate>
      <S.Header>
        <TouchableOpacity>
          <GoBack color={theme.colors.white} />
        </TouchableOpacity>
      </S.Header>

      <Text
        fontSize={18}
        style={{ marginBottom: 32 }}
        color={theme.colors.white}
      >
        Faça seu cadastro
      </Text>

      <TextInputAlternate
        value={name}
        setValue={setName}
        placeholder="Nome completo"
        wrapperStyle={{ width: '100%' }}
      />

      <TextInputAlternate
        value={phone}
        setValue={setPhone}
        placeholder="Celular"
        wrapperStyle={{ width: '100%' }}
        keyboardType="phone-pad"
        autoCompleteType="tel"
      />

      <TextInputAlternate
        value={email}
        setValue={setEmail}
        placeholder="Email"
        wrapperStyle={{ width: '100%' }}
        keyboardType="email-address"
        autoCompleteType="email"
        autoCapitalize="none"
      />

      <Button
        style={{ width: '100%' }}
        actionOnPress={() =>
          navigation.navigate('ConfirmCode', { type: 'signup' })
        }
      >
        Entrar
      </Button>
    </AuthenticationTemplate>
  );
};

export default Signup;
