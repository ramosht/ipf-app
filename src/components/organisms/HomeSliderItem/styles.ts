import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  position: relative;
  flex: 1;
`;

export const Background = styled.ImageBackground`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Content = styled.View`
  position: absolute;
  bottom: 32px;
  left: 5%;
  width: 90%;
`;

export const MetaInfo = styled.View``;

export const Category = styled.Text`
  position: absolute;
  top: 32px;
  left: 5%;
`;
