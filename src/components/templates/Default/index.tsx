import React from 'react';
import theme from '@styles/Theme';

import { Header } from '@molecules/index';
import { Text } from '@typography/index';
import { ScrollView } from 'react-native-gesture-handler';
import * as S from './styles';

import HeaderBackgroundImageDefault from '../../../assets/images/headers-background/default.png';

type TemplateDefaultProps = {
  children?: React.ReactNode;
  header: {
    type: 'main' | 'page';
    title?: string;
    goBack?: boolean;
  };
  description?: string;
  headerBackgroundImage?: any;
};

const TemplateDefault: React.FC<TemplateDefaultProps> = ({
  children,
  header,
  description,
  headerBackgroundImage,
}) => (
  <S.Wrapper>
    <S.Header type={header.type}>
      {header.type === 'page' && (
        <S.HeaderBackground
          source={headerBackgroundImage || HeaderBackgroundImageDefault}
        />
      )}
      <Header type={header.type} title={header.title} goBack={header.goBack} />
      <S.HeaderDescriptionWrapper>
        {description && (
          <Text fontSize={20} weight="Bold" color={theme.colors.white}>
            {description}
          </Text>
        )}
      </S.HeaderDescriptionWrapper>
    </S.Header>
    <ScrollView contentContainerStyle={{ padding: 16 }}>{children}</ScrollView>
  </S.Wrapper>
);

export default TemplateDefault;
