import React, { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import styles from './style';
import { TabsValues } from './contants';

type Props = {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
};

const Tabs = ({ active, setActive }: Props) => {
  const translateX = useSharedValue(0);

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
            onPress={() => setActive(index)}
            style={styles.tabButton}
          >
            <Text
              style={[
                styles.tabButtonText,
                index === active && styles.activeTabText,
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
