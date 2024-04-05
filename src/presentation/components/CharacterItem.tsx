import { useQuery } from '@tanstack/react-query';
import { Image, StyleSheet, Text, View } from 'react-native';

import { getCharacterById } from '~/actions/get-character-by-id';

interface CharacterAvatarProps {
  characterUrl: string;
}

export function CharacterItem({ characterUrl }: CharacterAvatarProps) {
  const characterId = Number(characterUrl.split('/').pop());

  const { data: character } = useQuery({
    queryKey: ['character', characterId],
    queryFn: () => getCharacterById(characterId),
  });

  return (
    <View style={styles.container}>
      <Image source={{ uri: character?.image }} style={styles.avatar} />

      <Text style={styles.name}>{character?.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },

  name: {
    textAlign: 'center',
  },
});
