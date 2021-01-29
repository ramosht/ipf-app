import React from 'react';

import { Default } from '@templates/index';
import { Notification } from '@components/molecules';
import { View } from 'react-native';
import { Text } from '@components/typography';
import { useNotifications } from '../../../contexts/notifications/notifications.context';

const More: React.FC = () => {
  const { notifications } = useNotifications();

  return (
    <>
      <Default
        bodyStyle={{ padding: 0 }}
        header={{ type: 'page', title: 'Notificações', goBack: true }}
      >
        {notifications.length > 0 &&
          notifications.map(notification => (
            <Notification
              title={notification.title}
              description={notification.description}
              date={notification.date}
              key={notification.id}
            />
          ))}
        {notifications.length === 0 && (
          <View style={{ padding: 16 }}>
            <Text fontSize={16}>Não há notificações</Text>
          </View>
        )}
      </Default>
    </>
  );
};

export default More;
