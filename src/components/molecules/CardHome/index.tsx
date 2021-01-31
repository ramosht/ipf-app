import { useNavigation } from '@react-navigation/native';
import theme from '@styles/Theme';
import React from 'react';

import * as S from './styles';

type CardHomeProps = {
  path: string;
  title: string;
  image: any;
};

const CardHome: React.FC<CardHomeProps> = ({ path, title, image }) => {
  const navigation = useNavigation();

  return (
    <S.Wrapper onPress={() => navigation.navigate(path)}>
      <S.Background resizeMode="cover" source={image} />
      <S.Title fontSize={20} color={theme.colors.white} weight="Bold">
        {title}
      </S.Title>
    </S.Wrapper>
  );
};

export default CardHome;
