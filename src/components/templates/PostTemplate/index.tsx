import React from 'react';

import { Header } from '@molecules/index';
import HTML from 'react-native-render-html';
import { ScrollView } from 'react-native-gesture-handler';
import theme from '@styles/Theme';
import { Text } from '@components/typography';
import { View } from 'react-native';
import * as S from './styles';

type PostTemplateProps = {
  children?: React.ReactNode;
  title: string;
  html: string;
  thumbnail: string | undefined;
  description?: string;
  htmlTitle?: string;
};

const PostTemplate: React.FC<PostTemplateProps> = ({
  thumbnail,
  title,
  description,
  htmlTitle,
  html,
}) => (
  <S.Wrapper>
    <S.HeaderWrapper>
      <S.HeaderBrackground
        source={{
          uri: `http://localhost:1337${thumbnail}`,
        }}
      />
      <Header type="page" title={title} goBack />
    </S.HeaderWrapper>
    <View style={[{ paddingHorizontal: 16, paddingTop: 105, flex: 1 }]}>
      <S.Body style={{ elevation: 5 }}>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 16,
            paddingTop: 32,
          }}
        >
          <Text
            fontSize={20}
            style={{ textAlign: 'center', alignSelf: 'center' }}
            weight="Bold"
            color={theme.colors.midGrey}
          >
            {htmlTitle}
          </Text>

          <Text
            fontSize={16}
            style={{
              textAlign: 'center',
              alignSelf: 'center',
              marginTop: 8,
              marginBottom: 16,
            }}
            color={theme.colors.midGrey}
          >
            {description}
          </Text>

          <HTML
            tagsStyles={htmlStyle}
            source={{
              html,
            }}
          />
        </ScrollView>
      </S.Body>
    </View>
  </S.Wrapper>
);

const htmlStyle = {
  p: {
    marginTop: 8,
    marginBottom: 8,
    color: theme.colors.midGrey,
    fontSize: 16,
  },
};

export default PostTemplate;
