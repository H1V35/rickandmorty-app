import { useInfiniteQuery } from '@tanstack/react-query';

import { getEpisodes } from '~/actions/get-episodes';

export function useEpisodes() {
  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ['episodes', 'infinite'],
    initialPageParam: 1,
    queryFn: async (params) => getEpisodes(params.pageParam),
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  return {
    data,
    fetchNextPage,
  };
}
