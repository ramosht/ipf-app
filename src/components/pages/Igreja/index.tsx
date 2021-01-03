import { Default } from '@components/templates';
import { Text } from '@components/typography';
import React from 'react';

type MinisteriosProps = {
  children?: React.ReactNode;
};

const Ministerios: React.FC<MinisteriosProps> = ({ children }) => {
  return (
    <Default
      description="Conheça nossa história"
      header={{ type: 'page', title: 'A igreja', goBack: true }}
    >
      <Text>Redes</Text>
    </Default>
  );
};

export default Ministerios;
