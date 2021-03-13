import { Text } from '@components/typography';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import theme from '@styles/Theme';

const windowWidth = Dimensions.get('window').width;

export const Wrapper = styled.TouchableOpacity`
  height: ${windowWidth - 32}px;
  justify-content: flex-end;
  background-color: ${theme.colors.white};
`;

export const Content = styled.View`
  padding: 16px;
`;

export const Gradient = styled(LinearGradient)`
  flex: 1px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const Thumbnail = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Data = styled(Text)`
  z-index: 2;
  color: #ffffff;
  font-size: 14px;
  margin-bottom: 0px;
`;

export const Title = styled(Text)`
  z-index: 2;
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 8px;
`;

export const Description = styled(Text)`
  z-index: 2;
  color: #ffffff;
  font-size: 15px;
`;
