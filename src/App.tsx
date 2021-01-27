// import Storybook from '../storybook';

// export default Storybook;

import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/Theme';
import Routes from '@routes/index';
import { Root } from 'popup-ui';

import { ScheduleProvider } from './contexts/schedule/schedule.context';
import { AuthenticationProvider } from './contexts/authentication/authentication.context';

const App: React.FC = () => (
  <Root>
    <ThemeProvider theme={theme}>
      <AuthenticationProvider>
        <ScheduleProvider>
          <Routes />
        </ScheduleProvider>
      </AuthenticationProvider>
    </ThemeProvider>
  </Root>
);

export default App;
