import { useQuery } from '@tanstack/react-query';

import { getEpisodeById } from '~/actions/get-episode-by-id';

interface Props {
  episodeId: number;
}

export function useEpisode({ episodeId }: Props) {
  const { data: episode, isLoading } = useQuery({
    queryKey: ['episode', episodeId],
    queryFn: () => getEpisodeById(episodeId),
  });

  return {
    episode,
    isLoading,
  };
}
