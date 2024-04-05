import { useInfiniteQuery } from '@tanstack/react-query';

import { getSearchEpisodes } from '~/actions/get-search-episodes';
import { getSearchLocations } from '~/actions/get-search-locations';

interface Props {
  previousTab: string;
  search: string;
}

export function useSearchRequest({ previousTab, search }: Props) {
  const getSearchSelect = (search: string, pageParam: number) => {
    if (previousTab === 'Episodes') {
      return getSearchEpisodes(search, pageParam);
    }

    if (previousTab === 'Locations') {
      return getSearchLocations(search, pageParam);
    }
  };

  const { data, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: [previousTab, search, 'infinite'],
    initialPageParam: 1,
    queryFn: async (params) => getSearchSelect(search, params.pageParam),
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  return {
    data,
    isLoading,
    fetchNextPage,
  };
}
