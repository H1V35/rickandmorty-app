import { useNavigationState } from '@react-navigation/native';

export function useSearch() {
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

  const screenTitle = `Search ${previousTab === 'Locations' ? 'locations' : 'episodes'}`;

  return {
    previousTab,
    screenTitle,
  };
}
