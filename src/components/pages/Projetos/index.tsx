import { Default } from '@components/templates';
import { Text } from '@components/typography';
import React from 'react';

type ProjetosProps = {
  children?: React.ReactNode;
};

const Projetos: React.FC<ProjetosProps> = ({ children }) => {
  return (
    <Default
      description="Nossos projetos"
      header={{ type: 'page', title: 'Projetos', goBack: true }}
    >
      <Text>Projetos</Text>
    </Default>
  );
};

export default Projetos;
