import React, { useEffect, useState } from 'react';
import { ScheduleItem } from '@components/molecules';
import { uri } from '@config/api';
import { Alert, View } from 'react-native';
import { Loading, TextEmptyPage } from '@components/atoms';
import axios from 'axios';
import { useLoading } from '../../../../../contexts/loading/loading.context';

const WeeklyEvents = () => {
  const [events, setEvents] = useState({});
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${uri}/repeatable-events`)
      .then((res) => {
        setLoading(false);
        const sanitizedEvents: any = {};

        res.data.map((item: any) => {
          sanitizedEvents[item.weekday] = sanitizedEvents[item.weekday]
            ? [...sanitizedEvents[item.weekday], item]
            : [item];
        });

        setEvents(sanitizedEvents);
      })
      .catch(() => {
        setLoading(false);
        Alert.alert(
          'Ocorreu um erro',
          'Não foi possível obter a lista de eventos. Tente novamente em alguns instantes.',
          [{ text: 'Tudo bem', onPress: () => null }]
        );
      });
  }, [setLoading]);

  const translateKey = (key: string) => {
    if (key === 'sunday') return 'Domingo';
    if (key === 'monday') return 'Segunda-feira';
    if (key === 'tuesday') return 'Terça-feira';
    if (key === 'wednesday') return 'Quarta-feira';
    if (key === 'thursday') return 'Quinta-feira';
    if (key === 'thursday') return 'Sexta-feira';
    if (key === 'saturday') return 'Sábado';
  };

  return (
    <>
      {loading && <Loading />}
      {Object.keys(events).length > 0 &&
        Object.keys(events).map((key, index) => (
          <View key={index}>
            <TextEmptyPage>{translateKey(key)}</TextEmptyPage>

            {events[key].map((item: any, index: any) => (
              <ScheduleItem
                key={index}
                location={item.location}
                thumbnail={`${uri}${item.event.thumbnail.url}`}
                time={item.time}
                title={item.event.title}
                eventId={item.id}
                description={item.description || ''}
                style={{ marginBottom: 16 }}
                type="weekly"
                date={Object.keys(events)[index]}
              />
            ))}
          </View>
        ))}
      {Object.keys(events).length === 0 && (
        <TextEmptyPage>Não há nenhum evento em nossa agenda</TextEmptyPage>
      )}
    </>
  );
};

export default WeeklyEvents;
