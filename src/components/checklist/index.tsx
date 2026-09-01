import { Plus, Trash2 } from 'lucide-react-native';
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import styles from './style';
import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { CustomDropdown } from '../formComponents';
import { SimpleNoteFormData } from '@/screens/AddNotesScreen/shema';
import { DropdownOptions } from '../general/constants';
import { AppColors } from '@/theme';

const CheckList = ({ loading }: { loading: boolean }) => {
  const { height } = useWindowDimensions();
  const {
    control,
    formState: { errors },
  } = useFormContext<SimpleNoteFormData>();

  const [items, setItems] = useState(['Add your first task']);
  function addItem() {
    setItems(current => [...current, 'New checklist item']);
  }
  function deleteItem(itemIndex: number) {
    const filteredItem = items?.filter((_, index) => index !== itemIndex);
    setItems(filteredItem);
  }
  return (
    <View style={styles.notePanel}>
      <Controller
        control={control}
        name="priority"
        render={({ field: { onChange, value } }) => (
          <CustomDropdown
            placeholder="Select priority"
            value={value}
            onChange={onChange}
            data={DropdownOptions}
            disable={loading}
          />
        )}
      />
      {errors.priority && (
        <Text style={{ color: 'red' }}>{errors.priority.message}</Text>
      )}

      <Controller
        control={control}
        name="title"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Title"
            style={styles.title}
            placeholderTextColor={AppColors.monthTextColor}
            value={value}
            onChangeText={onChange}
            aria-disabled={loading}
          />
        )}
      />
      {errors.title && (
        <Text style={{ color: 'red' }}>{errors.title.message}</Text>
      )}
      <ScrollView
        style={{ maxHeight: height * 0.5 }}
        showsVerticalScrollIndicator={false}
      >
        {items.map((item, index) => (
          <View key={`${item}-${index}`} style={styles.checkRow}>
            <View style={styles.emptyCheck} />
            <TextInput
              defaultValue={item}
              style={styles.checkInput}
              placeholderTextColor="#7E879D"
            />
            <Pressable onPress={() => deleteItem(index)}>
              <Trash2 color="red" size={17} />
            </Pressable>
          </View>
        ))}
      </ScrollView>
      <Pressable style={styles.addItem} onPress={addItem}>
        <Plus color="#B7B4FF" size={17} />
        <Text style={styles.addItemText}>Add item</Text>
      </Pressable>
    </View>
  );
};
export default CheckList;
