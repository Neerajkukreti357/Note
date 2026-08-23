import React from 'react';
import { Pressable, View } from 'react-native';

import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { House, Search, Heart, CalendarDays } from 'lucide-react-native';
import styles from './styles';
import { AppColors } from '@/theme';

const icons = {
  Home: House,
  Search: Search,
  Favorites: Heart,
  Calendar: CalendarDays,
};

const BottomTab = ({ state, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          const Icon = icons[route.name as keyof typeof icons];

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <Pressable key={route.key} onPress={onPress} style={styles.tab}>
              <View
                style={[
                  styles.iconContainer,
                  isFocused && styles.activeIconContainer,
                ]}
              >
                <Icon
                  size={24}
                  color={isFocused ? AppColors.primary : AppColors.heading}
                />
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default BottomTab;
