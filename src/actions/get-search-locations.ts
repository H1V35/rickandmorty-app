import { rickandmortyApi } from '~/config/api/rickandmortyApi';
import type { Location } from '~/domain/entities/location.entity';
import type { LocationsPaginatedResponse } from '~/infraestructure/interfaces/rickandmortyapi.interfaces';
import { fromLocationResultToEntity } from '~/infraestructure/mappers/location.mapper';

export const getSearchLocations = async (search: string, page: number): Promise<Location[]> => {
  try {
    const url = `/location?name=${search}&page=${page}`;
    const { data } = await rickandmortyApi.get<LocationsPaginatedResponse>(url);

    const locations = data.results.map((result) => fromLocationResultToEntity(result));

    return locations;
  } catch (error) {
    console.log(error);
    throw new Error('Error getting locations');
  }
};
