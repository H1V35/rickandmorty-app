import { type StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { appColors, appTheme } from '~/config/theme/app-theme';
import { CharacterList } from '~/presentation/components/CharacterList';
import { BackButton } from '~/presentation/components/ui/BackButton';
import { useEpisode } from '~/presentation/hooks/useEpisode';
import { type RootStackParams } from '~/presentation/navigation/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'EpisodeScreen'> {}

export function EpisodeScreen({ navigation, route }: Props) {
  const { episodeId } = route.params;

  const { episode } = useEpisode({ episodeId });

  React.useEffect(() => {
    navigation.setOptions({
      title: episode?.name || '',
      headerLeft: () => (
        <BackButton onPress={() => navigation.goBack()} style={{ marginLeft: 12 }} />
      ),
    });
  }, [episode]);

  return (
    <View>
      <View style={[styles.container, appTheme.globalMarginX]}>
        <Text style={styles.title}>
          {episode?.episode}: {episode?.name}
        </Text>

        <Text style={styles.airDate}>{episode?.air_date}</Text>
      </View>

      <CharacterList characters={episode?.characters} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  title: {
    color: appColors.darkText,
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },

  airDate: {
    color: appColors.darkGrayText,
    fontSize: 16,
    fontWeight: '400',
  },
});
