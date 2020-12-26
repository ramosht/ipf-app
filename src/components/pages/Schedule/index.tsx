import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ThemeProps } from '@styles/Theme';

import { Default } from '@templates/index';
import { Text } from '@typography/index';

const Schedule: React.FC = () => {
  const theme: ThemeProps = useContext(ThemeContext);

  return (
    <Default
      header={{ title: 'Agenda', goBack: false, type: 'page' }}
      description="Veja nossa grade e reserve seu lugar"
    />
  );
};

export default Schedule;