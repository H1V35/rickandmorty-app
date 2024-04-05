import { Image, StyleSheet, View } from 'react-native';

interface CharacterAvatarProps {
  characterUrl: string;
}

export function CharacterItem({ characterUrl }: CharacterAvatarProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: characterUrl }} style={styles.characterAvatar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'column',
    width: 100,
  },

  characterAvatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});
