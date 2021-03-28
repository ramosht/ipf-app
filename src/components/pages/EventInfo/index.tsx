import React, { useCallback, useEffect } from 'react';

import { Default } from '@templates/index';
import { Notification } from '@components/molecules';
import { Alert, View } from 'react-native';
import { Text } from '@components/typography';
import theme from '@styles/Theme';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from '@components/atoms';
import { ScrollView } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/core';
import moment from 'moment';
import { useNotifications } from '../../../contexts/notifications/notifications.context';

import * as S from './styles';

const More: React.FC = () => {
  const { notifications } = useNotifications();
  const route = useRoute();

  const {
    eventId,
    title,
    thumbnail,
    location,
    time,
    type,
    date,
  } = route.params.event;
  console.log(route.params);

  // const confirmTurnOnAlarm = useCallback(() => {
  //   Alert.alert(
  //     'Ativar lembrete',
  //     'Você tem certeza de que quer ativar um lembrete para o Culto de celetração (22/06)?',
  //     [
  //       { text: 'Cancelar', onPress: () => null },
  //       { text: 'Confirmar', onPress: () => null },
  //     ],
  //   );
  // }, []);

  const translateKey = (key: string) => {
    if (key === 'sunday') return 'Dom';
    if (key === 'monday') return 'Seg';
    if (key === 'tuesday') return 'Ter';
    if (key === 'wednesday') return 'Qua';
    if (key === 'thursday') return 'Qui';
    if (key === 'thursday') return 'Sex';
    if (key === 'saturday') return 'Sáb';
  };

  return (
    <>
      <Default
        bodyStyle={{ padding: 0 }}
        header={{ type: 'page', title: 'Evento', goBack: true }}
      >
        <S.ThumbnailWrapper>
          {thumbnail && (
            <S.Thumbnail
              source={{
                uri: thumbnail,
              }}
            />
          )}

          {/* <S.TurnOnAlarm onPress={() => confirmTurnOnAlarm()}>
            <MaterialCommunityIcons
              name="alarm"
              size={26}
              color={theme.colors.white}
            />
          </S.TurnOnAlarm> */}
        </S.ThumbnailWrapper>

        <S.Wrapper>
          <S.Header>
            <S.Date style={{ elevation: 8 }}>
              {type === 'weekly' && date && (
                <Text color={theme.colors.primary} fontSize={26} weight="Bold">
                  {translateKey(date)}
                </Text>
              )}
              {type === 'unique' && (
                <>
                  <Text
                    color={theme.colors.primary}
                    fontSize={16}
                    weight="Medium"
                    style={{ marginBottom: -4 }}
                  >
                    JUN
                  </Text>
                  <Text
                    color={theme.colors.primary}
                    fontSize={26}
                    weight="Bold"
                  >
                    22
                  </Text>
                </>
              )}
            </S.Date>
            <View>
              {title && (
                <Text fontSize={22} weight="Bold" color={theme.colors.midGrey}>
                  {title}
                </Text>
              )}
              <S.Time>
                <Feather
                  name="clock"
                  size={13}
                  color={theme.colors.lightGrey}
                  style={{ marginRight: 5 }}
                />
                {time && (
                  <Text fontSize={16}>
                    {`Às ${time.split(':')[0]}h${time.split(':')[1]}`}
                  </Text>
                )}
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
      {/* <S.Footer>
        <Button>Fazer inscrição</Button>
      </S.Footer> */}
    </>
  );
};

export default More;
