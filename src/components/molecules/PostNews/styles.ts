import { Text } from '@components/typography';
import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(Text)`
  font-size: 14px;
`;

export const Data = styled(Text)``;

export const Thumbnail = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 8px;
`;
