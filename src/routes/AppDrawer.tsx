// App.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomBar from './AppBottomBar';
import BootSplash from 'react-native-bootsplash';

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <NavigationContainer onReady={() => BootSplash.hide({ fade: true })}>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="MainTabs" component={BottomBar} />
        {/* <Drawer.Screen name="Settings" component={SettingsScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
