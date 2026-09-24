import React from 'react';
import AppDrawer from './AppDrawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddScreenNotes from '@/screens/AddNotesScreen';
import { useTheme } from '@/context/ThemeContext';
import ViewScreen from '@/screens/ViewScreen';
import TrashScreen from '@/screens/trashScreen';
import DraftScreen from '@/screens/draft';

export type RootStackParamList = {
  AppDrawer: undefined;
  AddNote: undefined;
  ViewScreen: undefined;
  TrashScreen: undefined;
  DraftScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootRoutes = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.primary,
        },
      }}
    >
      <Stack.Screen name="AppDrawer" component={AppDrawer} />
      <Stack.Screen name="AddNote" component={AddScreenNotes} />
      <Stack.Screen name="ViewScreen" component={ViewScreen} />
      <Stack.Screen name="TrashScreen" component={TrashScreen} />
      <Stack.Screen name="DraftScreen" component={DraftScreen} />
    </Stack.Navigator>
  );
};

export default RootRoutes;
