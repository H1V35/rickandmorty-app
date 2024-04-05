import { rickandmortyApi } from '~/config/api/rickandmortyApi';
import type { Location } from '~/domain/entities/location.entity';
import type { LocationResult } from '~/infraestructure/interfaces/rickandmortyapi.interfaces';
import { fromLocationResultToEntity } from '~/infraestructure/mappers/location.mapper';

export const getLocationById = async (id: number): Promise<Location> => {
  try {
    const { data } = await rickandmortyApi.get<LocationResult>(`/location/${id}`);
    const location = fromLocationResultToEntity(data);
    return location;
  } catch (error) {
    console.log(error);
    throw new Error(`Error getting location by id: ${id}`);
  }
};
