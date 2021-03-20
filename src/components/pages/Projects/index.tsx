import { gql, useQuery } from '@apollo/client';
import { Loading } from '@components/atoms';
import { ProjectThumb } from '@components/molecules';
import { Default } from '@components/templates';
import { Text } from '@components/typography';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Alert } from 'react-native';

const QUERY = gql`
  query {
    projects {
      id
      name
      description
      url
      thumbnail {
        url
      }
    }
  }
`;

const Projects: React.FC = () => {
  const navigation = useNavigation();

  const { data, loading: loadingGraphql, error } = useQuery(QUERY);

  if (loadingGraphql) {
    return <Loading />;
  }

  if (!data || error) {
    Alert.alert('Ocorreu um erro', 'Não foi possível obter projetos', [
      { text: 'Tudo bem', onPress: () => navigation.goBack() },
    ]);
  }

  return (
    <Default
      description="Nossos projetos"
      header={{ type: 'page', title: 'Projetos', goBack: true }}
    >
      {data &&
        data.projects.map((project: any) => (
          <ProjectThumb key={project.id} project={project} />
        ))}
    </Default>
  );
};

export default Projects;
