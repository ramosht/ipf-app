import React, { useEffect } from 'react';

import { Default } from '@templates/index';
import axios from 'axios';
import { ShortcutsHome } from '@components/organisms';
import { Image, View } from 'react-native';

const Home: React.FC = () => {
  useEffect(() => {
    const verifyStatus = async () => {
      try {
        const { data } = await axios.get('http://127.0.0.1:3333/status');
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    verifyStatus();
  }, []);

  return (
    <Default
      header={{ type: 'main' }}
      scrollView={false}
      bodyStyle={{ flex: 1, padding: 0 }}
    >
      <View style={{ flex: 1 }}>
        <Image
          style={{ width: '100%', height: '100%' }}
          source={{
            uri:
              'https://instagram.fsod2-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/139960312_225790662427449_8670610022925752031_n.jpg?_nc_ht=instagram.fsod2-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=_H9HfmAiLgQAX9jI4vc&tp=1&oh=b583c91f85ff89b744dd864c78c669f7&oe=603F6463',
          }}
        />
      </View>
      <View>
        <ShortcutsHome />
      </View>
    </Default>
  );
};

export default Home;
