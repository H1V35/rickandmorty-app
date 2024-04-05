import { LocationList } from '~/presentation/components/LocationList';
import { useLocations } from '~/presentation/hooks/useLocations';

export function LocationsScreen() {
  const { data, fetchNextPage } = useLocations();

  // TODO: Loader for isLoading
  // TODO: Show message if !data

  return <LocationList data={data} fetchNextPage={fetchNextPage} />;
}
