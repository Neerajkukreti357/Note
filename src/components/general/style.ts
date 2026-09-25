import { spacing, ThemeColors } from '@/theme';
import { StyleSheet } from 'react-native';

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    mainContainer: {
      backgroundColor: colors.lightPrimary,
      borderRadius: spacing.sm,
      marginTop: spacing.md,
      padding: spacing.md,
      flex: 1,
    },
    editorContainerStyle: {
      flex: 1,
      height: 40,
    },
    parentContainer: {
      flex: 1,
      marginTop: spacing.sm,
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
