import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Search from '../screens/search';
import Favorites from '../screens/favorites';
import Calendar from '../screens/calendar';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { BottomTab } from '@/components';

const Tab = createBottomTabNavigator();

const NavigationOptions: BottomTabNavigationOptions = {
  headerShown: false,
  animation: 'shift',
};

const BottomBar = () => {
  return (
    <Tab.Navigator
      screenOptions={NavigationOptions}
      tabBar={props => <BottomTab {...props} />}
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Calendar" component={Calendar} />
    </Tab.Navigator>
  );
};

export default BottomBar;
