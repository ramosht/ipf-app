import React, { useContext, useState } from 'react';
import {
  EventProps,
  ScheduleProviderProps,
  ScheduleStateProps,
} from './schedule.types';

const ScheduleContext = React.createContext<ScheduleStateProps>({
  events: [],
  setEvents: () => {},
});

const ScheduleProvider: React.FC<ScheduleProviderProps> = ({ children }) => {
  const [events, setEvents] = useState<Array<EventProps>>([
    {
      id: '1',
      date: '2020-12-25',
      description: 'Culto de celebração do nascimento de Jesus',
      title: 'Culto de Natal',
      image: '',
    },
    {
      id: '2',
      date: '2020-12-06',
      description: 'Culto de celebração do nascimento de Jesus',
      title: 'Culto de Celebração',
      image: '',
    },
    {
      id: '3',
      date: '2020-12-13',
      description: 'Culto de celebração do nascimento de Jesus',
      title: 'Culto de Celebração',
      image: '',
    },
    {
      id: '4',
      date: '2020-12-20',
      description: 'Culto de celebração do nascimento de Jesus',
      title: 'Culto de Celebração',
      image: '',
    },
    {
      id: '5',
      date: '2020-12-27',
      description: 'Culto de celebração do nascimento de Jesus',
      title: 'Culto de Celebração',
      image: '',
    },
    {
      id: '2',
      date: '2020-12-06',
      description: 'Venha aprender mais da bíblia',
      title: 'Escola bíblica dominical',
      image: '',
    },
  ]);

  const value: ScheduleStateProps = {
    events,
    setEvents,
  };

  return (
    <ScheduleContext.Provider value={value}>
      {children}
    </ScheduleContext.Provider>
  );
};

const useEvents = () => {
  return useContext(ScheduleContext);
};

export { ScheduleProvider, useEvents };
