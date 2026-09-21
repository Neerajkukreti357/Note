import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Search from '../screens/search';
import Calendar from '../screens/calendar';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { BottomTab, GlowView } from '@/components';
import TaskPriority from '../screens/taskPriority';
import { Pressable, StyleSheet, View } from 'react-native';
import { Plus } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { DarkColors, spacing, ThemeColors } from '@/theme';
import { NavigationProp } from '@/components/header/type';
import { useTheme } from '@/context/ThemeContext';

const Tab = createBottomTabNavigator();

const NavigationOptions: BottomTabNavigationOptions = {
  headerShown: false,
  animation: 'none',
};

const BottomBar = () => {
  const navigation = useNavigation<NavigationProp>();
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.bottomTabContainer}>
      <Tab.Navigator
        screenOptions={NavigationOptions}
        tabBar={props => <BottomTab {...props} />}
        initialRouteName="Home"
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Priority" component={TaskPriority} />
        <Tab.Screen name="Calendar" component={Calendar} />
      </Tab.Navigator>

      <Pressable
        style={styles.plusButton}
        onPress={() => {
          navigation.navigate('AddNote');
        }}
      >
        <GlowView size={70} color={DarkColors.highlightColor} />
        <Plus size={35} color={DarkColors.heading} />
      </Pressable>
    </View>
  );
};

export default BottomBar;

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    bottomTabContainer: {
      position: 'relative',
      flex: 1,
    },
    plusButton: {
      position: 'absolute',
      zIndex: 10,
      bottom: 100,
      right: 20,
      borderRadius: '50%',
      padding: spacing.sm,
      backgroundColor: colors.highlightColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
