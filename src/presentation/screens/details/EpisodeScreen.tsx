import { type StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';

import { BackButton } from '~/presentation/components/ui/BackButton';
import { type RootStackParams } from '~/presentation/navigation/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'EpisodeScreen'> {}

export function EpisodeScreen({ navigation, route }: Props) {
  const { episodeId } = route.params;

  React.useEffect(() => {
    navigation.setOptions({
      title: `Episode ${episodeId}`,
      headerLeft: () => (
        <BackButton onPress={() => navigation.goBack()} style={{ marginLeft: 12 }} />
      ),
    });
  }, []);

  return (
    <View>
      <Text>EpisodeScreen</Text>
    </View>
  );
}
