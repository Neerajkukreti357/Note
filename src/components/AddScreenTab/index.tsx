import React, { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { TabsValues } from './contants';
import createStyles from './style';
import { useTheme } from '@/context/ThemeContext';

type Props = {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  disbaled: boolean;
};

const Tabs = ({ active, setActive, disbaled }: Props) => {
  const translateX = useSharedValue(0);
  const { colors } = useTheme();
  const styles = createStyles(colors);

  useEffect(() => {
    translateX.value = withTiming(active, {
      duration: 250,
    });
  }, [active, translateX]);

  const animatedIndicatorStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: `${translateX.value * 100}%`,
        },
      ],
    };
  });

  return (
    <View style={styles.tabMainContainer}>
      <Animated.View style={[styles.activeIndicator, animatedIndicatorStyle]} />

      {TabsValues.map((item: string, index: number) => {
        return (
          <Pressable
            key={index}
            onPress={disbaled ? () => {} : () => setActive(index)}
            style={styles.tabButton}
          >
            <Text
              style={[
                styles.tabButtonText,
                index === active && styles.activeTabText,
                disbaled && styles.disabled,
              ]}
            >
              {item}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default Tabs;
