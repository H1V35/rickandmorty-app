import { type NavigationProp, useNavigation, useNavigationState } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

import { BackButton } from '~/presentation/components/ui/BackButton';
import { type RootStackParams } from '~/presentation/navigation/StackNavigator';

export function SearchScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const previousTab = useNavigationState((state) => {
    const tabNavigator = state.routes.find((route) => route.name === 'HomeScreen');

    if (
      tabNavigator &&
      tabNavigator.state &&
      'routes' in tabNavigator.state &&
      'index' in tabNavigator.state &&
      typeof tabNavigator.state.index === 'number'
    ) {
      const activeRoute = tabNavigator.state.routes[tabNavigator.state.index];
      return activeRoute.name;
    }

    return 'None';
  });

  const screenTitle = `Search ${previousTab === 'Episodes' ? 'episodes' : 'locations'}`;

  React.useEffect(() => {
    navigation.setOptions({
      title: screenTitle,
      headerLeft: () => (
        <BackButton onPress={() => navigation.goBack()} style={{ marginLeft: 12 }} />
      ),
    });
  }, []);

  return (
    <View>
      <Text>SearchScreen</Text>

      <Text>Previous tab: {previousTab}</Text>
    </View>
  );
}
