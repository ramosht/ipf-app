import React from 'react';

import { ArticlesFeed } from '@templates/index';
import { Alert } from 'react-native';
import { Loading } from '@components/atoms';
import { gql, useQuery } from '@apollo/client';

const BANK_ACCOUNTS_QUERY = gql`
  query {
    articles(where: { category: "devotional" }) {
      title
      description
      thumbnail {
        url
        alternativeText
      }
      created_at
      id
      category
    }
  }
`;

const Devotional: React.FC = () => {
  const { data, loading: loadingGraphql, error } = useQuery(
    BANK_ACCOUNTS_QUERY
  );

  if (loadingGraphql) {
    return <Loading />;
  }

  if (!data) {
    Alert.alert(
      'Ocorreu um erro',
      'Não foi possível obter a lista de devocionais',
      [{ text: 'Tudo bem', onPress: () => null }]
    );
  }

  return (
    <>
      {loadingGraphql && <Loading />}
      <ArticlesFeed
        title="Devocional"
        description="Artigos, estudos, notícias e devocionais"
        articles={data ? data.articles : []}
      />
    </>
  );
};

export default Devotional;
