// App.tsx
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomBar from './AppBottomBar';
import { Header } from '@/components';
import { useNavigationState } from '@react-navigation/native';
import { getCurrentRouteName } from '@/utils';
import { StyleSheet, View } from 'react-native';
import CustomDrawerView from '@/components/drawer';
import { useTheme } from '@/context/ThemeContext';
import { ThemeColors } from '@/theme';

const Drawer = createDrawerNavigator();

const MainLayout = () => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const currentScreen = useNavigationState(state => getCurrentRouteName(state));
  return (
    <View style={styles.layout}>
      <Header
        screenName={currentScreen === 'HomeTab' ? 'Home' : currentScreen}
      />
      <BottomBar />
    </View>
  );
};

export default function AppDrawer() {
  const { colors } = useTheme();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {
          backgroundColor: colors.drawerBackgroundColor,
        },
      }}
      drawerContent={props => <CustomDrawerView {...props} />}
    >
      <Drawer.Screen name="HomeTab" component={MainLayout} />
    </Drawer.Navigator>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    layout: { flex: 1, backgroundColor: colors.primary },
  });
