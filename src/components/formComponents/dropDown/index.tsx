// components/CustomDropdown.tsx
import React from 'react';
import { View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from './style';
import { CustomDropdownProps } from './type';

function CustomDropdown<T extends string | number>({
  data,
  value,
  onChange,
  placeholder = 'Select item',
  labelField = 'label',
  valueField = 'value',
  containerStyle,
  dropdownStyle,
  placeholderStyle,
  selectedTextStyle,
  disable = false,
  search = false,
}: CustomDropdownProps<T>) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Dropdown
        style={[styles.dropdown, dropdownStyle]}
        placeholderStyle={[styles.placeholderStyle, placeholderStyle]}
        selectedTextStyle={[styles.selectedTextStyle, selectedTextStyle]}
        data={data}
        labelField={labelField}
        valueField={valueField}
        placeholder={placeholder}
        value={value}
        onChange={item => onChange(item[valueField as keyof typeof item])}
        disable={disable}
        search={search}
      />
    </View>
  );
}

export default CustomDropdown;
