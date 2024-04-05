import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { Pressable, View, Text, StyleSheet } from 'react-native';

import { appColors } from '~/config/theme/app-theme';
import type { Episode } from '~/domain/entities/episode.entity';
import type { RootStackParams } from '~/presentation/navigation/StackNavigator';

interface Props {
  item: Episode;
}

export function EpisodeItem({ item }: Props) {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <Pressable onPress={() => navigation.navigate('EpisodeScreen', { episodeId: item.id })}>
      <View style={styles.container}>
        <Text style={styles.episode}>{item.episode}</Text>

        <Text style={styles.name}>{item.name}</Text>

        <Text style={styles.airDate}>{item.air_date}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.whiteBackground,
    borderBottomWidth: 0.2,
    flex: 1,
    gap: 10,
    padding: 20,
  },

  episode: {
    color: appColors.darkGrayText,
    fontSize: 14,
    fontWeight: '400',
  },

  name: {
    color: appColors.darkText,
    fontSize: 22,
    fontWeight: '500',
  },

  airDate: {
    color: appColors.darkGrayText,
    fontSize: 14,
    fontWeight: '400',
  },
});
