// import Storybook from '../storybook';
// export default Storybook;

import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/Theme';
import Routes from '@routes/index';

import { ScheduleProvider } from './contexts/schedule/schedule.context';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <ScheduleProvider>
      <Routes />
    </ScheduleProvider>
  </ThemeProvider>
);

export default App;
