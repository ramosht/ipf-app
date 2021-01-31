import React, { useEffect, useState } from 'react';
import theme from '@styles/Theme';
import ContributionServices from '@services/contribution';

import { Default } from '@components/templates';
import { Text } from '@components/typography';

import { BankAccount, ContributionVerse } from '@components/molecules';
import { Alert } from 'react-native';
import { Loading } from '@components/atoms';
import * as S from './styles';
import { useLoading } from '../../../contexts/loading/loading.context';

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
  const { setLoading, loading } = useLoading();

  useEffect(() => {
    const getBankAccounts = async () => {
      setLoading(true);
      const res = await ContributionServices.getContributions();

      if (res.bankAccounts) {
        setLoading(false);
        setBankAccounts(res.bankAccounts);
      } else {
        setLoading(false);
        Alert.alert('Ocorreu um erro', res.message, [
          { text: 'Tudo bem', onPress: () => null },
        ]);
      }
    };

    getBankAccounts();
  }, []);

  return (
    <>
      {loading && <Loading />}
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

        {bankAccounts.map((account: any) => (
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
