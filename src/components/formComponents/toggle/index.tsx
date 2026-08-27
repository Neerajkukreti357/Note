import { AppColors } from '@/theme';
import React, { useEffect } from 'react';
import { Pressable } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import styles from './style';

type AnimatedToggleProps = {
  value: boolean;
  onValueChange: (value: boolean) => void;
};

const TRACK_WIDTH = 46;
const THUMB_SIZE = 20;
const PADDING = 3;

const AnimatedToggle = ({ value, onValueChange }: AnimatedToggleProps) => {
  const progress = useSharedValue(value ? 1 : 0);
  const MAX_TRANSLATE_X = TRACK_WIDTH - THUMB_SIZE - PADDING * 2;

  useEffect(() => {
    progress.value = withTiming(value ? 1 : 0, {
      duration: 200,
    });
  }, [value, progress]);

  const animatedThumbStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      progress.value,
      [0, 1],
      [PADDING, PADDING + MAX_TRANSLATE_X],
    );

    return {
      transform: [{ translateX }],
    };
  });

  const animatedTrackStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: value ? AppColors.highlightColor : AppColors.text,
    };
  });

  const handlePress = () => {
    onValueChange(!value);
  };

  return (
    <Pressable
      onPress={handlePress}
      style={styles.pressable}
      accessibilityRole="switch"
      accessibilityState={{ checked: value }}
    >
      <Animated.View style={[styles.track, animatedTrackStyle]}>
        <Animated.View style={[styles.thumb, animatedThumbStyle]} />
      </Animated.View>
    </Pressable>
  );
};

export default AnimatedToggle;
