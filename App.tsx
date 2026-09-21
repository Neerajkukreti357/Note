import RootRoutes from '@/routes/RootRoutes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import { StatusBar, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import { createTables } from '@/services/notesServices';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useTheme } from '@/context/ThemeContext';

function App() {
  useEffect(() => {
    const initializeApp = async () => {
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
