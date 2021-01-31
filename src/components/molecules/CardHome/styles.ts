import { Text } from '@components/typography';
import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  width: 156px;
  height: 156px;
  border-radius: 12px;
  overflow: hidden;
`;

export const Background = styled.ImageBackground`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const Title = styled(Text)`
  position: absolute;
  bottom: 8px;
  left: 8px;
`;
