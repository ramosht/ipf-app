import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

import { Default } from '@templates/index';
import { DevotionalPostList } from '@organisms/index'
import { Text } from '@components/typography';

const GET_POSTS = gql`
  query {
    posts {
      id
      title
      category
      description
      thumbnail {
        url
      }
    }
  }
`

type PostPreviewProps = {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
}

const Devotional: React.FC = () => {
  const [posts, setPosts] = useState<Array<PostPreviewProps>>([])

  const { loading, error, data } = useQuery(GET_POSTS);

  React.useEffect(() => {
    if(!loading) {
      const postsSanitized: Array<PostPreviewProps> = []
  
      data.posts.map((post: any) => postsSanitized.push({
        id: post.id, 
        title: post.title, 
        description: post.description,
        category: post.category,
        thumbnail: post.thumbnail.url
      }))
  
      setPosts(postsSanitized)
    }
  }, [loading])

  return (
    <Default
      header={{ type: 'page', goBack: false, title: 'Devocional' }}
      description="Artigos, estudos, notícias e devocionais"
    >
      {posts.length > 0 ? <DevotionalPostList posts={posts} /> : <Text>Não há posts :(</Text>}
      
    </Default>
  );
};



export default Devotional;
