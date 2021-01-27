import React, { useMemo } from 'react';

import { View } from 'react-native';
import { Text } from '@components/typography';
import theme from '@styles/Theme';

interface PasswordDemandsProps {
  password: string;
}

const PasswordDemands: React.FC<PasswordDemandsProps> = ({ password }) => {
  const passwordLength = useMemo(() => {
    return password ? password.length >= 8 : false;
  }, [password]);

  const passwordHasNumber = useMemo(() => {
    const regex = /(?=.*[0-9])/;
    return regex.test(password);
  }, [password]);

  const passwordHasUpperCaseLetter = useMemo(() => {
    const regex = /(?=.*[A-Z])/;
    return regex.test(password);
  }, [password]);

  const passwordHasLowerCaseLetter = useMemo(() => {
    const regex = /(?=.*[a-z])/;
    return regex.test(password);
  }, [password]);

  return (
    <View style={{ marginTop: 16, paddingLeft: 8 }}>
      <Text
        color={theme.colors.midGrey}
        fontSize={14}
        style={{ marginBottom: 8 }}
      >
        Sua senha deve ter, pelo menos:
      </Text>
      <View style={{ paddingLeft: 8 }}>
        <Text
          style={{ marginBottom: 4 }}
          color={passwordLength ? '#1FBA5D' : '#FF4242'}
          fontSize={14}
        >
          8 dígitos
        </Text>
        <Text
          style={{ marginBottom: 4 }}
          color={passwordHasUpperCaseLetter ? '#1FBA5D' : '#FF4242'}
          fontSize={14}
        >
          Uma letra maiúscula
        </Text>
        <Text
          style={{ marginBottom: 4 }}
          color={passwordHasLowerCaseLetter ? '#1FBA5D' : '#FF4242'}
          fontSize={14}
        >
          Uma letra minúscula
        </Text>
        <Text
          style={{ marginBottom: 4 }}
          color={passwordHasNumber ? '#1FBA5D' : '#FF4242'}
          fontSize={14}
        >
          Um número
        </Text>
      </View>
    </View>
  );
};

export default PasswordDemands;
