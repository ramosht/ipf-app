import React from 'react';

import HeaderPrimary from './HeaderPrimary';
import HeaderPages from './HeaderPages';

type HeaderProps = {
  title?: string;
  type: 'main' | 'page' | 'auth';
  goBack?: boolean;
  hasDescription?: boolean;
};

const Header: React.FC<HeaderProps> = ({
  title,
  type,
  goBack,
  hasDescription,
}) => {
  return (
    <>
      {type === 'main' && <HeaderPrimary />}
      {type === 'page' && (
        <HeaderPages
          title={title}
          goBack={goBack}
          hasDescription={hasDescription}
        />
      )}
    </>
  );
};

export default Header;
