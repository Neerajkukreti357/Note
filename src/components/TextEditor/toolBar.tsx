import { Bold, Italic, List, ListOrdered } from 'lucide-react-native';
import { Pressable, View } from 'react-native';
import styles from './style';
import { DarkColors } from '@/theme';
import { EditorBridge, useBridgeState } from '@10play/tentap-editor';

const ToolBar = ({ editor }: { editor: EditorBridge }) => {
  const editorState = useBridgeState(editor);
  return (
    <View style={styles.toolbar}>
      <Pressable onPress={() => editor.toggleBold()}>
        <Bold
          size={18}
          color={
            editorState.isBoldActive
              ? DarkColors.highlightColor
              : DarkColors.heading
          }
          strokeWidth={editorState.isBoldActive ? 3 : 2}
        />
      </Pressable>

      <Pressable onPress={() => editor.toggleItalic()}>
        <Italic
          size={18}
          color={
            editorState.isItalicActive
              ? DarkColors.highlightColor
              : DarkColors.heading
          }
          strokeWidth={editorState.isItalicActive ? 3 : 2}
        />
      </Pressable>

      <View style={styles.separator} />

      <Pressable onPress={() => editor.toggleBulletList()}>
        <List
          size={19}
          color={
            editorState.isBulletListActive
              ? DarkColors.highlightColor
              : DarkColors.heading
          }
          strokeWidth={editorState.isBulletListActive ? 3 : 2}
        />
      </Pressable>

      <Pressable onPress={() => editor.toggleOrderedList()}>
        <ListOrdered
          size={19}
          color={
            editorState.isOrderedListActive
              ? DarkColors.highlightColor
              : DarkColors.heading
          }
          strokeWidth={editorState.isOrderedListActive ? 3 : 2}
        />
      </Pressable>
    </View>
  );
};

export default ToolBar;
