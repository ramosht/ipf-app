import styled from 'styled-components/native';

export const Wrapper = styled.TouchableWithoutFeedback``;

export const WrapperContent = styled.View`
  align-self: center;
  margin-bottom: 16px;
  margin-top: 16px;
`;

export const ProfilePicture = styled.Image`
  width: 128px;
  height: 128px;
  border-radius: 128px;
`;

export const IconWrapper = styled.View`
  background: #fff;
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
`;
