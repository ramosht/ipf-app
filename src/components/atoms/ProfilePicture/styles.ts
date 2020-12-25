import { CSSProperties } from 'react';
import styled from 'styled-components/native';

type PictureWrapperProps = {
  style: CSSProperties;
};

export const PictureWrapper = styled.View<PictureWrapperProps>`
  width: 36px;
  height: 36px;
`;

export const Picture = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 48px;
`;
