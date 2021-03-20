import React from 'react';
import theme from '@styles/Theme';
import { gql, useQuery } from '@apollo/client';
import { Default } from '@components/templates';
import { Text } from '@components/typography';

import { BankAccount, ContributionVerse } from '@components/molecules';
import { Alert } from 'react-native';
import { Loading } from '@components/atoms';
import * as S from './styles';

type ContribuicaoProps = {
  children?: React.ReactNode;
};

const QUERY = gql`
  query {
    bankAccounts {
      id
      bank
      agency
      account
    }
  }
`;

const Contribuicao: React.FC<ContribuicaoProps> = ({ children }) => {
  const { data, loading: loadingGraphql, error } = useQuery(QUERY);

  if (loadingGraphql) {
    return <Loading />;
  }

  if (!data || error) {
    Alert.alert('Ocorreu um erro', 'Não foi possível obter contas bancárias.', [
      { text: 'Tudo bem', onPress: () => null },
    ]);
  }

  return (
    <>
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
          <Text
            style={{ marginTop: 8 }}
            fontSize={14}
            color={theme.colors.midGrey}
            weight="Medium"
          >
            Agora nós também temos o PIX
          </Text>
        </S.ChurchInfo>

        {data &&
          data.bankAccounts.map((account: any) => (
            <BankAccount
              key={account.id}
              account={account.account}
              bank={account.bank}
              agency={account.agency}
            />
          ))}
      </Default>
    </>
  );
};

export default Contribuicao;
