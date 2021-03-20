import { gql, useQuery } from '@apollo/client';
import { Loading } from '@components/atoms';
import { Default } from '@components/templates';
import { Text } from '@components/typography';
import { uri } from '@config/api';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Alert } from 'react-native';
import * as S from './styles';

const QUERY = gql`
  query {
    ministries {
      id
      thumbnail {
        url
      }
    }
  }
`;

const Igreja: React.FC = () => {
  const navigation = useNavigation();
  const { data, loading: loadingGraphql } = useQuery(QUERY);

  if (loadingGraphql) {
    return <Loading />;
  }

  if (!data) {
    Alert.alert(
      'Ocorreu um erro',
      'Não foi possível obter a lista de devocionais',
      [{ text: 'Tudo bem', onPress: () => null }]
    );
  }

  return (
    <Default
      description="Nossas Redes"
      header={{ type: 'page', title: 'Redes', goBack: true }}
    >
      <S.Wrapper>
        {data.ministries.map((minist: any) => (
          <S.MinistryWrapper
            key={minist.id}
            onPress={() => navigation.navigate('Ministry', { id: minist.id })}
          >
            <S.Ministry source={{ uri: uri + minist.thumbnail.url }} />
          </S.MinistryWrapper>
        ))}
      </S.Wrapper>
    </Default>
  );
};

export default Igreja;
