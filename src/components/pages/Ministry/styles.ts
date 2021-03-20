import { Text } from '@components/typography';
import theme from '@styles/Theme';
import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView``;

export const Title = styled(Text)`
  text-align: center;
  margin-bottom: 8px;
  font-size: 26px;
  color: ${theme.colors.midGrey};
  text-transform: uppercase;
`;

export const Body = styled(Text)`
  margin-top: 16px;
  font-size: 16px;
`;

export const SeeMore = styled(Text)`
  text-align: center;
  font-size: 15px;
  border-bottom-width: 1.5px;
  border-color: ${theme.colors.secondary};
  padding-bottom: 4px;
`;
