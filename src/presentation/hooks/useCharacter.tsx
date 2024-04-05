import { useQuery } from '@tanstack/react-query';

import { getCharacterById } from '~/actions/get-character-by-id';

interface Props {
  characterId: number;
}

export function useCharacter({ characterId }: Props) {
  const { data: character, isLoading } = useQuery({
    queryKey: ['character', characterId],
    queryFn: () => getCharacterById(characterId),
  });

  return {
    character,
    isLoading,
  };
}
