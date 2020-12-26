import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ThemeProps } from '@styles/Theme';

import { Default } from '@templates/index';
import { Text } from '@typography/index';

const More: React.FC = () => {
  const theme: ThemeProps = useContext(ThemeContext);

  return (
    <Default
      description="Mais"
      header={{ type: 'page', title: 'Mais', goBack: false }}
    />
  );
};

export default More;
