import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const ThumbnailWrapper = styled.View`
  width: 20%;
  margin-right: 16px;
`;

export const Thumbnail = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 8px;
`;

export const TextWrapper = styled.View`
  width: 70%;
`;
