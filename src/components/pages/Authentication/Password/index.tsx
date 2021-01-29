import React, { useCallback, useEffect, useState } from 'react';

import { AuthenticationTemplate } from '@templates';
import { PasswordInput } from '@atoms/index';
import { passwordRegex } from '@config/utils';
import { Text } from '@components/typography';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../../../contexts/user/user.context';
import { useAuthentication } from '../../../../contexts/authentication/authentication.context';
import * as S from './styles';

const Password: React.FC = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const { setUserIsAuthenticated } = useAuthentication();
  const { setUser } = useUser();

  const handleLogin = useCallback(() => {
    setUser({
      id: '876405cb-7e11-4e79-b760-3639d3a4eb80',
      username: 'Guilherme Ramos',
      email: 'guilhermeht.ramos@gmail.com',
      phoneNumber: '15981376104',
      image:
        'https://instagram.fsod2-1.fna.fbcdn.net/v/t51.2885-15/e35/134725762_401789460910085_5215578327472946775_n.jpg?_nc_ht=instagram.fsod2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=Wx_XYCn8zmMAX-10jTW&tp=1&oh=2e555d26a01895fb7a4352f4caa095fe&oe=603AAA1E',
      birthday: '1998-02-09',
    });
    setUserIsAuthenticated(true);
  }, [setUserIsAuthenticated, setUser]);

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
