import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { AuthenticationTemplate } from '@templates';
import { TextInput, PasswordInput } from '@atoms/index';
import { passwordRegex } from '@config/utils';
import { useRoute } from '@react-navigation/native';
import { PasswordDemands } from '@components/molecules';
import { useAuthentication } from '../../../../contexts/authentication/authentication.context';

const Password: React.FC = () => {
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const { setUserIsAuthenticated } = useAuthentication();
  const route = useRoute();

  const { type } = route.params;

  const handleAccountCreation = useCallback(() => {
    setUserIsAuthenticated(true);
  }, [setUserIsAuthenticated]);

  useEffect(() => {
    if (password === passwordConfirmation && passwordRegex.test(password)) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [password, passwordConfirmation]);

  const title = useMemo(() => {
    return type === 'signup' ? 'Cadastre sua senha' : 'Cadastre uma nova senha';
  }, [type]);

  const description = useMemo(() => {
    return type === 'signup'
      ? 'Chegou a hora de cadastrar sua senha. Confira abaixo os requisitos para uma senha segura:'
      : 'Confirmado! Agora, cadastre uma nova senha para atualizar sua conta.';
  }, [type]);

  return (
    <AuthenticationTemplate
      title={title}
      description={description}
      actionOnPress={() => handleAccountCreation()}
      buttonDisabled={buttonDisabled}
      buttonText="Continuar"
    >
      {type === 'signup' && (
        <TextInput
          value="guilhermeht.ramos@gmail.com"
          setValue={() => null}
          editable={false}
          wrapperStyle={{ width: '100%', marginBottom: 8 }}
        />
      )}

      <PasswordInput
        value={password}
        setValue={setPassword}
        wrapperStyle={{ width: '100%', marginBottom: 8 }}
        placeholder="Digite sua senha"
        autoFocus
      />
      <PasswordInput
        value={passwordConfirmation}
        setValue={setPasswordConfirmation}
        wrapperStyle={{ width: '100%' }}
        placeholder="Confirme sua senha"
      />
      <PasswordDemands password={password} />
    </AuthenticationTemplate>
  );
};

export default Password;
