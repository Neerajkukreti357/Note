import { AppColors } from '@/theme';
import React, { useEffect } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

type AnimatedToggleProps = {
  value: boolean;
  onValueChange: (value: boolean) => void;
};

const TRACK_WIDTH = 46;
const TRACK_HEIGHT = 26;
const THUMB_SIZE = 20;
const PADDING = 3;

const AnimatedToggle = ({ value, onValueChange }: AnimatedToggleProps) => {
  const progress = useSharedValue(value ? 1 : 0);

  useEffect(() => {
    progress.value = withSpring(value ? 1 : 0, {
      damping: 15,
      stiffness: 180,
    });
  }, [value, progress]);

  const animatedThumbStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      progress.value,
      [0, 1],
      [PADDING, TRACK_WIDTH - THUMB_SIZE - PADDING],
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

const styles = StyleSheet.create({
  pressable: {
    width: TRACK_WIDTH,
    height: TRACK_HEIGHT,
    justifyContent: 'center',
  },

  track: {
    width: TRACK_WIDTH,
    height: TRACK_HEIGHT,
    borderRadius: TRACK_HEIGHT / 2,
    justifyContent: 'center',
  },

  thumb: {
    position: 'absolute',

    width: THUMB_SIZE,
    height: THUMB_SIZE,
    borderRadius: THUMB_SIZE / 2,

    backgroundColor: AppColors.monthTextColor,
  },
});

export default AnimatedToggle;
