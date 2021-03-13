import React, { useEffect, useState } from 'react';

import { PostTemplate } from '@templates/index';
import { useRoute, useNavigation } from '@react-navigation/native';
import ArticleService from '@services/articles';
import { Alert } from 'react-native';
import { Loading } from '@components/atoms';
import { useLoading } from '../../../contexts/loading/loading.context';

type PostProps = {
  title: string;
  description?: string;
  thumbnail?: string;
  body: string;
};

const Post: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { loading, setLoading } = useLoading();

  const [post, setPost] = useState<PostProps | null>(null);
  const [postId, setPostId] = useState<string | null>(null);

  useEffect(() => {
    try {
      const id = route.params?.postId;
      setPostId(id);
    } catch (err) {
      navigation.goBack();
    }
  }, [navigation, route.params?.postId]);

  useEffect(() => {
    const getArticle = async () => {
      setLoading(true);
      const res = await ArticleService.getArticleById(postId);

      if (res.article) {
        setLoading(false);
        setPost({
          body: res.article.body,
          title: res.article.title,
          description: res.article.description,
          thumbnail: res.article.thumbnail,
        });
      } else {
        setLoading(false);
        Alert.alert('Ocorreu um erro', res.message, [
          { text: 'Voltar', onPress: () => navigation.goBack() },
        ]);
      }
    };

    if (postId) {
      getArticle();
    }
  }, [postId, navigation, setLoading]);

  return (
    <>
      {loading && <Loading />}
      {post && (
        <PostTemplate
          title="Devocional"
          thumbnail={post.thumbnail}
          description={post.description}
          html={post.body}
          htmlTitle={post.title}
        />
      )}
    </>
  );
};

export default Post;
