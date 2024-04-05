import { type NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { type RootStackParams } from '~/presentation/navigation/StackNavigator';

export function LocationsScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View>
      <Pressable
        onPress={() => navigation.navigate('LocationScreen', { locationId: 1 })}
        style={{
          backgroundColor: 'skyblue',
          borderRadius: 100,
          marginTop: 10,
          padding: 10,
          marginBottom: 10,
          width: '100%',
          alignItems: 'center',
        }}>
        <Text>LOCATION 1</Text>
      </Pressable>
    </View>
  );
}
