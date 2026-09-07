import RootRoutes from '@/routes/RootRoutes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import { StatusBar } from 'react-native';
import { useEffect } from 'react';
import { createTables } from '@/services/notesServices';
import { requestMicrophonePermission } from '@/utils/permissions';

function App() {
  useEffect(() => {
    createTables();
    requestMicrophonePermission();
  }, []);
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <NavigationContainer onReady={() => BootSplash.hide({ fade: true })}>
        <RootRoutes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
