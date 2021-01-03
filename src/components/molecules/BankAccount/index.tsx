import React from 'react';

import { Text } from '@components/typography';
import theme from '@styles/Theme';
import * as S from './styles';

type BankAccountProps = {
  bank: string;
  agency: string;
  account: string;
};

const BankAccount: React.FC<BankAccountProps> = ({ bank, agency, account }) => {
  return (
    <S.Wrapper>
      <S.AccountWrapper>
        <Text
          color={theme.colors.midGrey}
          fontSize={14}
          weight="Bold"
          style={{ marginBottom: 4 }}
        >
          {`Banco: `}
        </Text>
        <Text color={theme.colors.midGrey} fontSize={14}>
          {bank}
        </Text>
      </S.AccountWrapper>
      <S.AccountWrapper>
        <Text
          color={theme.colors.midGrey}
          fontSize={14}
          weight="Bold"
          style={{ marginBottom: 4 }}
        >
          {`Agência: `}
        </Text>
        <Text color={theme.colors.midGrey} fontSize={14}>
          {agency}
        </Text>
      </S.AccountWrapper>
      <S.AccountWrapper>
        <Text
          color={theme.colors.midGrey}
          fontSize={14}
          weight="Bold"
          style={{ marginBottom: 4 }}
        >
          {`Conta: `}
        </Text>
        <Text color={theme.colors.midGrey} fontSize={14}>
          {account}
        </Text>
      </S.AccountWrapper>
    </S.Wrapper>
  );
};

export default BankAccount;
