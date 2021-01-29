import React, { useContext, useState } from 'react';
import {
  NotificationsProps,
  NotificationsProviderProps,
  NotificationsStateProps,
} from './notifications.types';

const NotificationsContext = React.createContext<NotificationsStateProps>({
  notifications: [],
  setNotifications: () => {},
});

const NotificationsProvider: React.FC<NotificationsProviderProps> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<Array<NotificationsProps>>(
    [
      {
        id: '1',
        date: new Date(),
        description: 'Culto de celebração do nascimento de Jesus',
        title: 'Culto de Natal',
      },
      {
        id: '2',
        date: new Date(),
        description: 'Culto de celebração do nascimento de Jesus',
        title: 'Culto de Celebração',
      },
      {
        id: '3',
        date: new Date(),
        description:
          'Culto de celebração do nascimento de JesusCulto de celebração do nascimento de JesusCulto de celebração do nascimento de Jesus',
        title: 'Culto de Celebração',
      },
      {
        id: '4',
        date: new Date(),
        description: 'Culto de celebração do nascimento de Jesus',
        title: 'Culto de Celebração',
      },
      {
        id: '5',
        date: new Date(),
        description: 'Culto de celebração do nascimento de Jesus',
        title: 'Culto de Celebração',
      },
      {
        id: '6',
        date: new Date(),
        description: 'Venha aprender mais da bíblia',
        title: 'Escola bíblica dominical',
      },
    ],
  );

  const value: NotificationsStateProps = {
    notifications,
    setNotifications,
  };

  return (
    <NotificationsContext.Provider value={value}>
      {children}
    </NotificationsContext.Provider>
  );
};

const useNotifications = () => {
  return useContext(NotificationsContext);
};

export { NotificationsProvider, useNotifications };
