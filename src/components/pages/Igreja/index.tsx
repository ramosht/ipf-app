import { Default } from '@components/templates';
import { Text } from '@components/typography';
import React, { useCallback } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Loading } from '@components/atoms';
import { Alert, Linking } from 'react-native';
import HTML from 'react-native-render-html';
import theme from '@styles/Theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

type MinisteriosProps = {
  children?: React.ReactNode;
};

const QUERY = gql`
  query {
    about {
      about
      url_site
    }
  }
`;

const Ministerios: React.FC<MinisteriosProps> = ({ children }) => {
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

  const handleAccessWebsite = () => {
    Linking.openURL(data.about.url_site).catch((err) =>
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
      description="Conheça nossa história"
      header={{ type: 'page', title: 'A igreja', goBack: true }}
    >
      <HTML
        tagsStyles={{
          p: {
            marginTop: 8,
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
          html: data.about.about,
        }}
      />

      <TouchableOpacity
        onPress={() => verifyAccessWebsite()}
        style={{ marginTop: 16, alignItems: 'center' }}
      >
        <Text
          color={theme.colors.secondary}
          style={{
            textAlign: 'center',
            fontSize: 18,
            color: theme.colors.secondary,
            borderBottomWidth: 1.5,
            borderColor: theme.colors.secondary,
            paddingBottom: 4,
          }}
        >
          Acesse nosso site e conheça um pouco mais sobre nós.
        </Text>
      </TouchableOpacity>
    </Default>
  );
};

export default Ministerios;
