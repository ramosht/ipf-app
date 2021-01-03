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
      path: 'Igreja',
    },
    {
      label: 'Nossas redes',
      path: 'Ministerios',
    },
    {
      label: 'Nossos projetos',
      path: 'Projetos',
    },
    {
      label: 'Pedidos de oração',
      path: 'PedidosDeOracao',
    },
    {
      label: 'Contribuição',
      path: 'Contribuicao',
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
