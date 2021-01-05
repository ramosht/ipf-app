import React, { useCallback, useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';

import { PostTemplate } from '@templates/index';
import { Text } from '@components/typography';
import { useRoute, useNavigation } from '@react-navigation/native';

const GET_POST_BY_ID = gql`
  query GET_POST($postId: ID!) {
    post(id: $postId) {
      id
      title
      description
      category
      body
      thumbnail {
        url
      }
    }
  }
`;

type PostProps = {
  title: string;
  description?: string;
  thumbnail?: string;
  body: string;
};

const Post: React.FC = () => {
  const route = useRoute();
  const navigate = useNavigation();

  const [post, setPost] = useState<PostProps | null>(null);
  const [postId, setPostId] = useState<string | null>(null);

  useEffect(() => {
    try {
      const id = route.params?.postId;
      setPostId(id);
    } catch (err) {
      navigate.goBack();
    }
  }, []);

  const { loading, error, data } = useQuery(GET_POST_BY_ID, {
    variables: {
      postId,
    },
  });

  useEffect(() => {
    if (data) {
      setPost({
        title: data.post.title,
        description: data.post.description,
        thumbnail: data.post.thumbnail.url,
        body: data.post.body,
      });
    }
  }, [data]);

  return post ? (
    <PostTemplate
      title="Devocional"
      thumbnail={post.thumbnail}
      description={post.description}
      html={post.body}
      htmlTitle={post.title}
    />
  ) : (
    <Text>N</Text>
  );
};

export default Post;
