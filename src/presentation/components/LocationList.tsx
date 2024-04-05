import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';
import { FlatList, View } from 'react-native';

import { LocationItem } from './LocationItem';

import { Location } from '~/domain/entities/location.entity';

interface Props {
  data: InfiniteData<Location[], unknown> | undefined;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<InfiniteData<Location[], unknown>, Error>>;
}

export function LocationList({ data, fetchNextPage }: Props) {
  return (
    <View>
      <FlatList
        data={data?.pages.flat() ?? []}
        keyExtractor={(location, index) => `${location.id}-${index}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <LocationItem item={item} />}
        onEndReachedThreshold={0.8}
        onEndReached={() => fetchNextPage()}
      />
    </View>
  );
}
