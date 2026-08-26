// App.tsx
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomBar from './AppBottomBar';
import { Header } from '@/components';
import { useNavigationState } from '@react-navigation/native';
import { getCurrentRouteName } from '@/utils';
import { StyleSheet, View } from 'react-native';
import { AppColors } from '@/theme';

const Drawer = createDrawerNavigator();

const MainLayout = () => {
  const currentScreen = useNavigationState(state => getCurrentRouteName(state));
  return (
    <View style={styles.layout}>
      <Header screenName={currentScreen} />
      <BottomBar />
    </View>
  );
};

export default function AppDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false, drawerType: 'front' }}
    >
      <Drawer.Screen name="Home" component={MainLayout} />
      {/* <Drawer.Screen name="Settings" component={SettingsScreen} /> */}
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  layout: { flex: 1, backgroundColor: AppColors.primary },
});
