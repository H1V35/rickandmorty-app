import { createStackNavigator } from '@react-navigation/stack';

import { appColors } from '~/config/theme/app-theme';
import { EpisodeScreen } from '~/presentation/screens/details/EpisodeScreen';
import { LocationScreen } from '~/presentation/screens/details/LocationScreen';
import { HomeScreen } from '~/presentation/screens/home/HomeScreen';
import { SearchScreen } from '~/presentation/screens/search/SearchScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  SearchScreen: undefined;
  EpisodeScreen: { episodeId: number };
  LocationScreen: { locationId: number };
};

const Stack = createStackNavigator<RootStackParams>();

export function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: appColors.primary,
          height: 120,
          shadowColor: 'transparent',
        },
        headerTitleStyle: {
          color: appColors.whiteText,
          fontSize: 24,
          marginLeft: 12,
        },
      }}>
      <Stack.Screen
        name="HomeScreen"
        options={{ title: 'Rick and Morty' }}
        component={HomeScreen}
      />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="EpisodeScreen" component={EpisodeScreen} />
      <Stack.Screen name="LocationScreen" component={LocationScreen} />
    </Stack.Navigator>
  );
}
