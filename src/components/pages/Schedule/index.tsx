import React from 'react';

import { Default } from '@templates/index';

import WeeklyEvents from './components/WeeklyEvents';

const Schedule: React.FC = () => {
  return (
    <Default
      header={{ title: 'Agenda', goBack: false, type: 'page' }}
      description="Veja nossa grade e reserve seu lugar"
    >
      <WeeklyEvents />
    </Default>
  );
};

export default Schedule;
