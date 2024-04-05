import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { appColors } from '~/config/theme/app-theme';
import { EpisodesScreen } from '~/presentation/screens/home/EpisodesScreen';
import { LocationsScreen } from '~/presentation/screens/home/LocationsScreen';

const Tab = createMaterialTopTabNavigator();

export function TopTabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: appColors.primary,
          shadowColor: 'rgba(0, 0, 0, 0.7)',
          shadowOffset: {
            width: 0,
            height: 3,
          },
        },
        tabBarLabelStyle: {
          color: appColors.whiteText,
          fontSize: 16,
        },
        tabBarIndicatorStyle: {
          backgroundColor: appColors.whiteBackground,
          height: 4,
        },
      }}>
      <Tab.Screen name="Episodes" component={EpisodesScreen} />
      <Tab.Screen name="Locations" component={LocationsScreen} />
    </Tab.Navigator>
  );
}
