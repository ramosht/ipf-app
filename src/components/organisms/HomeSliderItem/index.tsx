import { Text } from '@components/typography';
import { uri } from '@config/api';
import { useNavigation } from '@react-navigation/core';
import theme from '@styles/Theme';
import React, { useCallback } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import * as S from './styles';

export const SLIDER_WIDTH = Dimensions.get('window').width;

type HomeSliderItemProps = {
  post: any;
};

const HomeSliderItem: React.FC<HomeSliderItemProps> = ({ post }) => {
  const navigation = useNavigation();

  const handleSliderPress = useCallback(() => {
    navigation.navigate('Post', { postId: post.id });
  }, [navigation, post.id]);

  return (
    <S.Wrapper onPress={() => handleSliderPress()} activeOpacity={1.0}>
      <>
        <S.Background
          source={{
            uri: uri + post.thumbnail.url,
          }}
        />
        <LinearGradient
          colors={['#00000000', '#000000cc']}
          style={styles.linearGradient}
        >
          <S.Content>
            <S.MetaInfo>
              <Text fontSize={14} color={theme.colors.white}>
                {moment.utc(post.created_at).format('dddd, DD [de] MMMM')}
              </Text>
            </S.MetaInfo>
            <Text
              fontSize={26}
              weight="Medium"
              color={theme.colors.white}
              style={{ marginBottom: 8 }}
            >
              {post.title}
            </Text>
            <Text fontSize={16} color={theme.colors.white}>
              {post.description}
            </Text>
          </S.Content>
        </LinearGradient>
      </>
    </S.Wrapper>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});

export default HomeSliderItem;
