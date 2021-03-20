import React from 'react';
import * as S from './styles';

type CarouselIndicatorProps = {
  length: number;
  current: number;
};

const CarouselIndicator: React.FC<CarouselIndicatorProps> = ({
  length,
  current,
}) => {
  return (
    <S.Wrapper>
      {Array.from(Array(length).keys()).map((item, index) => (
        <S.Dot
          transition={['width', 'backgroundColor']}
          key={item}
          isCurrent={index === current}
        />
      ))}
    </S.Wrapper>
  );
};

export default CarouselIndicator;
