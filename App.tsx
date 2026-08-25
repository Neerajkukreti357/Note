import RootRoutes from '@/routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import { Header } from '@/components';

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer onReady={() => BootSplash.hide({ fade: true })}>
        <Header />
        <RootRoutes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
