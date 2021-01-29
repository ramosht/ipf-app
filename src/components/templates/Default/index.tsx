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
  bodyStyle?: any;
};

const TemplateDefault: React.FC<TemplateDefaultProps> = ({
  children,
  header,
  description,
  headerBackgroundImage,
  bodyStyle,
}) => (
  <S.Wrapper>
    <S.Header type={header.type} hasDescription={!!description}>
      {header.type === 'page' && (
        <S.HeaderBackground
          source={headerBackgroundImage || HeaderBackgroundImageDefault}
        />
      )}
      <Header
        type={header.type}
        title={header.title}
        goBack={header.goBack}
        hasDescription={!!description}
      />

      {description && (
        <S.HeaderDescriptionWrapper>
          <Text fontSize={20} weight="Bold" color={theme.colors.white}>
            {description}
          </Text>
        </S.HeaderDescriptionWrapper>
      )}
    </S.Header>
    <ScrollView
      contentContainerStyle={[{ padding: 16 }, bodyStyle]}
      keyboardShouldPersistTaps="handled"
    >
      {children}
    </ScrollView>
  </S.Wrapper>
);

export default TemplateDefault;
