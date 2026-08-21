import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Search from '../screens/search';
import Favorites from '../screens/favorites';
import Calendar from '../screens/calendar';

const Tab = createBottomTabNavigator();

const index = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Calendar" component={Calendar} />
    </Tab.Navigator>
  );
};

export default index;
