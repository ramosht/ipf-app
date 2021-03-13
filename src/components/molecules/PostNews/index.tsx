import React from 'react';
import { View } from 'react-native';
import moment from '@config/moment';

import { useNavigation } from '@react-navigation/native';
import * as S from './styles';

type PostNewsProps = {
  id: string;
  title: string;
  data: Date;
  thumbnail: string;
  style?: Object;
  category: string;
};

const PostNews: React.FC<PostNewsProps> = ({
  id,
  title,
  data,
  thumbnail,
  style,
  category,
}) => {
  const navigation = useNavigation();

  return (
    <S.Wrapper
      style={style}
      onPress={() => navigation.navigate('Post', { postId: id })}
    >
      <S.Thumbnail source={{ uri: thumbnail }} style={{ marginRight: 12 }} />
      <View style={{ flex: 1 }}>
        <S.Data weight="Italic">
          {moment.utc(data).format('DD [de] MMMM, YYYY')}
        </S.Data>
        <S.Title weight="Medium">{title}</S.Title>
      </View>
    </S.Wrapper>
  );
};

export default PostNews;
