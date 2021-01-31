import { CardHome } from '@components/molecules';
import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import shortcut1 from '../../../assets/images/shortcuts/shortcut-01.png';
import shortcut2 from '../../../assets/images/shortcuts/shortcut-02.png';
import shortcut3 from '../../../assets/images/shortcuts/shortcut-03.png';

const ShortcutsHome: React.FC = () => {
  const shortcuts = [
    { title: 'Pedidos de oração', path: 'PrayerRequests', image: shortcut1 },
    { title: 'Nossas redes', path: 'Ministries', image: shortcut2 },
    { title: 'Contribuição', path: 'Contribution', image: shortcut3 },
  ];

  return (
    <FlatList
      data={shortcuts}
      keyExtractor={item => item.path}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item, index }) => (
        <View
          style={{
            marginRight: index < shortcuts.length - 1 ? 10 : 0,
          }}
        >
          <CardHome
            key={item.path}
            title={item.title}
            path={item.path}
            image={item.image}
          />
        </View>
      )}
    />
  );
};

export default ShortcutsHome;
