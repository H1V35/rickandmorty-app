import { FlatList, StyleSheet, Text, View } from 'react-native';

import { CharacterItem } from './CharacterItem';

import { appColors, appTheme } from '~/config/theme/app-theme';

interface Props {
  title: string;
  characters: string[] | undefined;
}

export function CharacterList({ title, characters }: Props) {
  return (
    <View style={styles.container}>
      <View style={[appTheme.globalMarginX, { marginBottom: 15 }]}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <FlatList
        data={characters}
        horizontal
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 10 }}
        renderItem={({ item }) => <CharacterItem characterUrl={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    minHeight: 220,
  },

  title: {
    color: appColors.darkText,
    fontSize: 20,
    fontWeight: '500',
  },
});
