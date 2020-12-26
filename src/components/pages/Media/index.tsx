import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ThemeProps } from '@styles/Theme';

import { Default } from '@templates/index';
import { Text } from '@typography/index';

const Media: React.FC = () => {
  const theme: ThemeProps = useContext(ThemeContext);

  return (
    <Default
      header={{ title: 'Mídia', type: 'page', goBack: false }}
      description="Assista os nossos cultos ao vivo"
    />
  );
};

export default Media;
