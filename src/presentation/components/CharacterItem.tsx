import { Image, StyleSheet, Text, View } from 'react-native';

import { useCharacter } from '../hooks/useCharacter';

interface CharacterAvatarProps {
  characterUrl: string;
}

export function CharacterItem({ characterUrl }: CharacterAvatarProps) {
  const characterId = Number(characterUrl.split('/').pop());

  const { character, isLoading } = useCharacter({ characterId });

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Image source={require('~/assets/avatar-placeholder.png')} style={styles.avatar} />
      ) : (
        <Image source={{ uri: character?.image }} style={styles.avatar} />
      )}

      <Text style={styles.name}>{character?.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    height: 180,
    marginHorizontal: 10,
    width: 100,
  },

  avatar: {
    borderRadius: 100,
    height: 100,
    width: 100,
  },

  name: {
    textAlign: 'center',
  },
});
