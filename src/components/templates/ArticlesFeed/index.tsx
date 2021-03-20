import React from 'react';

import { Default } from '@templates/index';
import { Headline, PostNews } from '@components/molecules';
import { Text } from '@components/typography';
import { uri } from '../../../config/api';

type Article = {
  title: string;
  description: string;
  thumbnail: {
    url: string;
    alternativeText: string;
  };
  data: Date;
  id: string;
  style?: Object;
  category: string;
};

type TemplateProps = {
  title: string;
  description: string;
  articles: Article[];
};

const ArticlesFeed: React.FC<TemplateProps> = ({
  title,
  description,
  articles,
}) => {
  return (
    <Default
      header={{ title, type: 'page', goBack: false }}
      description={description}
    >
      {articles.length > 0 ? (
        articles.map((article, index) =>
          index === 0 ? (
            <Headline
              key={article.id}
              title={article.title}
              description={article.description}
              thumbnail={`${uri}${article.thumbnail.url}`}
              data={article.data}
              id={article.id}
              style={{ marginBottom: 8, elevation: 10 }}
              category={article.category}
            />
          ) : (
            // eslint-disable-next-line prettier/prettier
            <PostNews
              key={article.id}
              title={article.title}
              thumbnail={`${uri}${article.thumbnail.url}`}
              data={article.data}
              id={article.id}
              style={{ marginTop: 16 }}
              category={article.category}
            />
          )
        )
      ) : (
        <Text fontSize={18}>Não há artigos...</Text>
      )}
    </Default>
  );
};

export default ArticlesFeed;
