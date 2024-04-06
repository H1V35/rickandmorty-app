import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'react-native';

import { queryClient } from '~/config/lib/tanstack-query';
import { appColors } from '~/config/theme/app-theme';
import { StackNavigator } from '~/presentation/navigation/StackNavigator';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor={appColors.primary} />
        <StackNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
