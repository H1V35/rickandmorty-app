import { Ionicons } from '@expo/vector-icons';
import { Pressable, type StyleProp, type ViewStyle } from 'react-native';

import { appColors } from '~/config/theme/app-theme';

interface Props {
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

export function SearchButton({ style, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={style}>
      <Ionicons name="search" size={30} color={appColors.whiteText} />
    </Pressable>
  );
}
