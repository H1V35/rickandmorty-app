import type { Location } from '~/domain/entities/location.entity';
import type { LocationResult } from '~/infraestructure/interfaces/rickandmortyapi.interfaces';

export function fromLocationResultToEntity(result: LocationResult): Location {
  return {
    id: result.id,
    name: result.name,
    type: result.type,
    dimension: result.dimension,
    residents: [...result.residents],
    url: result.url,
    created: result.created,
  };
}
