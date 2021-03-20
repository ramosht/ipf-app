import React, { useCallback, useEffect, useState } from 'react';

import { AuthenticationTemplate } from '@templates';
import { Loading, PasswordInput, TextInput } from '@atoms/index';
import { passwordRegex } from '@config/utils';
import { Text } from '@components/typography';
import { useNavigation, useRoute } from '@react-navigation/native';
import { gql, useMutation } from '@apollo/client';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUser } from '../../../../contexts/user/user.context';
import { useAuthentication } from '../../../../contexts/authentication/authentication.context';
import * as S from './styles';

const MUTATION_LOGIN = gql`
  mutation LOGIN($email: String!, $password: String!) {
    login(input: { identifier: $email, password: $password }) {
      jwt
      user {
        id
        username
        email
      }
    }
  }
`;

const Password: React.FC = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const { setUserIsAuthenticated, setToken } = useAuthentication();
  const { setUser, user } = useUser();
  const route = useRoute();
  const [loginError, setLoginError] = useState('');

  const { email } = route.params;

  useEffect(() => {
    if (passwordRegex.test(password)) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [password]);

  const [login, { loading: loadingLogin }] = useMutation(MUTATION_LOGIN);

  const handleLogin = useCallback(() => {
    login({ variables: { email, password } })
      .then((res) => {
        const { id } = res.data.login.user;
        const { jwt } = res.data.login;

        setUser({ ...user, id });
        AsyncStorage.setItem('@IPF:authenticatedUser', JSON.stringify({ id }));
        AsyncStorage.setItem('@IPF:token', jwt);
        AsyncStorage.setItem('@IPF:userIsAuthenticated', 'true');
        setUserIsAuthenticated(true);
      })
      .catch((error) => {
        if (
          error?.graphQLErrors[0] &&
          error?.graphQLErrors[0].extensions.exception.code === 400
        ) {
          setLoginError('Senha incorreta');
        } else {
          Alert.alert(
            'Ocorreu um erro',
            'Não foi possível fazer login. Tente novamente mais tarde.',
            [{ text: 'Tudo bem', onPress: () => navigation.goBack() }]
          );
        }
      });
  }, [
    email,
    login,
    password,
    navigation,
    setUser,
    setUserIsAuthenticated,
    user,
  ]);

  if (loadingLogin) {
    return <Loading />;
  }

  return (
    <AuthenticationTemplate
      description="Agora, digite sua senha"
      actionOnPress={() => handleLogin()}
      buttonDisabled={buttonDisabled}
      buttonText="Continuar"
    >
      <TextInput
        value={email}
        editable={false}
        wrapperStyle={{ width: '100%', marginBottom: 8 }}
        setValue={() => null}
      />

      <PasswordInput
        value={password}
        setValue={setPassword}
        wrapperStyle={{ width: '100%' }}
        placeholder="Senha"
        autoFocus
      />

      {loginError !== '' && (
        <Text color="#F00" style={{ alignSelf: 'center', marginTop: 8 }}>
          Senha incorreta
        </Text>
      )}

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
