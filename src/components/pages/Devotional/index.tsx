import React, { useState, useEffect } from 'react';

import { ArticlesFeed, Default } from '@templates/index';
import { DevotionalPostList } from '@organisms/index';
import { Text } from '@components/typography';
// import { SearchField, FilterPosts } from '@components/molecules';
import ArticlesService from '@services/articles';
import { Alert } from 'react-native';
import { Loading } from '@components/atoms';
import { useLoading } from '../../../contexts/loading/loading.context';

type PostPreviewProps = {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  data: Date;
};

const Devotional: React.FC = () => {
  const [posts, setPosts] = useState<Array<PostPreviewProps>>([]);
  // const [categories, setCategories] = useState<Array<string>>([]);
  // const [filter, setFilter] = useState<string>('Todos');
  // const [search, setSearch] = useState<string>('');
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      const res = await ArticlesService.getArticles('devotional');

      if (res?.articles) {
        setLoading(false);
        const postsSanitized: PostPreviewProps[] = [];

        res.articles.map((article: any) =>
          postsSanitized.push({
            category: article.category.title,
            description: article.description,
            id: article.id,
            thumbnail: article.thumbnail,
            title: article.title,
            data: new Date(article.createdAt),
          })
        );

        setPosts(postsSanitized);
      } else {
        setLoading(false);
        Alert.alert('Ocorreu um erro', res.message, [
          { text: 'Tudo bem', onPress: () => null },
        ]);
      }
    };

    getArticles();
  }, [setLoading]);

  return (
    <>
      {loading && <Loading />}
      <ArticlesFeed
        title="Devocional"
        description="Artigos, estudos, notícias e devocionais"
        articles={posts}
      />
    </>
  );
};

export default Devotional;
