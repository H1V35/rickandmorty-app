import { rickandmortyApi } from '~/config/api/rickandmortyApi';
import type { Episode } from '~/domain/entities/episode.entity';
import type { EpisodeResult } from '~/infraestructure/interfaces/rickandmortyapi.interfaces';
import { fromEpisodeResultToEntity } from '~/infraestructure/mappers/episode.mapper';

export const getEpisodeById = async (id: number): Promise<Episode> => {
  try {
    const { data } = await rickandmortyApi.get<EpisodeResult>(`/episode/${id}`);
    const episode = fromEpisodeResultToEntity(data);
    return episode;
  } catch (error) {
    console.log(error);
    throw new Error(`Error getting episode by id: ${id}`);
  }
};
