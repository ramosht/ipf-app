import React from 'react';
import { ArticlesFeed } from '@templates/index';
import { Alert } from 'react-native';
import { Loading } from '@components/atoms';
import { gql, useQuery } from '@apollo/client';

const BANK_ACCOUNTS_QUERY = gql`
  query {
    articles(where: { category: "news" }) {
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

const News: React.FC = () => {
  const { data, loading: loadingGraphql } = useQuery(BANK_ACCOUNTS_QUERY);

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
    <ArticlesFeed
      title="Notícias"
      description="Fique por dentro de tudo o que acontece em nossa igreja"
      articles={data ? data.articles : []}
    />
  );
};

export default News;
