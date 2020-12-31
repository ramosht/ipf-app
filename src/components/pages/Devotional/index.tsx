import React from 'react';
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

import { Default } from '@templates/index';
import { DevotionalPostList } from '@organisms/index'

const Devotional: React.FC = ({posts}) => {

  React.useEffect(() => {
    console.log(posts)
  }, [])

  return (
    <Default
      header={{ type: 'page', goBack: false, title: 'Devocional' }}
      description="Artigos, estudos, notícias e devocionais"
    >
      <DevotionalPostList />
    </Default>
  );
};

const QUERY = gql`
  query {
    posts {
      id
      title
      category
      thumbnail {
        url
      }
      created_at
      updated_at
    }
  }
`

export default graphql(QUERY, { name: 'posts' })(Devotional);
