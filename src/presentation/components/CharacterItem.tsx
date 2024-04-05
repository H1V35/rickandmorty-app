import { Image, StyleSheet, Text, View } from 'react-native';

import { useCharacter } from '../hooks/useCharacter';

interface CharacterAvatarProps {
  characterUrl: string;
}

export function CharacterItem({ characterUrl }: CharacterAvatarProps) {
  const characterId = Number(characterUrl.split('/').pop());

  const { character } = useCharacter({ characterId });

  return (
    <View style={styles.container}>
      <Image source={{ uri: character?.image }} style={styles.avatar} />

      <Text style={styles.name}>{character?.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 180,
    marginHorizontal: 10,
    display: 'flex',
    flexDirection: 'column',
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
