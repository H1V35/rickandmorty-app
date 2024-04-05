import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';
import { FlatList, View } from 'react-native';

import { EpisodeItem } from './EpisodeItem';

import { Episode } from '~/domain/entities/episode.entity';

interface Props {
  data: InfiniteData<Episode[], unknown> | undefined;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<InfiniteData<Episode[], unknown>, Error>>;
}

export function EpisodeList({ data, fetchNextPage }: Props) {
  return (
    <View>
      <FlatList
        data={data?.pages.flat() ?? []}
        keyExtractor={(episode, index) => `${episode.id}-${index}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <EpisodeItem item={item} />}
        onEndReachedThreshold={0.8}
        onEndReached={() => fetchNextPage()}
      />
    </View>
  );
}
