import React, { useCallback, useEffect, useState } from 'react';

import { AuthenticationTemplate } from '@templates';
import { TextInput } from '@atoms/index';
import { useNavigation } from '@react-navigation/native';
import { emailValidation } from 'js-essentials-functions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from '@components/typography';
import theme from '@styles/Theme';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (emailValidation(email)) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [email]);

  return (
    <AuthenticationTemplate
      actionOnPress={() => navigation.navigate('Password', { email })}
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

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Username', {
            email,
          })
        }
        style={{ marginTop: 12, alignSelf: 'center' }}
        disabled={buttonDisabled}
      >
        <Text
          weight="Medium"
          fontSize={15}
          color={
            buttonDisabled
              ? `${theme.colors.secondary}90`
              : theme.colors.secondary
          }
          style={{ borderBottomWidth: 1, borderColor: theme.colors.secondary }}
        >
          Criar conta
        </Text>
      </TouchableOpacity>
    </AuthenticationTemplate>
  );
};

export default Login;
