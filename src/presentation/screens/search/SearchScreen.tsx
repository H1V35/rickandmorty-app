import { type NavigationProp, useNavigation, useNavigationState } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, StyleSheet, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { appColors, appTheme } from '~/config/theme/app-theme';
import { EpisodeList } from '~/presentation/components/EpisodeList';
import { BackButton } from '~/presentation/components/ui/BackButton';
import { useSearchEpisodes } from '~/presentation/hooks/useSearchEpisodes';
import { type RootStackParams } from '~/presentation/navigation/StackNavigator';

export function SearchScreen() {
  const [search, setSearch] = React.useState('');

  const { data, isLoading, fetchNextPage } = useSearchEpisodes({ search });
  const { bottom } = useSafeAreaInsets();
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

  const screenTitle = `Search ${previousTab !== 'None' && previousTab === 'Episodes' ? 'episodes' : 'locations'}`;

  React.useEffect(() => {
    navigation.setOptions({
      title: screenTitle,
      headerLeft: () => (
        <BackButton onPress={() => navigation.goBack()} style={{ marginLeft: 12 }} />
      ),
    });
  }, []);

  return (
    <View style={[{ paddingBottom: bottom + 50 }, styles.container]}>
      <View style={appTheme.globalMarginX}>
        <TextInput
          placeholder="Search"
          autoFocus
          autoCorrect={false}
          onChangeText={setSearch}
          value={search}
          style={styles.searchInput}
        />

        {isLoading && (
          <ActivityIndicator size="large" color={appColors.primary} style={{ paddingTop: 20 }} />
        )}
      </View>

      {search && previousTab === 'Episodes' && (
        <EpisodeList data={data} fetchNextPage={fetchNextPage} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.whiteBackground,
    flex: 1,
  },

  searchInput: {
    borderBottomWidth: 2,
    borderColor: appColors.primary,
    fontSize: 26,
    marginBottom: 10,
    marginTop: 30,
    paddingBottom: 10,
  },
});
