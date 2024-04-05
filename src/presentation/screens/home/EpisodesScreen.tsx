import { EpisodeList } from '~/presentation/components/EpisodeList';
import { useEpisodes } from '~/presentation/hooks/useEpisodes';

export function EpisodesScreen() {
  const { data, fetchNextPage } = useEpisodes();

  // TODO: Loader for isLoading
  // TODO: Show message if !data

  return <EpisodeList data={data} fetchNextPage={fetchNextPage} />;
}
