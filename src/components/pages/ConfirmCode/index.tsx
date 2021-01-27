import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { AuthenticationTemplate } from '@templates';
import { Button, GoBack, TextInput } from '@atoms/index';
import { Text } from '@components/typography';
import theme from '@styles/Theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as S from './styles';

type ConfirmCodeProps = {
  children?: React.ReactNode;
};

const ConfirmCode: React.FC<ConfirmCodeProps> = ({ children }) => {
  const route = useRoute();
  const [code, setCode] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const navigation = useNavigation();
  const { type } = route.params;

  const handleCodeConfirmation = useCallback(() => {
    type === 'signup'
      ? navigation.navigate('Username')
      : navigation.navigate('NewPassword', { type });
  }, []);

  useEffect(() => {
    if (code.length === 4) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [code]);

  const title = useMemo(() => {
    return type === 'signup'
      ? 'Estamos tão felizes com o seu acesso!'
      : 'Verifique seu e-mail';
  }, [type]);

  const description = useMemo(() => {
    return type === 'signup'
      ? 'Mas, antes de continuar, precisamos que você confirme para nós o código que acabamos de enviar ao seu e-mail.'
      : 'Insira abaixo o código que acabamos de enviar para o seu e-mail. Caso não tenha recebido, confira a caixa de spam.';
  }, [type]);

  return (
    <AuthenticationTemplate
      title={title}
      description={description}
      actionOnPress={() => handleCodeConfirmation()}
      buttonDisabled={buttonDisabled}
      buttonText="Confirmar"
    >
      <TextInput
        value={code}
        setValue={setCode}
        wrapperStyle={{ width: '100%' }}
        keyboardType="number-pad"
        textAlign="center"
        autoFocus
        maxLength={4}
      />
    </AuthenticationTemplate>
  );
};

export default ConfirmCode;
