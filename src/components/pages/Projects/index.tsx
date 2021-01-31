import { Default } from '@components/templates';
import { Text } from '@components/typography';
import React from 'react';

type ProjectsProps = {
  children?: React.ReactNode;
};

const Projects: React.FC<ProjectsProps> = ({ children }) => {
  return (
    <Default
      description="Nossos projetos"
      header={{ type: 'page', title: 'Projetos', goBack: true }}
    >
      <Text>Projetos</Text>
    </Default>
  );
};

export default Projects;
