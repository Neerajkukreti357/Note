import React from 'react';
import AppDrawer from './AppDrawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddScreenNotes from '@/screens/AddNotesScreen';
import { AppColors } from '@/theme';

export type RootStackParamList = {
  AppDrawer: undefined;
  AddNote: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: AppColors.primary,
        },
      }}
    >
      <Stack.Screen name="AppDrawer" component={AppDrawer} />
      <Stack.Screen name="AddNote" component={AddScreenNotes} />
    </Stack.Navigator>
  );
};

export default RootRoutes;
