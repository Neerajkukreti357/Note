import React, { useEffect, useRef } from 'react';
import { Animated, Pressable, Text, View } from 'react-native';
import { Trash2 } from 'lucide-react-native';
import { useTheme } from '@/context/ThemeContext';
import createStyles from './style';
import { EditOrDeleteBottomTabProps } from './type';

const PermanantDeleteTab = ({
  isSheetOpen,
  setIsSheetOpen,
  onDeleteForever,
}: EditOrDeleteBottomTabProps) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const scale = useRef(new Animated.Value(0.8)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isSheetOpen) {
      scale.setValue(0.8);
      opacity.setValue(0);

      Animated.parallel([
        Animated.spring(scale, {
          toValue: 1,
          friction: 6,
          tension: 100,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 120,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.spring(scale, {
          toValue: 0.8,
          friction: 6,
          tension: 100,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isSheetOpen, scale, opacity]);

  if (!isSheetOpen) {
    return null;
  }

  return (
    <Animated.View
      style={[
        styles.popup,
        {
          opacity,
          transform: [{ scale }],
        },
      ]}
    >
      {/* Delete */}
      <Pressable
        style={styles.actionButton}
        onPress={() => {
          if (setIsSheetOpen) setIsSheetOpen(false);
          if (onDeleteForever) onDeleteForever();
        }}
      >
        <View style={styles.deleteIconContainer}>
          <Trash2 size={16} color={colors.closeButtonColor} />
        </View>
        <Text style={styles.deleteText}>Delete Forever</Text>
      </Pressable>
    </Animated.View>
  );
};

export default PermanantDeleteTab;
