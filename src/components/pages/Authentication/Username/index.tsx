import React, { useCallback, useEffect, useState } from 'react';

import { AuthenticationTemplate } from '@templates';
import { TextInput } from '@atoms/index';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  telephoneMask,
  dateMask,
  telephoneUnmask,
} from 'js-essentials-functions';
import AsyncStorage from '@react-native-community/async-storage';
import Moment from 'moment';

const Username: React.FC = () => {
  const [cellphone, setCellphone] = useState('');
  const [username, setUsername] = useState('');
  const [birthday, setBirthday] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const navigation = useNavigation();
  const route = useRoute();
  const { email } = route.params;

  const handleContinue = useCallback(() => {
    AsyncStorage.setItem(
      '@IPF:newUser',
      JSON.stringify({
        email,
        username,
        birthday: Moment(birthday).format('YYYY-MM-DD'),
        phone: telephoneUnmask(cellphone),
      })
    );
    navigation.navigate('NewPassword', { type: 'signup' });
  }, [navigation, birthday, cellphone, email, username]);

  useEffect(() => {
    if (username.length >= 3) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [username]);

  return (
    <AuthenticationTemplate
      title="Dados pessoais"
      description="Preencha as informações a seguir para completar seu cadastro"
      actionOnPress={() => handleContinue()}
      buttonDisabled={buttonDisabled}
      buttonText="Continuar"
    >
      <TextInput
        value={username}
        setValue={setUsername}
        wrapperStyle={{ width: '100%', marginBottom: 8 }}
        placeholder="Nome"
        autoFocus
      />
      <TextInput
        value={email}
        setValue={() => null}
        wrapperStyle={{ width: '100%', marginBottom: 8 }}
        editable={false}
      />
      <TextInput
        value={dateMask(birthday)}
        setValue={setBirthday}
        wrapperStyle={{ width: '100%', marginBottom: 8 }}
        placeholder="Data de nascimento"
        keyboardType="number-pad"
      />
      <TextInput
        value={telephoneMask(cellphone)}
        setValue={setCellphone}
        wrapperStyle={{ width: '100%' }}
        keyboardType="phone-pad"
        maxLength={15}
        placeholder="Celular"
      />
    </AuthenticationTemplate>
  );
};

export default Username;
