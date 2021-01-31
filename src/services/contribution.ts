import api from '@config/api';

type ContributionProps = {
  id: string;
  bank: string;
  agency: string;
  account: string;
};

type getContributionsResponse = {
  bankAccounts?: ContributionProps[];
  message?: string;
};

class Contribution {
  async getContributions(): Promise<getContributionsResponse> {
    try {
      const res = await api.get('bank-accounts/all');

      const bankAccounts = res.data.map((bankAccount: any) => ({
        id: bankAccount.id,
        bank: bankAccount.bank,
        agency: bankAccount.agency,
        account: bankAccount.account,
      }));

      return { bankAccounts };
    } catch (err) {
      return {
        message: 'Não foi possível obter as contas bancárias.',
      };
    }
  }
}

export default new Contribution();
