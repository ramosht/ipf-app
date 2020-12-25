import React from 'react';

import * as S from './styles';

type TemplateDefaultProps = {
  children: React.ReactNode;
};

const TemplateDefault: React.FC<TemplateDefaultProps> = ({ children }) => (
  <S.Wrapper>{children}</S.Wrapper>
);

export default TemplateDefault;
