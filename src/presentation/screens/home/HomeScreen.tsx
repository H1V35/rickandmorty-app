import { type NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';

import { SearchButton } from '~/presentation/components/ui/SearchButton';
import { type RootStackParams } from '~/presentation/navigation/StackNavigator';
import { TopTabsNavigator } from '~/presentation/navigation/TopTabsNavigator';

export function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <SearchButton
          style={{ marginRight: 12 }}
          onPress={() => navigation.navigate('SearchScreen')}
        />
      ),
    });
  }, []);

  return <TopTabsNavigator />;
}
