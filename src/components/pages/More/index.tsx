import React, { useState } from 'react';

import { Default } from '@templates/index';
import { Logout, MoreItem } from '@components/molecules';

const More: React.FC = () => {
  const [pages] = useState([
    {
      label: 'A igreja',
      path: 'AboutUs',
    },
    {
      label: 'Nossas redes',
      path: 'Ministries',
    },
    {
      label: 'Nossos projetos',
      path: 'Projects',
    },
    {
      label: 'Pedidos de oração',
      path: 'PrayerRequests',
    },
    {
      label: 'Contribuição',
      path: 'Contribution',
    },
  ]);

  return (
    <>
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
      <Logout />
    </>
  );
};

export default More;
