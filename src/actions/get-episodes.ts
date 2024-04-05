import { rickandmortyApi } from '~/config/api/rickandmortyApi';
import type { Episode } from '~/domain/entities/episode.entity';
import type { EpisodesPaginatedResponse } from '~/infraestructure/interfaces/rickandmortyapi.interfaces';
import { fromEpisodeResultToEntity } from '~/infraestructure/mappers/episode.mapper';

export const getEpisodes = async (page: number): Promise<Episode[]> => {
  try {
    const url = `/episode?page=${page}`;
    const { data } = await rickandmortyApi.get<EpisodesPaginatedResponse>(url);

    const episodes = data.results.map((result) => fromEpisodeResultToEntity(result));

    return episodes;
  } catch (error) {
    console.log(error);
    throw new Error('Error getting episodes');
  }
};
