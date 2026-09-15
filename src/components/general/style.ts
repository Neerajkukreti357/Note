import { spacing, ThemeColors } from '@/theme';
import { StyleSheet } from 'react-native';

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    mainContainer: {
      backgroundColor: colors.lightPrimary,
      height: '80%',
      borderRadius: spacing.sm,
      marginTop: spacing.md,
      padding: spacing.md,
    },
    editorContainerStyle: {
      flex: 1,
    },
    title: {
      fontSize: 38,
      fontWeight: '700',
      color: colors.monthTextColor,
      marginTop: spacing.md,

      padding: 0,
      margin: 0,

      // Prevent Android from adding extra font space
      includeFontPadding: false,
    },
  });

export default createStyles;
