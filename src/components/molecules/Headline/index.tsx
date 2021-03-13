import React from 'react';
import moment from '@config/moment';

import { useNavigation } from '@react-navigation/native';
import * as S from './style';

type HeadlineProps = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  data: Date;
  style?: Object;
  category: string;
};

const Headline: React.FC<HeadlineProps> = ({
  id,
  title,
  description,
  thumbnail,
  data,
  style,
  category,
}) => {
  const navigation = useNavigation();

  return (
    <S.Wrapper
      style={style}
      onPress={() => navigation.navigate('Post', { postId: id })}
    >
      <S.Gradient colors={['#00000000', '#00000099']} />
      <S.Thumbnail source={{ uri: thumbnail }} />
      <S.Content>
        <S.Data weight="Italic">
          {moment.utc(data).format('DD [de] MMMM, YYYY')}
        </S.Data>
        <S.Title weight="Medium">{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Content>
    </S.Wrapper>
  );
};

export default Headline;
