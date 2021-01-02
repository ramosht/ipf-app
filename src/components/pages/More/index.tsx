import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { ThemeProps } from '@styles/Theme';

import { Default } from '@templates/index';
import { Text } from '@typography/index';
import { MoreItem } from '@components/molecules';

const More: React.FC = () => {
  const [pages] = useState([
    {
      label: 'A igreja',
      path: '#',
    },
    {
      label: 'Nossas redes',
      path: '#',
    },
    {
      label: 'Nossos projetos',
      path: '#',
    },
    {
      label: 'Pedidos de oração',
      path: '#',
    },
    {
      label: 'Contribuição',
      path: '#',
    },
  ]);

  return (
    <Default
      description="Mais"
      header={{ type: 'page', title: 'Mais', goBack: false }}
    >
      {pages.map(page => (
        <MoreItem key={page.label} path={page.path}>
          {page.label}
        </MoreItem>
      ))}
    </Default>
  );
};

export default More;
