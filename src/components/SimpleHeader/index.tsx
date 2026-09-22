import { useTheme } from '@/context/ThemeContext';
import { ArrowLeft, Pencil } from 'lucide-react-native';
import { Pressable, StyleProp, Text, View, ViewStyle } from 'react-native';
import createStyles from './style';
import { useNavigation } from '@react-navigation/native';

const SimpleHeader = ({
  title,
  isEditable = true,
  containerStyle,
}: {
  title?: string;
  isEditable?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const nvigation = useNavigation();
  return (
    <View style={[styles.container, containerStyle]}>
      <Pressable onPress={() => nvigation.goBack()}>
        <ArrowLeft size={20} color={colors.monthTextColor} />
      </Pressable>
      <Text style={styles.noteText}>{title ? title : 'Note'}</Text>
      {isEditable ? (
        <Pressable>
          <Pencil size={20} color={colors.monthTextColor} />
        </Pressable>
      ) : (
        <Pressable />
      )}
    </View>
  );
};

export default SimpleHeader;
