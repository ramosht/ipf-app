import React, { useEffect, useState } from 'react';

import { Default } from '@templates/index';
import { Calendar } from '@organisms/index';

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
      />
    </Default>
  );
};

export default Schedule;
