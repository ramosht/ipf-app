import React, { useCallback, useState } from 'react';
import { Toast } from 'popup-ui';
import PrayerRequest from '@services/prayerRequest';
import { Default } from '@components/templates';
import { TextInput, Button } from '@atoms/index';

import { Alert, Keyboard, View } from 'react-native';
import { useUser } from '../../../contexts/user/user.context';

const Contribuicao: React.FC = () => {
  const [prayerRequest, setPrayerRequest] = useState('');
  const { user } = useUser();

  const handlePrayerRequestCreation = useCallback(() => {
    const createPrayerRequest = async () => {
      Keyboard.dismiss();

      const res = await PrayerRequest.createPrayerRequest(
        user?.id,
        prayerRequest,
      );

      if (res.status) {
        setPrayerRequest('');

        Toast.show({
          title: 'Seu pedido foi enviado',
          text: 'Estaremos em oração por você.',
          color: '#2ecc71',
        });
      } else {
        Alert.alert('Ocorreu um erro', res.message, [
          { text: 'Tentar novamente', onPress: () => null },
        ]);
      }
    };

    createPrayerRequest();
  }, [prayerRequest, user?.id]);

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
