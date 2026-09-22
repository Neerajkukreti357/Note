import { Plus, Trash2 } from 'lucide-react-native';
import {
  Pressable,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { CustomDropdown } from '../formComponents';
import { CheckNoteFormData } from '@/screens/AddNotesScreen/shema';
import { DropdownOptions } from '../general/constants';
import { spacing } from '@/theme';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { ItemType } from './type';
import commonStyle from '@/theme/commonStyles';
import { useTheme } from '@/context/ThemeContext';
import createStyles from './style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const CheckList = ({ loading }: { loading: boolean }) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const scrollViewRef = useRef<KeyboardAwareScrollView>(null);
  const { height } = useWindowDimensions();
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext<CheckNoteFormData>();

  const [items, setItems] = useState<ItemType[]>([
    {
      id: uuidv4(),
      label: 'Add your first task',
      isCompleted: false,
    },
  ]);

  function addItem() {
    setItems(current => [
      ...current,
      {
        id: uuidv4(),
        label: '',
        isCompleted: false,
      },
    ]);
  }

  const deleteItem = (id: string) => {
    setItems(current => current.filter(item => item.id !== id));
  };

  const onChangeLabel = (id: string, text: string) => {
    setItems(current =>
      current.map(item => (item.id === id ? { ...item, label: text } : item)),
    );
  };

  useEffect(() => {
    if (items.length === 0) return;

    const timer = setTimeout(() => {
      scrollViewRef.current?.scrollToEnd(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [items.length]);

  useEffect(() => {
    setValue('checkList', JSON.stringify(items), {
      shouldValidate: true,
      shouldDirty: true,
    });
  }, [items, setValue]);

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
        <Text style={commonStyle.errorTextColor}>
          {errors.priority.message}
        </Text>
      )}

      <Controller
        control={control}
        name="title"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Title"
            style={styles.title}
            placeholderTextColor={colors.monthTextColor}
            value={value}
            onChangeText={onChange}
            aria-disabled={loading}
          />
        )}
      />
      {errors.title && (
        <Text
          style={[commonStyle.errorTextColor, { marginVertical: spacing.sm }]}
        >
          {errors.title.message}
        </Text>
      )}
      <KeyboardAwareScrollView
        ref={scrollViewRef}
        style={{ height: height * 0.5, marginTop: spacing.sm }}
        showsVerticalScrollIndicator={false}
        enableOnAndroid
        extraScrollHeight={height * 0.15}
        enableAutomaticScroll
        keyboardShouldPersistTaps="handled"
      >
        {items.map(item => (
          <View key={`${item?.id}`} style={styles.checkRow}>
            <View style={styles.emptyCheck} />
            <TextInput
              defaultValue={item?.label}
              style={styles.checkInput}
              placeholderTextColor={colors.monthTextColor}
              onChangeText={text => onChangeLabel(item.id, text)}
              key={item?.id}
              placeholder="Enter label name"
            />
            <Pressable onPress={() => deleteItem(item?.id)}>
              <Trash2 color="red" size={17} />
            </Pressable>
          </View>
        ))}
        {errors.checkList && (
          <Text style={commonStyle.errorTextColor}>
            {errors.checkList?.message}
          </Text>
        )}
      </KeyboardAwareScrollView>
      <Pressable style={styles.addItem} onPress={addItem}>
        <Plus color={colors.highlightColor} size={17} />
        <Text style={styles.addItemText}>Add item</Text>
      </Pressable>
    </View>
  );
};
export default CheckList;
