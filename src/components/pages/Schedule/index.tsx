import React, { useEffect, useState } from 'react';

import { Default } from '@templates/index';
import { Calendar } from '@organisms/index';
import { View } from 'react-native';
import { ScheduleItem } from '@components/molecules';
import { Text } from '@components/typography';
import theme from '@styles/Theme';

const Schedule: React.FC = () => {
  const [calendarEvents, setCalendarEvents] = useState({});
  const [selectedDay, setSelectedDay] = useState(new Date());

  return (
    <Default
      header={{ title: 'Agenda', goBack: false, type: 'page' }}
      description="Veja nossa grade e reserve seu lugar"
    >
      <Calendar
        calendarEvents={calendarEvents}
        setCalendarEvents={setCalendarEvents}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        style={{ marginBottom: 16 }}
      />

      <View>
        <Text
          fontSize={24}
          weight="Bold"
          color={theme.colors.grey}
          style={{ marginTop: 24, marginBottom: 17 }}
        >
          Eventos no dia
        </Text>
        <ScheduleItem style={{ marginBottom: 18 }} />
        <ScheduleItem style={{ marginBottom: 18 }} />
        <ScheduleItem style={{ marginBottom: 18 }} />
        <ScheduleItem style={{ marginBottom: 18 }} />
      </View>
    </Default>
  );
};

export default Schedule;
