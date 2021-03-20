import { gql, useQuery } from '@apollo/client';
import { Loading } from '@components/atoms';
import { Default } from '@components/templates';
import { uri } from '@config/api';
import { useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import { Alert, Linking } from 'react-native';
import { Image } from 'react-native-animatable';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as S from './styles';

const QUERY = gql`
  query QUERY_GET_MINISTRY($ministId: ID!) {
    ministry(id: $ministId) {
      id
      name
      description
      url
      thumbnail {
        url
      }
    }
  }
`;

const Ministry: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { data, loading: loadingGraphql, error } = useQuery(QUERY, {
    variables: {
      ministId: route.params?.id,
    },
  });

  if (loadingGraphql) {
    return <Loading />;
  }

  if (!data) {
    Alert.alert('Ocorreu um erro', 'Não foi possível obter os dados da rede', [
      { text: 'Tudo bem', onPress: () => navigation.goBack() },
    ]);
  }

  const handleAccessWebsite = () => {
    Linking.openURL(data.ministry.url).catch(() =>
      Alert.alert('', 'Não foi possível acessar o link desejado.', [
        { text: 'Tudo bem', onPress: () => null },
      ])
    );
  };

  const verifyAccessWebsite = () => {
    Alert.alert(
      '',
      'Você será redirecionado para fora do aplicativo. Deseja continuar?',
      [
        { text: 'Cancelar', onPress: () => null },
        { text: 'Continuar', onPress: () => handleAccessWebsite() },
      ]
    );
  };

  return (
    <Default
      description={data.ministry.name}
      header={{ type: 'page', title: 'Redes', goBack: true }}
    >
      {data && (
        <S.Wrapper>
          <S.Title weight="Bold">{data.ministry.name}</S.Title>
          <Image
            style={{ width: '100%', height: 200 }}
            source={{ uri: uri + data.ministry.thumbnail.url }}
          />
          <S.Body weight="Medium">{data.ministry.description}</S.Body>
          <TouchableOpacity
            onPress={() => verifyAccessWebsite()}
            style={{ marginTop: 16, alignItems: 'center' }}
          >
            <S.SeeMore weight="Medium">Ver mais informações</S.SeeMore>
          </TouchableOpacity>
        </S.Wrapper>
      )}
    </Default>
  );
};

export default Ministry;
