import React, { useEffect, useState } from 'react';
import theme from '@styles/Theme';

import { Default } from '@components/templates';
import { Text } from '@components/typography';
import { View } from 'react-native';

import { BankAccount, ContributionVerse } from '@components/molecules';
import * as S from './styles';

type ContribuicaoProps = {
  children?: React.ReactNode;
};

type BankAccount = {
  id: string;
  bank: string;
  agency: string;
  account: string;
};

const Contribuicao: React.FC<ContribuicaoProps> = ({ children }) => {
  const [bankAccounts, setBankAccounts] = useState<Array<BankAccount>>([]);

  const data = null;

  useEffect(() => {
    if (data) {
      const contributions: Array<BankAccount> = [];
      data.contributions.map((contribution: any) =>
        contributions.push({
          id: contribution.id,
          account: contribution.account,
          bank: contribution.bank,
          agency: contribution.agency,
        }),
      );
      setBankAccounts(contributions);
    }
  }, [data]);

  return (
    <Default
      description="Dízimos e ofertas"
      header={{ type: 'page', title: 'Contribuição', goBack: true }}
    >
      <ContributionVerse />

      <S.ChurchInfo>
        <Text
          fontSize={14}
          color={theme.colors.midGrey}
          style={{ marginBottom: 4 }}
        >
          Igreja Presbiteriana Filadélfia de Sorocaba
        </Text>
        <Text fontSize={14} color={theme.colors.midGrey}>
          CNPJ: 71.875.181/0001-48
        </Text>
      </S.ChurchInfo>

      {bankAccounts.map((account: any) => (
        <BankAccount
          key={account.id}
          account={account.account}
          bank={account.bank}
          agency={account.agency}
        />
      ))}
    </Default>
  );
};

export default Contribuicao;
