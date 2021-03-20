import React, { useEffect } from 'react';

import { Default } from '@templates/index';
import { HomeSliderItem, ShortcutsHome } from '@components/organisms';
import { Alert, View } from 'react-native';
import { gql, useQuery } from '@apollo/client';
import { Loading } from '@components/atoms';
import Carousel from 'react-native-snap-carousel';
import { SLIDER_WIDTH } from '@components/organisms/HomeSliderItem';
import api, { uri } from '@config/api';
import { useRoute } from '@react-navigation/core';
import AsyncStorage from '@react-native-community/async-storage';
import { Text } from '@components/typography';
import axios from 'axios';
import { useLoading } from '../../../contexts/loading/loading.context';
import { useAuthentication } from '../../../contexts/authentication/authentication.context';
import { useUser } from '../../../contexts/user/user.context';

const QUERY_POSTS = gql`
  query {
    articles(limit: 5, sort: "created_at:DESC") {
      title
      description
      thumbnail {
        url
        alternativeText
      }
      created_at
      id
      category
    }
  }
`;

const Home: React.FC = () => {
  const carouselRef = React.useRef(null);
  const { user, setUser } = useUser();
  const { handleLogout } = useAuthentication();
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    setLoading(true);

    AsyncStorage.getItem('@IPF:authenticatedUser')
      .then((res) => {
        const authenticatedUser = JSON.parse(res);

        axios
          .get(`${uri}/users/${authenticatedUser.id}`)
          .then((res) => {
            setLoading(false);
            setUser({
              id: res.data.id,
              username: res.data.username,
              email: res.data.email,
              phoneNumber: res.data.phone,
              image: res.data.profilePicture
                ? uri + res.data.profilePicture.url
                : '',
              birthday: res.data.birthday,
            });
          })
          .catch((err) => {
            setLoading(false);
            console.log(err);
          });
      })
      .catch(() => {
        Alert.alert(
          'Ocorreu um erro',
          'Será necessário realizar o login novamente.',
          [{ text: 'Tudo bem', onPress: () => handleLogout() }]
        );
      });
  }, []);

  const {
    data: dataPosts,
    loading: loadingPosts,
    error: errorPosts,
  } = useQuery(QUERY_POSTS);

  if (loadingPosts || loading) {
    return <Loading />;
  }

  if (errorPosts) {
    Alert.alert('Ocorreu um erro', 'Não foi possível obter textos', [
      { text: 'Tudo bem', onPress: () => null },
    ]);
  }

  return (
    <Default
      header={{ type: 'main' }}
      scrollView={false}
      bodyStyle={{ flex: 1, padding: 0 }}
    >
      <View style={{ flex: 1 }}>
        {dataPosts && (
          <Carousel
            ref={carouselRef}
            data={dataPosts.articles}
            renderItem={(post: any) => <HomeSliderItem post={post.item} />}
            windowSize={100}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={SLIDER_WIDTH}
            layout="tinder"
          />
        )}
      </View>
      <View>
        <ShortcutsHome />
      </View>
    </Default>
  );
};

export default Home;
