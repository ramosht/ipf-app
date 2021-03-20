import React, { useState } from 'react';

import { PostTemplate } from '@templates/index';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Alert, View } from 'react-native';
import { Loading } from '@components/atoms';
import { gql, useQuery } from '@apollo/client';
import { uri } from '@config/api';

type PostProps = {
  title: string;
  description?: string;
  thumbnail?: string;
  body: string;
};

const GET_ARTICLE_BY_ID = gql`
  query GET_ARTICLE_BY_ID($postId: ID!) {
    article(id: $postId) {
      id
      title
      description
      body
      thumbnail {
        url
        alternativeText
      }
      category
    }
  }
`;

const Post: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { data, loading: loadingGraphql, error } = useQuery(GET_ARTICLE_BY_ID, {
    variables: {
      postId: route.params?.postId,
    },
  });

  if (loadingGraphql) {
    return <Loading />;
  }

  if (!data || error) {
    Alert.alert('Ocorreu um erro', 'Não foi possível obter os dados do texto', [
      { text: 'Tudo bem', onPress: () => navigation.goBack() },
    ]);
  }

  return (
    <>
      {data && (
        <PostTemplate
          title="Devocional"
          thumbnail={uri + data.article.thumbnail.url}
          description={data.article.description}
          html={data.article.body}
          htmlTitle={data.article.title}
        />
      )}
    </>
  );
};

export default Post;
