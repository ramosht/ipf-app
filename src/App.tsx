// import Storybook from '../storybook';
// export default Storybook;

import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/Theme';
import Routes from '@routes/index';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
);

export default App;
