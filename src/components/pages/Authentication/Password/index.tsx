import React, { useCallback, useEffect, useState } from 'react';

import { AuthenticationTemplate } from '@templates';
import { PasswordInput } from '@atoms/index';
import { passwordRegex } from '@config/utils';
import { Text } from '@components/typography';
import { useNavigation } from '@react-navigation/native';
import { useAuthentication } from '../../../../contexts/authentication/authentication.context';
import * as S from './styles';

const Password: React.FC = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const { setUserIsAuthenticated } = useAuthentication();

  const handleLogin = useCallback(() => {
    setUserIsAuthenticated(true);
  }, [setUserIsAuthenticated]);

  useEffect(() => {
    if (passwordRegex.test(password)) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [password]);

  return (
    <AuthenticationTemplate
      description="Agora, digite sua senha"
      actionOnPress={() => handleLogin()}
      buttonDisabled={buttonDisabled}
      buttonText="Continuar"
    >
      <PasswordInput
        value={password}
        setValue={setPassword}
        wrapperStyle={{ width: '100%' }}
        placeholder="Senha"
        autoFocus
      />

      <S.ForgotPassword onPress={() => navigation.navigate('RecoverPassword')}>
        <Text
          fontSize={13}
          style={{ borderBottomWidth: 0.5, paddingBottom: 2 }}
        >
          Esqueci minha senha
        </Text>
      </S.ForgotPassword>
    </AuthenticationTemplate>
  );
};

export default Password;
