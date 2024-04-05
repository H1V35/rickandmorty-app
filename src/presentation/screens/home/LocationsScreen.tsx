import { LocationList } from '~/presentation/components/LocationList';
import { useLocations } from '~/presentation/hooks/useLocations';

export function LocationsScreen() {
  const { data, fetchNextPage } = useLocations();

  return <LocationList data={data} fetchNextPage={fetchNextPage} />;
}
