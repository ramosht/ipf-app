import { Default } from '@components/templates';
import { Text } from '@components/typography';
import React from 'react';

type IgrejaProps = {
  children?: React.ReactNode;
};

const Igreja: React.FC<IgrejaProps> = ({ children }) => {
  return (
    <Default
      description="Nossas Redes"
      header={{ type: 'page', title: 'Redes', goBack: true }}
    >
      <Text>Sobre a igreja</Text>
    </Default>
  );
};

export default Igreja;
