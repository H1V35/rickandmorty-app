import { useInfiniteQuery } from '@tanstack/react-query';

import { getLocations } from '~/actions/get-locations';

export function useLocations() {
  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ['locations', 'infinite'],
    initialPageParam: 1,
    queryFn: async (params) => getLocations(params.pageParam),
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  return {
    data,
    fetchNextPage,
  };
}
