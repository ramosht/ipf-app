import React, { useEffect, useState } from 'react';
import ArticlesService from '@services/articles';
import { ArticlesFeed, Default } from '@templates/index';
import { Headline, PostNews } from '@components/molecules';
import { Text } from '@components/typography';
import { Alert } from 'react-native';
import { useLoading } from '../../../contexts/loading/loading.context';

type PostPreviewProps = {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  data: Date;
};

const News: React.FC = () => {
  const [news, setNews] = useState([]);
  const { setLoading } = useLoading();

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      const res = await ArticlesService.getArticles('news');

      if (res?.articles) {
        setLoading(false);
        const articlesSanitized: PostPreviewProps[] = [];

        res.articles.map((article: any) =>
          articlesSanitized.push({
            category: article.category.title,
            description: article.description,
            id: article.id,
            thumbnail: article.thumbnail,
            title: article.title,
            data: new Date(article.createdAt),
          })
        );

        setNews(articlesSanitized);
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
    <ArticlesFeed
      title="Notícias"
      description="Fique por dentro de tudo o que acontece em nossa igreja"
      articles={news}
    />
  );
};

export default News;
