import React, { useCallback, useEffect, useState } from 'react';

import { AuthenticationTemplate } from '@templates';
import { TextInput } from '@atoms/index';
import { useNavigation } from '@react-navigation/native';
import { emailValidation } from 'js-essentials-functions';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleLogin = useCallback(() => {
    const asyncHandleLogin = async () => {
      navigation.navigate('Password');
      // navigation.navigate('ConfirmCode', { type: 'signup' });
    };

    asyncHandleLogin();
  }, [navigation]);

  useEffect(() => {
    if (emailValidation(email)) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [email]);

  return (
    <AuthenticationTemplate
      actionOnPress={handleLogin}
      buttonDisabled={buttonDisabled}
      title="Seja bem-vindo(a)"
      description="ao aplicativo da Igreja Presbiteriana da Filadélfia. Para entrar, insira seu e-mail abaixo."
      buttonText="Continuar"
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

export default Login;
