import { EpisodeList } from '~/presentation/components/EpisodeList';
import { useEpisodes } from '~/presentation/hooks/useEpisodes';

export function EpisodesScreen() {
  const { data, fetchNextPage } = useEpisodes();

  return <EpisodeList data={data} fetchNextPage={fetchNextPage} />;
}
