import React from 'react';

import { Default } from '@templates/index';
import { Text } from '@components/typography';

const Schedule: React.FC = () => {
  return (
    <Default
      header={{ title: 'Agenda', goBack: false, type: 'page' }}
      description="Veja nossa grade e reserve seu lugar"
    >
      <Text>Aqui vai a agenda</Text>
    </Default>
  );
};

export default Schedule;
