import theme from '@styles/Theme';
import React from 'react';
import Text from '../../typography/Text';

type TextEmptyPageProps = {
  children: React.ReactNode;
};

const TextEmptyPage: React.FC<TextEmptyPageProps> = ({ children }) => {
  return (
    <Text
      fontSize={26}
      weight="Bold"
      color={theme.colors.grey}
      style={{ marginBottom: 17 }}
    >
      {children}
    </Text>
  );
};

export default TextEmptyPage;
