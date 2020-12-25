import React from 'react';

import HeaderPrimary from './HeaderPrimary';
import HeaderPages from './HeaderPages';

type HeaderProps = {
  title?: string;
  type: 'main' | 'page';
};

const Header: React.FC<HeaderProps> = ({ title, type }) => {
  return (
    <>
      {type === 'main' && <HeaderPrimary />}
      {type === 'page' && <HeaderPages title={title} />}
    </>
  );
};

export default Header;
