import React, { useContext, useState } from 'react';
import Moment from 'moment';
import { telephoneMask } from 'js-essentials-functions';

import { Default } from '@templates/index';
import { Text } from '@typography/index';
import { EditProfilePicture, Logout, MoreItem } from '@components/molecules';
import { Button, TextInput } from '@components/atoms';
import { View } from 'react-native';
import { useUser } from '../../../contexts/user/user.context';

const More: React.FC = () => {
  const { user } = useUser();
  const [username, setUsername] = useState(user?.username || '');
  const [email, setEmail] = useState(user?.email || '');
  const [birthday, setBirthday] = useState(user?.birthday || '');
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || '');

  return (
    <>
      <Default
        bodyStyle={{ flex: 1 }}
        header={{ type: 'page', title: 'Meu perfil', goBack: true }}
      >
        <View style={{ flex: 1 }}>
          <EditProfilePicture style={{ marginBottom: 16 }} />

          <TextInput
            wrapperStyle={{ marginBottom: 16 }}
            placeholder="Nome"
            value={username}
            setValue={setUsername}
          />
          <TextInput
            wrapperStyle={{ marginBottom: 16 }}
            placeholder="Email"
            value={email}
            setValue={setEmail}
          />
          <TextInput
            wrapperStyle={{ marginBottom: 16 }}
            placeholder="Data de Nascimento"
            value={Moment.utc(birthday).format('DD/MM/YYYY')}
            setValue={setBirthday}
          />
          <TextInput
            wrapperStyle={{ marginBottom: 16 }}
            placeholder="Celular"
            value={telephoneMask(phoneNumber)}
            setValue={setPhoneNumber}
          />
        </View>

        <Button>Salvar</Button>
      </Default>
    </>
  );
};

export default More;
