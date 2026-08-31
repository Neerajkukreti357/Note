import React, { useState } from 'react';
import { View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from './style';

const priorityOptions = [
  { label: 'High', value: 1 },
  { label: 'Medium', value: 2 },
  { label: 'Low', value: 3 },
];

const PrioritySelect = () => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={priorityOptions}
        labelField="label"
        valueField="value"
        placeholder="Select priority"
        value={value}
        onChange={item => setValue(item.value)}
      />
    </View>
  );
};

export default PrioritySelect;
