import React, { useRef, useState } from 'react';
import { View, TextInput, Animated, Pressable } from 'react-native';
import { Search, X } from 'lucide-react-native';
import styles from './style';
import { AppColors } from '@/theme';
import { badgeColors } from '@/theme/colors';

const SearchInput = () => {
  const [search, setSearch] = useState('');

  const clearAnimation = useRef(new Animated.Value(0)).current;

  const handleSearchChange = (text: string) => {
    setSearch(text);

    Animated.spring(clearAnimation, {
      toValue: text.length > 0 ? 1 : 0,
      friction: 7,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  const clearSearch = () => {
    setSearch('');

    Animated.spring(clearAnimation, {
      toValue: 0,
      friction: 7,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  const clearIconStyle = {
    opacity: clearAnimation,
    transform: [
      {
        scale: clearAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0.5, 1],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Search size={21} color={AppColors.monthTextColor} strokeWidth={2} />

      <TextInput
        style={styles.input}
        placeholder="Search favorites..."
        placeholderTextColor={AppColors.monthTextColor}
        cursorColor={AppColors.monthTextColor}
        value={search}
        onChangeText={handleSearchChange}
      />

      <Animated.View style={clearIconStyle}>
        <Pressable
          onPress={clearSearch}
          hitSlop={10}
          style={styles.clearButton}
        >
          <X size={21} color={badgeColors.high?.text} strokeWidth={2} />
        </Pressable>
      </Animated.View>
    </View>
  );
};

export default SearchInput;
