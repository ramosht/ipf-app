import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

import { Default } from '@templates/index';
import { DevotionalPostList } from '@organisms/index';
import { Text } from '@components/typography';
import { SearchField, FilterPosts } from '@components/molecules';
import theme from '@styles/Theme';
import { ScreenStackHeaderRightView } from 'react-native-screens';

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
`;

type PostPreviewProps = {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
};

const Devotional: React.FC = () => {
  const [posts, setPosts] = useState<Array<PostPreviewProps>>([]);
  const [filteredPosts, setFilteredPosts] = useState<Array<PostPreviewProps>>(
    [],
  );
  const [categories, setCategories] = useState<Array<string>>([]);
  const [filter, setFilter] = useState<string>('Todos');
  const [search, setSearch] = useState<string>('');
  const { loading, error, data } = useQuery(GET_POSTS);

  useEffect(() => {
    if (!loading && data) {
      const postsSanitized: Array<PostPreviewProps> = [];
      const categoriesSanitized: Array<string> = [];

      data.posts.map((post: any) => {
        postsSanitized.push({
          id: post.id,
          title: post.title,
          description: post.description,
          category: post.category,
          thumbnail: post.thumbnail.url,
        });

        if (categoriesSanitized.indexOf(post.category) === -1) {
          categoriesSanitized.push(post.category);
        }
      });

      setPosts(postsSanitized);
      setCategories(['Todos', ...categoriesSanitized]);
    }
  }, [loading, data]);

  return (
    <Default
      header={{ type: 'page', goBack: false, title: 'Devocional' }}
      description="Artigos, estudos, notícias e devocionais"
    >
      <SearchField
        search={search}
        setSearch={setSearch}
        style={{ marginBottom: 17 }}
      />

      <FilterPosts
        filters={categories}
        setFilter={setFilter}
        filter={filter}
        style={{ marginBottom: 25 }}
      />

      {posts.length > 0 ? (
        <DevotionalPostList posts={posts} />
      ) : (
        <Text>Não há posts :(</Text>
      )}
    </Default>
  );
};

export default Devotional;
