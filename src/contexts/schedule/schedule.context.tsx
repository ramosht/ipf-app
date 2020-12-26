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
  const [events, setEvents] = useState<Array<EventProps>>([]);

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
