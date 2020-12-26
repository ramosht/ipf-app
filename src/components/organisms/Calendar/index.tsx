import React, { useContext, useMemo, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { Calendar, LocaleConfig } from 'react-native-calendars';

import { ThemeProps } from '@styles/Theme';
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

const CalendarComponent: React.FC = () => {
  const theme: ThemeProps = useContext(ThemeContext);
  const [events] = useState({
    '2020-12-20': {
      dots: [
        { key: 'Escola Bíblica Dominical', color: theme.colors.midGrey },
        { key: 'Culto de Celebração', color: theme.colors.midGrey },
      ],
    },
    '2020-12-29': {
      dots: [{ key: 'Live de Terça', color: theme.colors.midGrey }],
    },
  });

  const today = useMemo(() => {
    return new Date();
  }, []);

  return (
    <S.CalendarWrapper style={{ elevation: 5 }}>
      <Calendar
        current={today}
        onDayPress={day => {
          console.log('selected day', day);
        }}
        monthFormat="MMMM"
        onMonthChange={month => {
          console.log('month changed', month);
        }}
        markingType="multi-dot"
        markedDates={events}
        renderArrow={direction => <S.Arrow name={`chevron-${direction}`} />}
        firstDay={1}
        onPressArrowLeft={subtractMonth => subtractMonth()}
        onPressArrowRight={addMonth => addMonth()}
      />
    </S.CalendarWrapper>
  );
};

export default CalendarComponent;
