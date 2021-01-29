import styled from 'styled-components/native';

type PictureWrapperProps = {
  style: Object;
};

export const PictureWrapper = styled.TouchableOpacity<PictureWrapperProps>`
  width: 36px;
  height: 36px;
`;

export const Picture = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 48px;
`;
