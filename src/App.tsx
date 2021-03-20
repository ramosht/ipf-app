import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/Theme';
import Routes from '@routes/index';
import { Root } from 'popup-ui';
import { ApolloProvider } from '@apollo/client';
import { UserProvider } from './contexts/user/user.context';
import { ScheduleProvider } from './contexts/schedule/schedule.context';
import { AuthenticationProvider } from './contexts/authentication/authentication.context';
import { LoadingProvider } from './contexts/loading/loading.context';
import apiConfig from './config/api';

const App: React.FC = () => {
  return (
    <Root>
      <ApolloProvider client={apiConfig}>
        <ThemeProvider theme={theme}>
          <AuthenticationProvider>
            <LoadingProvider>
              <UserProvider>
                <ScheduleProvider>
                  <Routes />
                </ScheduleProvider>
              </UserProvider>
            </LoadingProvider>
          </AuthenticationProvider>
        </ThemeProvider>
      </ApolloProvider>
    </Root>
  );
};

export default App;
