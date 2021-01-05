import React from 'react';
import { theme } from '@styles/Theme';

import { Text } from '@typography/index';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';

type PostPreviewProps = {
  style?: any;
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
};

const PostPreview: React.FC<PostPreviewProps> = ({
  style,
  id,
  title,
  category,
  description,
  thumbnail,
}) => {
  const navigation = useNavigation();

  return (
    <S.Wrapper
      style={{ ...style }}
      onPress={() => navigation.navigate('Post', { postId: id })}
    >
      <S.ThumbnailWrapper>
        <S.Thumbnail source={{ uri: `http://localhost:1337${thumbnail}` }} />
      </S.ThumbnailWrapper>
      <S.TextWrapper>
        <Text weight="Bold" fontSize={11} color={theme.colors.primary}>
          {category}
        </Text>
        <Text weight="Bold" fontSize={14} color={theme.colors.grey}>
          {title}
        </Text>
        <Text fontSize={12} color={theme.colors.grey}>
          {description}
        </Text>
      </S.TextWrapper>
    </S.Wrapper>
  );
};

export default PostPreview;
