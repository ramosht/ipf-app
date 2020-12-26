import { ReactNode } from 'react';

export type EventProps = {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
};

export type ScheduleProviderProps = {
  children: ReactNode;
};

export type ScheduleStateProps = {
  events: Array<EventProps>;
  setEvents: React.Dispatch<React.SetStateAction<EventProps[]>>;
};
