import React, { useState } from 'react';
import { Toast } from 'popup-ui';
import { Default } from '@components/templates';
import { TextInput, Button, Loading } from '@atoms/index';

import { Keyboard, View } from 'react-native';
import { gql, useMutation } from '@apollo/client';
import { useUser } from '../../../contexts/user/user.context';

const CREATE_PRAYER_REQUEST = gql`
  mutation CREATE_PRAYER_REQUEST($user: ID!, $request: String!) {
    createPrayerRequest(input: { data: { request: $request, user: $user } }) {
      prayerRequest {
        id
        request
        answered
        user {
          username
        }
      }
    }
  }
`;

const Contribuicao: React.FC = () => {
  const [prayerRequest, setPrayerRequest] = useState('');
  const { user } = useUser();

  const [createPrayerRequest, { loading }] = useMutation(CREATE_PRAYER_REQUEST);

  const handleCreatePrayerRequest = () => {
    Keyboard.dismiss();

    createPrayerRequest({
      variables: {
        user: user?.id,
        request: prayerRequest,
      },
    })
      .then(() => {
        setPrayerRequest('');

        Toast.show({
          title: 'Enviado!',
          text: 'O pedido de oração foi enviado com sucesso.',
          color: '#2ecc71',
        });
      })
      .catch(() => {
        Toast.show({
          title: 'Ocorreu um erro',
          text:
            'Não foi possível enviar o pedido de oração. Tente novamente mais tarde.',
          color: '#cc2e2e',
        });
      });
  };

  return (
    <>
      {loading && <Loading />}
      <Default
        description="Faça seu pedido e estaremos orando por você"
        header={{ type: 'page', title: 'Pedidos de oração', goBack: true }}
        bodyStyle={{ flex: 1 }}
      >
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <TextInput
            placeholder="Qual o seu pedido de oração?"
            multiline
            numberOfLines={8}
            textAlignVertical="top"
            value={prayerRequest}
            setValue={setPrayerRequest}
          />
          <Button
            disabled={prayerRequest.length === 0}
            actionOnPress={() => handleCreatePrayerRequest()}
          >
            Enviar
          </Button>
        </View>
      </Default>
    </>
  );
};

export default Contribuicao;
