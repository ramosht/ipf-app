import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { ThemeProps } from '@styles/Theme';

import { Default } from '@templates/index';
import { Calendar } from '@organisms/index';
import { useEvents } from '../../../contexts/schedule/schedule.context';
import { EventProps } from '../../../contexts/schedule/schedule.types';

const Schedule: React.FC = () => {
  const theme: ThemeProps = useContext(ThemeContext);
  const [calendarEvents, setCalendarEvents] = useState({});
  const { events } = useEvents();

  const processEvents = useCallback(() => {
    const sanitizedEvents: Object = {};

    events.map((event: EventProps) => {
      if (!sanitizedEvents.hasOwnProperty(event.date)) {
        Object.assign(sanitizedEvents, {
          [event.date]: {
            selected: false,
            dots: [
              {
                key: event.title,
                color: theme.colors.midGrey,
              },
            ],
          },
        });
      } else {
        Object.assign(sanitizedEvents, {
          ...sanitizedEvents,
          [event.date]: {
            selected: false,
            dots: [
              ...sanitizedEvents[event.date].dots,
              {
                key: event.title,
                color: theme.colors.midGrey,
              },
            ],
          },
        });
      }
    });

    // console.log('sanitizedEvents', JSON.stringify(sanitizedEvents));

    setCalendarEvents(sanitizedEvents);
  }, [events, theme.colors.primary]);

  useEffect(() => {
    processEvents();
  }, [processEvents]);

  return (
    <Default
      header={{ title: 'Agenda', goBack: false, type: 'page' }}
      description="Veja nossa grade e reserve seu lugar"
    >
      <Calendar
        calendarEvents={calendarEvents}
        setCalendarEvents={setCalendarEvents}
      />
    </Default>
  );
};

export default Schedule;
