import React, { useEffect, useState } from 'react';
import { emailValidation } from 'js-essentials-functions';

import { AuthenticationTemplate } from '@templates';
import { Button, GoBack, TextInput } from '@atoms/index';
import { Text } from '@components/typography';
import theme from '@styles/Theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';

type RecoverPasswordProps = {
  children?: React.ReactNode;
};

const RecoverPassword: React.FC<RecoverPasswordProps> = ({ children }) => {
  const [email, setEmail] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    if (emailValidation(email)) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [email]);

  return (
    <AuthenticationTemplate
      title="Esqueceu sua senha?"
      description="Insira abaixo o seu e-mail de cadastro e para enviarmos o código de
    recuperação"
      buttonText="Enviar código"
      actionOnPress={() =>
        navigation.navigate('ConfirmCode', { type: 'recoverPassword' })
      }
      buttonDisabled={buttonDisabled}
    >
      <TextInput
        value={email}
        setValue={setEmail}
        placeholder="Email"
        wrapperStyle={{ width: '100%' }}
        keyboardType="email-address"
        autoCompleteType="email"
        autoCapitalize="none"
      />
    </AuthenticationTemplate>
  );
};

export default RecoverPassword;
