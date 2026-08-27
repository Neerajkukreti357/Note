import { TextInput, View } from 'react-native';
import styles from './style';
import { AppColors } from '@/theme';
import TextEditor from '../TextEditor';

const General = () => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        placeholder="Title"
        style={styles.title}
        placeholderTextColor={AppColors.monthTextColor}
      />
      <TextEditor />
    </View>
  );
};

export default General;
