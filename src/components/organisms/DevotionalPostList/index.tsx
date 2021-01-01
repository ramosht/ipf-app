import React from 'react';

import { PostPreview } from '@molecules/index';

type PostPreviewProps = {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
};

type DevotionalPostListProps = {
  posts: Array<PostPreviewProps>;
};

const DevotionalPostList: React.FC<DevotionalPostListProps> = ({ posts }) => {
  return (
    <>
      {posts.map(post => (
        <PostPreview
          category={post.category}
          id={post.id}
          key={post.id}
          title={post.title}
          description={post.description}
          thumbnail={post.thumbnail}
          style={{ marginBottom: 8 }}
        />
      ))}
    </>
  );
};

export default DevotionalPostList;
