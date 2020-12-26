import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ThemeProps } from '@styles/Theme';

import { Default } from '@templates/index';
import { Text } from '@typography/index';

const Devotional: React.FC = () => {
  const theme: ThemeProps = useContext(ThemeContext);

  return (
    <Default
      header={{ type: 'page', goBack: false, title: 'Devocional' }}
      description="Artigos, estudos, notícias e devocionais"
    />
  );
};

export default Devotional;
