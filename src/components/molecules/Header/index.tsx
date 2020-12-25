import React from 'react';

import HeaderPrimary from './HeaderPrimary';
import HeaderPages from './HeaderPages';

type HeaderProps = {
  title?: string;
  type: 'main' | 'page';
  goBack?: boolean;
};

const Header: React.FC<HeaderProps> = ({ title, type, goBack }) => {
  return (
    <>
      {type === 'main' && <HeaderPrimary />}
      {type === 'page' && <HeaderPages title={title} goBack={goBack} />}
    </>
  );
};

export default Header;
