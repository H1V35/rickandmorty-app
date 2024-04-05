import { useInfiniteQuery } from '@tanstack/react-query';

import { getSearchEpisodes } from '~/actions/get-search-episodes';

interface Props {
  search: string;
}

export function useSearchEpisodes({ search }: Props) {
  const { data, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: ['episodes', search, 'infinite'],
    initialPageParam: 1,
    queryFn: async (params) => getSearchEpisodes(search, params.pageParam),
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  return {
    data,
    isLoading,
    fetchNextPage,
  };
}
