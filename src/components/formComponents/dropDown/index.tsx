// components/CustomDropdown.tsx
import React from 'react';
import { View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from './style';
import { CustomDropdownProps } from './type';
import { AppColors } from '@/theme';

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
    <View style={[containerStyle]}>
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
        containerStyle={styles.dropdownList} // the popover/list container itself
        itemContainerStyle={styles.itemContainer} // wraps each row — controls per-item spacing
        itemTextStyle={styles.itemText} // text style for each option
        activeColor={AppColors.primary} // background of the currently-selected row
        iconStyle={styles.icon} // the little chevron icon
        maxHeight={300}
      />
    </View>
  );
}

export default CustomDropdown;
