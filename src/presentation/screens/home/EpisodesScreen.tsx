import { FlatList, View } from 'react-native';

import { EpisodeListItem } from '~/presentation/components/EpisodeListItem';
import { useEpisodes } from '~/presentation/hooks/useEpisodes';

export function EpisodesScreen() {
  const { data, fetchNextPage } = useEpisodes();

  return (
    <View>
      <FlatList
        data={data?.pages.flat() ?? []}
        keyExtractor={(episode, index) => `${episode.id}-${index}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <EpisodeListItem item={item} />}
        onEndReachedThreshold={0.8}
        onEndReached={() => fetchNextPage()}
      />
    </View>
  );
}
