import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type DropdownOption<T> = {
  label: string;
  value: T;
};

export interface CustomDropdownProps<T> {
  data: DropdownOption<T>[];
  value: T | null;
  onChange: (value: T) => void;
  placeholder?: string;
  labelField?: string;
  valueField?: string;
  containerStyle?: StyleProp<ViewStyle>;
  dropdownStyle?: StyleProp<ViewStyle>;
  placeholderStyle?: StyleProp<TextStyle>;
  selectedTextStyle?: StyleProp<TextStyle>;
  disable?: boolean;
  search?: boolean;
}
