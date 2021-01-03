import React, { useCallback, useEffect, useMemo } from 'react';
import { CalendarList, LocaleConfig } from 'react-native-calendars';
import { Dimensions } from 'react-native';

import { theme } from '@styles/Theme';
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
  selectedDay: Date;
  setSelectedDay: (date: Date) => void;
};

const CalendarComponent: React.FC<CalendarComponentProps> = ({
  calendarEvents,
  selectedDay,
  setSelectedDay,
}) => {
  const windowWidth = Dimensions.get('window').width;

  const today = useMemo(() => {
    return new Date();
  }, []);

  const formattedSelectedDay = useMemo(() => {
    return {
      '2021-01-23': {
        selected: true,
        marked: true,
        selectedColor: theme.colors.primary,
      },
    };
  }, []);

  const handleDaySelection = useCallback(
    (dateString: string) => {
      setSelectedDay(new Date(dateString));
    },
    [setSelectedDay],
  );

  return (
    <S.CalendarWrapper style={{ elevation: 5 }}>
      <CalendarList
        current={today}
        horizontal
        calendarWidth={windowWidth - 36}
        pastScrollRange={0}
        futureScrollRange={2}
        pagingEnabled
        onDayPress={({ dateString }) => handleDaySelection(dateString)}
        monthFormat="MMMM/yyyy"
        onMonthChange={month => {
          console.log('month changed', month);
        }}
        markedDates={{
          ...formattedSelectedDay,
        }}
        renderArrow={direction => <S.Arrow name={`chevron-${direction}`} />}
        firstDay={0}
        onPressArrowLeft={subtractMonth => subtractMonth()}
        onPressArrowRight={addMonth => addMonth()}
        hideExtraDays
        showScrollIndicator
      />
    </S.CalendarWrapper>
  );
};

export default CalendarComponent;
