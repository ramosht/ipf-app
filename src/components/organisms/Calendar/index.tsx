import React, { useCallback, useMemo } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';

import * as S from './styles';

LocaleConfig.locales.pt = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ],
  dayNames: [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
};
LocaleConfig.defaultLocale = 'pt';

type CalendarComponentProps = {
  calendarEvents: any;
  setCalendarEvents: (events: any) => void;
  children?: React.ReactNode;
};

const CalendarComponent: React.FC<CalendarComponentProps> = ({
  calendarEvents,
  setCalendarEvents,
}) => {
  const today = useMemo(() => {
    return new Date();
  }, []);

  const handleDaySelection = useCallback(
    (dateString: string) => {
      setCalendarEvents({
        ...calendarEvents,
        [dateString]: {
          ...calendarEvents[dateString],
          selected: true,
        },
      });
    },
    [calendarEvents, setCalendarEvents],
  );

  return (
    <S.CalendarWrapper style={{ elevation: 5 }}>
      <Calendar
        current={today}
        onDayPress={({ dateString }) => handleDaySelection(dateString)}
        monthFormat="MMMM"
        onMonthChange={month => {
          console.log('month changed', month);
        }}
        markingType="multi-dot"
        markedDates={{ ...calendarEvents }}
        renderArrow={direction => <S.Arrow name={`chevron-${direction}`} />}
        firstDay={1}
        onPressArrowLeft={subtractMonth => subtractMonth()}
        onPressArrowRight={addMonth => addMonth()}
      />
    </S.CalendarWrapper>
  );
};

export default CalendarComponent;
