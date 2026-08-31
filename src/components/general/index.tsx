import { Text, TextInput, View } from 'react-native';
import styles from './style';
import { AppColors } from '@/theme';
import TextEditor from '../TextEditor';
import { Controller, useFormContext } from 'react-hook-form';
import { SimpleNoteFormData } from '@/screens/AddNotesScreen/shema';

const General = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<SimpleNoteFormData>();

  return (
    <View style={styles.mainContainer}>
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
          />
        )}
      />
      {errors.title && (
        <Text style={{ color: 'red' }}>{errors.title.message}</Text>
      )}

      <Controller
        control={control}
        name="description"
        render={({ field: { onChange, value } }) => (
          <TextEditor value={value} onChange={onChange} />
        )}
      />

      {errors.description && (
        <Text style={{ color: 'red' }}>{errors.description.message}</Text>
      )}
    </View>
  );
};

export default General;
