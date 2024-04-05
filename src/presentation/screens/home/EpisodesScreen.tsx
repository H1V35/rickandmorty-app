import { useInfiniteQuery } from '@tanstack/react-query';
import React from 'react';
import { FlatList, View } from 'react-native';

import { getEpisodes } from '~/actions/get-episodes';
import { EpisodeListItem } from '~/presentation/components/EpisodeListItem';

export function EpisodesScreen() {
  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ['episodes', 'infinite'],
    initialPageParam: 1,
    queryFn: async (params) => getEpisodes(params.pageParam),
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

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
