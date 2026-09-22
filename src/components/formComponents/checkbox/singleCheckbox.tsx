import React from 'react';
import { Pressable, StyleProp, Text, View, ViewStyle } from 'react-native';
import { Check } from 'lucide-react-native';
import { useTheme } from '@/context/ThemeContext';
import createStyles from './style';

interface SingleCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  containerStyle?: StyleProp<ViewStyle>;
  disbaled?: boolean;
}

const SingleCheckbox = ({
  label,
  checked,
  onChange,
  containerStyle,
  disbaled,
}: SingleCheckboxProps) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const handlePress = () => {
    onChange(!checked);
  };

  return (
    <Pressable
      disabled={disbaled}
      style={[styles.option, containerStyle]}
      onPress={disbaled ? () => {} : handlePress}
    >
      <View style={[styles.checkbox, checked && styles.checked]}>
        {checked && <Check size={16} color="#fff" strokeWidth={3} />}
      </View>

      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

export default SingleCheckbox;
