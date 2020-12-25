import React from 'react';

import * as S from './styles';

import LogoImage from '../../../assets/images/ipf.png';

const LogoHeader: React.FC = () => {
  return (
    <S.LogoClickable onPress={() => null}>
      <S.LogoWrapper>
        <S.Picture source={LogoImage} />
      </S.LogoWrapper>
    </S.LogoClickable>
  );
};

export default LogoHeader;
