import { Text, View } from 'react-native';
import GlowView from '../glowView';
import { DarkColors } from '@/theme';
import { FilePenLine } from 'lucide-react-native';
import createStyles from './style';
import { useTheme } from '@/context/ThemeContext';

const AddMoreItem = () => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  console.log(colors);
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <GlowView size={50} />
        <FilePenLine size={40} color={DarkColors.themeChanger} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>{'Add More Notes'}</Text>
        <Text style={styles.description}>
          {
            'Create more new note just by clicking the above add button and start writing down whatever is on your mind.'
          }
        </Text>
      </View>
    </View>
  );
};

export default AddMoreItem;
