import React from 'react';
import { Pressable, StyleProp, Text, View, ViewStyle } from 'react-native';
import { Check } from 'lucide-react-native';
import { useTheme } from '@/context/ThemeContext';
import createStyles from './style';

interface CheckboxOption {
  label: string;
  value: string;
}

interface MultipleCheckboxProps {
  options: CheckboxOption[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  direction?: 'row' | 'column';
  containerStyle?: StyleProp<ViewStyle>;
}

const MultipleCheckbox = ({
  options,
  selectedValues,
  onChange,
  direction = 'row',
  containerStyle,
}: MultipleCheckboxProps) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const handlePress = (value: string) => {
    const isSelected = selectedValues.includes(value);

    if (isSelected) {
      onChange(selectedValues.filter(item => item !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  return (
    <View
      style={[styles.container, { flexDirection: direction }, containerStyle]}
    >
      {options.map(option => {
        const checked = selectedValues.includes(option.value);

        return (
          <Pressable
            key={option.value}
            style={styles.option}
            onPress={() => handlePress(option.value)}
          >
            <View style={[styles.checkbox, checked && styles.checked]}>
              {checked && <Check size={16} color="#fff" strokeWidth={3} />}
            </View>

            <Text style={styles.label}>{option.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default MultipleCheckbox;
