import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { Pressable, View, Text, StyleSheet } from 'react-native';

import { appColors } from '~/config/theme/app-theme';
import type { Episode } from '~/domain/entities/episode.entity';
import type { RootStackParams } from '~/presentation/navigation/StackNavigator';

interface Props {
  item: Episode;
}

export function EpisodeListItem({ item }: Props) {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <Pressable onPress={() => navigation.navigate('EpisodeScreen', { episodeId: item.id })}>
      <View style={styles.container}>
        <Text style={styles.episodeText}>{item.episode}</Text>

        <Text style={styles.nameText}>{item.name}</Text>

        <Text style={styles.airDateText}>{item.air_date}</Text>
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

  episodeText: {
    color: appColors.darkGrayText,
    fontSize: 14,
    fontWeight: '400',
  },

  nameText: {
    color: appColors.darkText,
    fontSize: 22,
    fontWeight: '500',
  },

  airDateText: {
    color: appColors.darkGrayText,
    fontSize: 14,
    fontWeight: '400',
  },
});
