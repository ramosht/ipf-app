import { gql, useQuery } from '@apollo/client';
import { Button, Loading } from '@components/atoms';
import { Default } from '@components/templates';
import { uri } from '@config/api';
import { useNavigation, useRoute } from '@react-navigation/core';
import theme from '@styles/Theme';
import React from 'react';
import { Alert, Linking, View } from 'react-native';
import { Image } from 'react-native-animatable';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import * as S from './styles';

const QUERY = gql`
  query GET_PROJECT_BY_ID($id: ID!) {
    project(id: $id) {
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

const Project: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { data, loading: loadingGraphql, error } = useQuery(QUERY, {
    variables: {
      id: route.params?.id,
    },
  });

  if (loadingGraphql) {
    return <Loading />;
  }

  if (!data || error) {
    Alert.alert('Ocorreu um erro', 'Não foi possível abrir o projeto', [
      { text: 'Tudo bem', onPress: () => navigation.goBack() },
    ]);
  }

  const handleAccessWebsite = () => {
    Linking.openURL(data.project.url).catch(() =>
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
      description={data.project.name}
      header={{ type: 'page', title: 'Projetos', goBack: true }}
    >
      {data && (
        <S.Wrapper>
          <S.Title weight="Bold">{data.project.name}</S.Title>
          <Image
            style={{ marginTop: 8, width: '100%', height: 200 }}
            source={{ uri: uri + data.project.thumbnail.url }}
          />
          <S.Body
            tagsStyles={{
              p: {
                marginTop: 16,
                marginBottom: 8,
                color: theme.colors.midGrey,
                fontSize: 16,
                fontStyle: 'italic',
              },
              img: {
                marginTop: 15,
              },
            }}
            source={{
              html: data.project.description + data.project.description,
            }}
          />
          <Button
            actionOnPress={() => verifyAccessWebsite()}
            style={{ marginTop: 16, alignItems: 'center' }}
          >
            <S.SeeMore weight="Medium">Ver mais informações</S.SeeMore>
          </Button>
        </S.Wrapper>
      )}
    </Default>
  );
};

export default Project;
