import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ThemeProps } from '@styles/Theme';

import { Default } from '@templates/index';
import { Text } from '@typography/index';

const Devotional: React.FC = () => {
  const theme: ThemeProps = useContext(ThemeContext);

  return (
    <Default>
      <Text fontSize={26} weight="Medium" color={theme.colors.lightGrey}>
        Devotional
      </Text>
    </Default>
  );
};

export default Devotional;
