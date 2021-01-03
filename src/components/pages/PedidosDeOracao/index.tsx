import React, { useCallback, useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { Toast } from 'popup-ui';

import { Default } from '@components/templates';
import { TextInput, Button } from '@atoms/index';

import { Keyboard, View } from 'react-native';

const CREATE_PRAYER_REQUEST = gql`
  mutation PrayerRequest($input: createPrayerRequestInput) {
    createPrayerRequest(input: $input) {
      prayerRequest {
        userName
        userEmail
        userPhone
      }
    }
  }
`;

const Contribuicao: React.FC = () => {
  const [prayerRequest, setPrayerRequest] = useState('');

  const [createPrayerRequest] = useMutation(CREATE_PRAYER_REQUEST);

  const handlePrayerRequestCreation = useCallback(() => {
    Keyboard.dismiss();

    createPrayerRequest({
      variables: {
        input: {
          data: {
            userName: 'Guilherme Ramos',
            userEmail: 'guilhermeht.ramos@gmail.com',
            userPhone: '15981376104',
            prayerRequest,
          },
        },
      },
    });

    setPrayerRequest('');

    Toast.show({
      title: 'Seu pedido foi enviado',
      text: 'Estaremos em oração por você.',
      color: '#2ecc71',
    });
  }, [createPrayerRequest, prayerRequest]);

  return (
    <Default
      description="Faça seu pedido e estaremos orando por você"
      header={{ type: 'page', title: 'Pedidos de oração', goBack: true }}
      bodyStyle={{ flex: 1 }}
    >
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <TextInput
          placeholder="Qual o seu pedido de oração?"
          multiline
          numberOfLines={5}
          textAlignVertical="top"
          value={prayerRequest}
          setValue={setPrayerRequest}
        />
        <Button
          disabled={prayerRequest.length === 0}
          actionOnPress={handlePrayerRequestCreation}
        >
          Enviar
        </Button>
      </View>
    </Default>
  );
};

export default Contribuicao;
