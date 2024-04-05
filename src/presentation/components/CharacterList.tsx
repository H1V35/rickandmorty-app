import { FlatList, StyleSheet, Text, View } from 'react-native';

import { CharacterItem } from './CharacterItem';

import { appColors, appTheme } from '~/config/theme/app-theme';

interface Props {
  characters: string[] | undefined;
}

export function CharacterList({ characters }: Props) {
  return (
    <>
      <View style={[appTheme.globalMarginX, { marginVertical: 30 }]}>
        <Text style={styles.title}>Characters</Text>
      </View>

      <FlatList
        data={characters}
        horizontal
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
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
    marginBottom: 10,
  },
});
