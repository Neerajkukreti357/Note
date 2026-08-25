import React from 'react';
import { Pressable, View } from 'react-native';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { House, Search, Heart, CalendarDays } from 'lucide-react-native';
import styles from './styles';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { AppColors } from '@/theme';

const icons = {
  Home: House,
  Search: Search,
  Favorites: Heart,
  Calendar: CalendarDays,
};

type TabButtonProps = {
  route: {
    name: string;
    key: string;
  };
  isFocused: boolean;
  onPress: () => void;
};

const TabButton = ({ route, isFocused, onPress }: TabButtonProps) => {
  const Icon = icons[route.name as keyof typeof icons];

  const iconStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: withTiming(isFocused ? 2 : 0, { duration: 300 }) },
    ],
  }));

  const labelAnimationStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(isFocused ? 1 : 0.8, { duration: 300 }) }],
  }));

  return (
    <Pressable onPress={onPress} style={styles.tab}>
      <Animated.View
        style={[
          styles.iconContainer,
          isFocused && styles.activeIconContainer,
          labelAnimationStyle,
          iconStyle,
        ]}
      >
        <Icon
          size={24}
          color={isFocused ? AppColors.primary : AppColors.heading}
        />
      </Animated.View>
    </Pressable>
  );
};

const BottomTab = ({ state, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

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
            <TabButton
              key={route.key}
              route={route}
              isFocused={isFocused}
              onPress={onPress}
            />
          );
        })}
      </View>
    </View>
  );
};

export default BottomTab;
