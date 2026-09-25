import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import TextEditor from '../TextEditor';
import { Controller, useFormContext } from 'react-hook-form';
import { SimpleNoteFormData } from '@/screens/AddNotesScreen/shema';
import { CustomDropdown } from '../formComponents';
import { DropdownOptions } from './constants';
import commonStyle from '@/theme/commonStyles';
import { useTheme } from '@/context/ThemeContext';
import createStyles from './style';

const General = ({ loading }: { loading: boolean }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<SimpleNoteFormData>();

  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <KeyboardAvoidingView
      style={styles.parentContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
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
            <Text style={commonStyle.errorTextColor}>
              {errors.title.message}
            </Text>
          )}

          <Controller
            control={control}
            name="description"
            render={({ field: { onChange, value } }) => (
              <TextEditor
                value={value}
                onChange={onChange}
                loadingSubmission={loading}
                editorContainerStyle={styles.editorContainerStyle}
              />
            )}
          />

          {errors.description && (
            <Text style={commonStyle.errorTextColor}>
              {errors.description.message}
            </Text>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default General;
