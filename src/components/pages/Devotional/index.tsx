import React, { useState, useEffect } from 'react';

import { Default } from '@templates/index';
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
      const res = await ArticlesService.getArticles();

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
          }),
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
  }, []);

  return (
    <>
      {loading && <Loading />}
      <Default
        header={{ type: 'page', goBack: false, title: 'Devocional' }}
        description="Artigos, estudos, notícias e devocionais"
      >
        {/* <SearchField
          search={search}
          setSearch={setSearch}
          style={{ marginBottom: 17 }}
        />

        <FilterPosts
          filters={categories}
          setFilter={setFilter}
          filter={filter}
          style={{ marginBottom: 25 }}
        /> */}

        {posts.length > 0 && <DevotionalPostList posts={posts} />}
        {posts.length === 0 && <Text>Não há posts :(</Text>}
      </Default>
    </>
  );
};

export default Devotional;
