import RootRoutes from '@/routes';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BootSplash from 'react-native-bootsplash';

function App() {
  return (
    <NavigationContainer onReady={() => BootSplash.hide({ fade: true })}>
      <SafeAreaProvider>
        <RootRoutes />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
