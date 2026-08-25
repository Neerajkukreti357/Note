import Header from '@/components/header';
import RootRoutes from '@/routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <Header />
      <RootRoutes />
    </SafeAreaProvider>
  );
}

export default App;
