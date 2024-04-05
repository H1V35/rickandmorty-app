import { rickandmortyApi } from '~/config/api/rickandmortyApi';
import type { Character } from '~/domain/entities/character.entity';
import type { CharacterResponse } from '~/infraestructure/interfaces/rickandmortyapi.interfaces';
import { fromCharacterResponseToEntity } from '~/infraestructure/mappers/character.mapper';

export const getCharacterById = async (id: number): Promise<Character> => {
  try {
    const { data } = await rickandmortyApi.get<CharacterResponse>(`/character/${id}`);
    const episode = fromCharacterResponseToEntity(data);
    return episode;
  } catch (error) {
    console.log(error);
    throw new Error(`Error getting character by id: ${id}`);
  }
};
