import React from 'react';

import Template from '@templates/Default';
import Text from '@typography/DefaultTitle';
import appInfo from '../../../../app.json';

const Home: React.FC = () => (
  <Template>
    <Text>{`Hello ${appInfo.name}`}</Text>
  </Template>
);

export default Home;
