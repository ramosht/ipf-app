// import Storybook from '../storybook';
// export default Storybook;

import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/Theme';
import Routes from '@routes/index';
import { ApolloProvider } from '@apollo/client';
import { Root } from 'popup-ui';
import apolloClient from './services/apolloClient';

import { ScheduleProvider } from './contexts/schedule/schedule.context';

const App: React.FC = () => (
  <Root>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <ScheduleProvider>
          <Routes />
        </ScheduleProvider>
      </ApolloProvider>
    </ThemeProvider>
  </Root>
);

export default App;
