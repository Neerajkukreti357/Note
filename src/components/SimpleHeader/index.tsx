import { useTheme } from '@/context/ThemeContext';
import { ArrowLeft, Pencil } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';
import createStyles from './style';
import { useNavigation } from '@react-navigation/native';

const SimpleHeader = () => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const nvigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => nvigation.goBack()}>
        <ArrowLeft size={20} color={colors.monthTextColor} />
      </Pressable>
      <Text style={styles.noteText}>Note</Text>
      <Pressable>
        <Pencil size={20} color={colors.monthTextColor} />
      </Pressable>
    </View>
  );
};

export default SimpleHeader;
