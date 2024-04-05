import { type StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';

import { BackButton } from '~/presentation/components/ui/BackButton';
import { type RootStackParams } from '~/presentation/navigation/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'LocationScreen'> {}

export function LocationScreen({ navigation, route }: Props) {
  const { locationId } = route.params;

  React.useEffect(() => {
    navigation.setOptions({
      title: `Location ${locationId}`,
      headerLeft: () => (
        <BackButton onPress={() => navigation.goBack()} style={{ marginLeft: 12 }} />
      ),
    });
  }, [locationId]);

  return (
    <View>
      <Text>LocationScreen</Text>
    </View>
  );
}
