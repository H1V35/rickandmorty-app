import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { Pressable, View, Text, StyleSheet } from 'react-native';

import { appColors } from '~/config/theme/app-theme';
import type { Location } from '~/domain/entities/location.entity';
import type { RootStackParams } from '~/presentation/navigation/StackNavigator';

interface Props {
  item: Location;
}

export function LocationItem({ item }: Props) {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <Pressable onPress={() => navigation.navigate('LocationScreen', { locationId: item.id })}>
      <View style={styles.container}>
        <Text style={styles.type}>{item.type}</Text>

        <Text style={styles.name}>{item.name}</Text>

        <Text style={styles.dimension}>{item.dimension}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.whiteBackground,
    borderBottomWidth: 0.2,
    flex: 1,
    gap: 10,
    padding: 20,
  },

  type: {
    color: appColors.darkGrayText,
    fontSize: 14,
    fontWeight: '400',
  },

  name: {
    color: appColors.darkText,
    fontSize: 22,
    fontWeight: '500',
  },

  dimension: {
    color: appColors.darkGrayText,
    fontSize: 14,
    fontWeight: '400',
  },
});
