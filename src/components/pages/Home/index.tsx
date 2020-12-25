import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ThemeProps } from '@styles/Theme';

import { Default } from '@templates/index';
import { Text } from '@typography/index';

const Home: React.FC = () => {
  const theme: ThemeProps = useContext(ThemeContext);

  return (
    <Default>
      <Text fontSize={26} weight="Medium" color={theme.colors.lightGrey}>
        Início
      </Text>
    </Default>
  );
};

export default Home;
