import { Button } from '@components/atoms';
import { Text } from '@components/typography';
import theme from '@styles/Theme';
import React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import * as S from './styles';

type PanelProps = {
  children?: React.ReactNode;
  title: string | undefined;
  description: string | undefined;
  buttonDisabled: boolean;
  actionOnPress: () => void;
  buttonText: string;
};

const Panel: React.FC<PanelProps> = ({
  children,
  title,
  description,
  buttonDisabled,
  actionOnPress,
  buttonText,
}) => {
  return (
    <S.Wrapper>
      <ScrollView
        contentContainerStyle={styles.scrollviewStyle}
        keyboardShouldPersistTaps="always"
      >
        {title && (
          <Text
            fontSize={20}
            weight="Medium"
            color={theme.colors.lightGrey}
            style={{ marginBottom: 8 }}
          >
            {title}
          </Text>
        )}

        {description && (
          <Text
            fontSize={16}
            weight="Medium"
            color={theme.colors.lightGrey}
            style={{ marginBottom: 24 }}
          >
            {description}
          </Text>
        )}

        {children}

        <Button
          disabled={buttonDisabled}
          style={{ width: '100%', marginTop: 16 }}
          actionOnPress={actionOnPress}
        >
          {buttonText}
        </Button>
      </ScrollView>
    </S.Wrapper>
  );
};

const styles = StyleSheet.create({
  scrollviewStyle: {
    padding: 20,
  },
});

export default Panel;
