import React, { useEffect, useState } from 'react';
import Moment from 'moment';
import { telephoneMask } from 'js-essentials-functions';

import { Default } from '@templates/index';
import { EditProfilePicture } from '@components/molecules';
import { Button, Loading, TextInput } from '@components/atoms';
import { Alert, Keyboard, View } from 'react-native';
import axios from 'axios';
import { uri } from '@config/api';
import { Toast } from 'popup-ui';
import { gql, useMutation } from '@apollo/client';
import { useLoading } from '../../../contexts/loading/loading.context';
import { useUser } from '../../../contexts/user/user.context';

const UPDATE_USER = gql`
  mutation UPDATE_USER(
    $userId: InputID!
    $username: String!
    $phone: String!
    $birthday: Date!
  ) {
    updateUser(
      input: {
        where: $userId
        data: { username: $username, phone: $phone, birthday: $birthday }
      }
    ) {
      user {
        username
        phone
        birthday
      }
    }
  }
`;

const More: React.FC = () => {
  const { user, setUser } = useUser();
  const [username, setUsername] = useState(user?.username || '');
  const [email, setEmail] = useState(user?.email || '');
  const [birthday, setBirthday] = useState(user?.birthday || '');
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || '');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [updateUser, { loading: loadingUpdateUser }] = useMutation(UPDATE_USER);

  const handleUserProfileUpdate = () => {
    Keyboard.dismiss();

    updateUser({
      variables: {
        userId: {
          id: user?.id,
        },
        username,
        phone: phoneNumber,
        birthday: Moment(birthday).format('YYYY-MM-DD'),
      },
    })
      .then((res) => {
        setUser({
          ...user,
          username: res.data.updateUser.user.username,
          phoneNumber: res.data.updateUser.user.phone,
          birthday: res.data.updateUser.user.birthday,
        });

        Toast.show({
          title: 'Concluído!',
          text: 'Os dados foram editados com sucesso',
          color: '#2ecc71',
        });
      })
      .catch(() => {
        Toast.show({
          title: 'Ocorreu um erro',
          text:
            'Não foi possível atualizar os dados de usuário. Tente novamente mais tarde.',
          color: '#cc2e2e',
        });
      });
  };

  useEffect(() => {
    setButtonDisabled(false);
  }, [username, email, birthday, phoneNumber]);

  return (
    <>
      {loadingUpdateUser && <Loading />}
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
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            wrapperStyle={{ marginBottom: 16 }}
            placeholder="Email"
            value={email}
            setValue={setEmail}
            editable={false}
          />
          <TextInput
            wrapperStyle={{ marginBottom: 16 }}
            placeholder="Data de Nascimento"
            value={Moment.utc(birthday).format('DD/MM/YYYY')}
            setValue={setBirthday}
            onChangeText={(text) => setBirthday(text)}
          />
          <TextInput
            wrapperStyle={{ marginBottom: 16 }}
            placeholder="Celular"
            value={telephoneMask(phoneNumber)}
            setValue={setPhoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
          />
        </View>

        <Button
          actionOnPress={() => handleUserProfileUpdate()}
          disabled={buttonDisabled}
        >
          Salvar
        </Button>
      </Default>
    </>
  );
};

export default More;
