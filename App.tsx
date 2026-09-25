import RootRoutes from '@/routes/RootRoutes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import { StatusBar, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import { createTables } from '@/services/notesServices';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useTheme } from '@/context/ThemeContext';
import Toast from 'react-native-toast-message';
import { toastConfig } from '@/config/toastConfig';
import SystemNavigationBar from 'react-native-system-navigation-bar';

function App() {
  useEffect(() => {
    const initializeApp = async () => {
      SystemNavigationBar.setImmersive('sticky');
      try {
        await Promise.all([createTables()]);
      } catch (error) {
        console.error('Initialization error:', error);
      }
    };
    initializeApp();
  }, []);

  const { theme } = useTheme();

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <StatusBar
          barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        />
        <NavigationContainer onReady={() => BootSplash.hide({ fade: true })}>
          <RootRoutes />
        </NavigationContainer>
        <Toast config={toastConfig} position="bottom" bottomOffset={40} />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
