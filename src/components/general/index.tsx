import { Text, TextInput, View } from 'react-native';
import styles from './style';
import { AppColors } from '@/theme';
import TextEditor from '../TextEditor';
import { Controller, useFormContext } from 'react-hook-form';
import { SimpleNoteFormData } from '@/screens/AddNotesScreen/shema';
import { CustomDropdown } from '../formComponents';
import { DropdownOptions } from './constants';

const General = ({ loading }: { loading: boolean }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<SimpleNoteFormData>();

  return (
    <View style={styles.mainContainer}>
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

      <Controller
        control={control}
        name="description"
        render={({ field: { onChange, value } }) => (
          <TextEditor
            value={value}
            onChange={onChange}
            loadingSubmission={loading}
          />
        )}
      />

      {errors.description && (
        <Text style={{ color: 'red' }}>{errors.description.message}</Text>
      )}
    </View>
  );
};

export default General;
