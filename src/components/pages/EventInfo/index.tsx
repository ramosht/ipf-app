import React, { useCallback } from 'react';

import { Default } from '@templates/index';
import { Notification } from '@components/molecules';
import { Alert, View } from 'react-native';
import { Text } from '@components/typography';
import theme from '@styles/Theme';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from '@components/atoms';
import { ScrollView } from 'react-native-gesture-handler';
import { useNotifications } from '../../../contexts/notifications/notifications.context';

import * as S from './styles';

const More: React.FC = () => {
  const { notifications } = useNotifications();

  const confirmTurnOnAlarm = useCallback(() => {
    Alert.alert(
      'Ativar lembrete',
      'Você tem certeza de que quer ativar um lembrete para o Culto de celetração (22/06)?',
      [
        { text: 'Cancelar', onPress: () => null },
        { text: 'Confirmar', onPress: () => null },
      ],
    );
  }, []);

  return (
    <>
      <Default
        bodyStyle={{ padding: 0 }}
        header={{ type: 'page', title: 'Evento', goBack: true }}
      >
        <S.ThumbnailWrapper>
          <S.Thumbnail
            source={{
              uri:
                'https://instagram.fsod2-1.fna.fbcdn.net/v/t51.2885-15/e35/129719122_157176432816944_6695873766970843475_n.jpg?_nc_ht=instagram.fsod2-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=UGHUrzgynMsAX8quWxU&tp=1&oh=3b5845e43c1f893ec8cbaeecbfcdf5a6&oe=603E683A',
            }}
          />

          <S.TurnOnAlarm onPress={() => confirmTurnOnAlarm()}>
            <MaterialCommunityIcons
              name="alarm"
              size={26}
              color={theme.colors.white}
            />
          </S.TurnOnAlarm>
        </S.ThumbnailWrapper>

        <S.Wrapper>
          <S.Header>
            <S.Date style={{ elevation: 8 }}>
              <Text
                color={theme.colors.primary}
                fontSize={16}
                weight="Medium"
                style={{ marginBottom: -4 }}
              >
                JUN
              </Text>
              <Text color={theme.colors.primary} fontSize={26} weight="Bold">
                22
              </Text>
            </S.Date>
            <View>
              <Text fontSize={22} weight="Bold" color={theme.colors.midGrey}>
                Culto de celebração
              </Text>
              <S.Time>
                <Feather
                  name="clock"
                  size={13}
                  color={theme.colors.lightGrey}
                  style={{ marginRight: 5 }}
                />
                <Text fontSize={16}>às 18h30</Text>
              </S.Time>
            </View>
          </S.Header>

          <Text fontSize={16} style={{ marginTop: 16 }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            vitae molestias inventore totam expedita adipisci debitis! Enim sit
            ex quam et libero dolore non inventore, alias quidem, illo sed
            accusamus.
          </Text>
        </S.Wrapper>
      </Default>
      <S.Footer>
        <Button>Fazer inscrição</Button>
      </S.Footer>
    </>
  );
};

export default More;
