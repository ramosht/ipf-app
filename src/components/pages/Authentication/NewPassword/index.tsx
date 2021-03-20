import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { AuthenticationTemplate } from '@templates';
import { TextInput, PasswordInput, Loading } from '@atoms/index';
import { passwordRegex } from '@config/utils';
import { useNavigation, useRoute } from '@react-navigation/native';
import { PasswordDemands } from '@components/molecules';
import { gql, useMutation } from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';
import { useUser } from '../../../../contexts/user/user.context';
import { useAuthentication } from '../../../../contexts/authentication/authentication.context';

const MUTATION_SIGNUP = gql`
  mutation CREATE_USER_MUTATION(
    $username: String!
    $email: String!
    $password: String!
    $phone: String!
    $birthday: Date!
  ) {
    createUser(
      input: {
        data: {
          username: $username
          email: $email
          password: $password
          phone: $phone
          birthday: $birthday
        }
      }
    ) {
      user {
        id
        username
        email
        phone
        birthday
      }
    }
  }
`;

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
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const { user, setUser } = useUser();
  const { setUserIsAuthenticated } = useAuthentication();
  const route = useRoute();
  const navigation = useNavigation();

  const { type } = route.params;

  const [signup, { loading: loadingSignup }] = useMutation(MUTATION_SIGNUP);
  const [login, { loading: loadingLogin }] = useMutation(MUTATION_LOGIN);

  const handleAccountCreation = useCallback(() => {
    AsyncStorage.getItem('@IPF:newUser')
      .then((newUserStringfied: any) => {
        const newUser = JSON.parse(newUserStringfied);

        signup({ variables: { ...newUser, password } })
          .then(() => {
            login({ variables: { email: newUser.email, password } })
              .then((res) => {
                const { id } = res.data.login.user;
                const { jwt } = res.data.login;

                setUser({ ...user, id });
                AsyncStorage.setItem(
                  '@IPF:authenticatedUser',
                  JSON.stringify({ id })
                );
                AsyncStorage.setItem('@IPF:token', jwt);
                AsyncStorage.setItem('@IPF:userIsAuthenticated', 'true');
                setUserIsAuthenticated(true);
              })
              .catch(() => {
                Alert.alert(
                  'Ocorreu um erro',
                  'Não foi possível fazer login. Tente novamente mais tarde.',
                  [{ text: 'Tudo bem', onPress: () => navigation.goBack() }]
                );
              });
          })
          .catch((err) => {
            Alert.alert(
              'Ocorreu um erro',
              'Não foi possível concluir o cadastro.',
              [
                {
                  text: 'Tudo bem',
                  onPress: () => null,
                },
              ]
            );
          });
      })
      .catch((err) => {
        Alert.alert(
          'Ocorreu um erro',
          'Não foi possível concluir o cadastro.',
          [{ text: 'Tudo bem', onPress: () => navigation.navigate('Login') }]
        );
      });
  }, [
    setUserIsAuthenticated,
    login,
    navigation,
    password,
    setUser,
    signup,
    user,
  ]);

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
    <>
      {loadingSignup && <Loading />}

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
    </>
  );
};

export default Password;
