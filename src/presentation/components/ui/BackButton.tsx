import { Ionicons } from '@expo/vector-icons';
import { Pressable, type StyleProp, type ViewStyle } from 'react-native';

import { appColors } from '~/config/theme/app-theme';

interface Props {
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

export function BackButton({ style, onPress }: Props) {
  return (
    <Pressable style={style} onPress={onPress}>
      <Ionicons name="arrow-back" size={30} color={appColors.whiteText} />
    </Pressable>
  );
}
