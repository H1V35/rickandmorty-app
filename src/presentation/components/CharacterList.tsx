import { FlatList, StyleSheet, Text, View } from 'react-native';

import { CharacterItem } from './CharacterItem';

import { appColors, appTheme } from '~/config/theme/app-theme';

interface Props {
  title: string;
  characters: string[] | undefined;
}

export function CharacterList({ title, characters }: Props) {
  return (
    <>
      <View style={[appTheme.globalMarginX, { marginTop: 25, marginBottom: 15 }]}>
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
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    color: appColors.darkText,
    fontSize: 20,
    fontWeight: '500',
  },
});
