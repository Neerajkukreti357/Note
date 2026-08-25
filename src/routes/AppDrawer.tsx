// App.tsx
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomBar from './AppBottomBar';

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false, drawerType: 'front' }}
    >
      <Drawer.Screen name="MainTabs" component={BottomBar} />
      {/* <Drawer.Screen name="Settings" component={SettingsScreen} /> */}
    </Drawer.Navigator>
  );
}
