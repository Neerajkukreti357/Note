import RootRoutes from '@/routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import { Header } from '@/components';
import { useState } from 'react';
import type { NavigationState, PartialState } from '@react-navigation/native';

type NavigationStateType = NavigationState | PartialState<NavigationState>;

function App() {
  const [currentScreen, setCurrentScreen] = useState('');

  const getCurrentRouteName = (
    state: NavigationStateType | undefined,
  ): string | null => {
    if (!state) {
      return null;
    }

    if (state.index === undefined) {
      return null;
    }

    const route = state.routes[state.index];

    if (route?.state) {
      return getCurrentRouteName(route.state);
    }

    return route?.name ?? null;
  };
  return (
    <SafeAreaProvider>
      <NavigationContainer
        onStateChange={state => {
          const screenName = getCurrentRouteName(state);
          setCurrentScreen(screenName ?? '');
        }}
        onReady={() => BootSplash.hide({ fade: true })}
      >
        <Header screenName={currentScreen} />
        <RootRoutes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
