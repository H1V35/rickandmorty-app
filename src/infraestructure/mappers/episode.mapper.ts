import type { Episode } from '~/domain/entities/episode.entity';
import type { Result } from '~/infraestructure/interfaces/rickandmortyapi.interfaces';

export function fromEpisodeResultToEntity(result: Result): Episode {
  return {
    id: result.id,
    name: result.name,
    air_date: result.air_date,
    episode: result.episode,
    characters: [...result.characters],
    url: result.url,
    created: result.created,
  };
}