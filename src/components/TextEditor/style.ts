import { spacing, ThemeColors } from '@/theme';
import { StyleSheet } from 'react-native';

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    toolBox: {
      flexDirection: 'row',
    },
    editor: {
      flex: 1,
      width: '100%',
      backgroundColor: colors.lightPrimary,
    },
    editorContainer: {
      marginTop: spacing.lg,
      backgroundColor: colors.lightPrimary,
      overflow: 'hidden',
    },
    toolbar: {
      alignSelf: 'flex-start',
      marginTop: spacing.md,

      flexDirection: 'row',
      alignItems: 'center',

      backgroundColor: colors.primary,

      borderRadius: spacing.sm,

      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,

      gap: spacing.lg,
    },

    separator: {
      width: 1,
      height: 22,
      backgroundColor: colors.lightBorder,
    },
    editorLoader: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,

      alignItems: 'center',
      justifyContent: 'center',

      backgroundColor: colors.lightPrimary,

      zIndex: 10,
    },
    editorHidden: {
      opacity: 0,
    },

    editorVisible: {
      opacity: 1,
    },
  });

export default createStyles;
