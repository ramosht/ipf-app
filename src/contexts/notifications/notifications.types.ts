import { ReactNode } from 'react';

export type NotificationsProps = {
  id: string;
  title: string;
  description: string;
  date: Date;
};

export type NotificationsProviderProps = {
  children: ReactNode;
};

export type NotificationsStateProps = {
  notifications: Array<NotificationsProps>;
  setNotifications: React.Dispatch<React.SetStateAction<NotificationsProps[]>>;
};
