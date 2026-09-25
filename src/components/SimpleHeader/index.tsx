import { useTheme } from '@/context/ThemeContext';
import { ArrowLeft, Pencil, Trash2 } from 'lucide-react-native';
import { Pressable, StyleProp, Text, View, ViewStyle } from 'react-native';
import createStyles from './style';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Note } from '@/store/type';

type RootStackParamList = {
  AddNote: { item: Note };
};

const SimpleHeader = ({
  title,
  isEditable = true,
  containerStyle,
  item,
  onDelete,
}: {
  title?: string;
  isEditable?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  item?: Note;
  onDelete?: () => void;
}) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const nvigation = useNavigation();
  const navigate = useNavigation<NavigationProp<RootStackParamList>>();
  console.log(item, 'item');
  return (
    <View style={[styles.container, containerStyle]}>
      <Pressable onPress={() => nvigation.goBack()}>
        <ArrowLeft size={23} color={colors.monthTextColor} />
      </Pressable>
      <Text style={styles.noteText}>{title ? title : 'Note'}</Text>
      {isEditable ? (
        <View style={styles.editDeleteContainer}>
          {item?.is_deleted !== 1 && (
            <Pressable
              onPress={() => item && navigate.navigate('AddNote', { item })}
            >
              <Pencil size={23} color={colors.monthTextColor} />
            </Pressable>
          )}

          <Pressable onPress={onDelete}>
            <Trash2 size={23} color={colors.closeButtonColor} />
          </Pressable>
        </View>
      ) : (
        <Pressable />
      )}
    </View>
  );
};

export default SimpleHeader;
