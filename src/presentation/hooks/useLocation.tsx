import { useQuery } from '@tanstack/react-query';

import { getLocationById } from '~/actions/get-location-by-id';

interface Props {
  locationId: number;
}

export function useLocation({ locationId }: Props) {
  const { data: location } = useQuery({
    queryKey: ['location', locationId],
    queryFn: () => getLocationById(locationId),
  });

  return {
    location,
  };
}
