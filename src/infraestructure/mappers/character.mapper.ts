import type { Character } from '~/domain/entities/character.entity';
import type { CharacterResponse } from '~/infraestructure/interfaces/rickandmortyapi.interfaces';

export function fromCharacterResponseToEntity(result: CharacterResponse): Character {
  return {
    id: result.id,
    name: result.name,
    image: result.image,
  };
}
