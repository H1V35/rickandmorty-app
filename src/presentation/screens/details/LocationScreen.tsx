import { type StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { appColors, appTheme } from '~/config/theme/app-theme';
import { CharacterList } from '~/presentation/components/CharacterList';
import { BackButton } from '~/presentation/components/ui/BackButton';
import { useLocation } from '~/presentation/hooks/useLocation';
import { type RootStackParams } from '~/presentation/navigation/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'LocationScreen'> {}

export function LocationScreen({ navigation, route }: Props) {
  const { locationId } = route.params;

  const { location } = useLocation({ locationId });

  React.useEffect(() => {
    navigation.setOptions({
      title: location?.name || '',
      headerLeft: () => (
        <BackButton onPress={() => navigation.goBack()} style={{ marginLeft: 12 }} />
      ),
    });
  }, [location]);

  return (
    <View>
      <View style={[styles.container, appTheme.globalMarginX]}>
        <Text style={styles.title}>{location?.name}</Text>

        <Text style={styles.dimension}>{location?.dimension}</Text>
      </View>

      {location?.residents.length !== 0 && (
        <CharacterList title="Residents" characters={location?.residents} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 60,
    marginTop: 20,
  },

  title: {
    color: appColors.darkText,
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },

  dimension: {
    color: appColors.darkGrayText,
    fontSize: 16,
    fontWeight: '400',
  },
});
