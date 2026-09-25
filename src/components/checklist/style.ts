import { spacing, ThemeColors } from '@/theme';
import { StyleSheet } from 'react-native';

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    notePanel: {
      flex: 1,
      borderRadius: spacing.sm,
      padding: spacing.md,
      marginTop: spacing.md,
      backgroundColor: colors.lightPrimary,
    },
    title: {
      fontSize: 38,
      fontWeight: '700',
      color: colors.monthTextColor,
      padding: 0,
      marginTop: spacing.md,
      // Prevent Android from adding extra font space
      includeFontPadding: false,
    },

    checkRow: {
      backgroundColor: colors.primary,
      borderRadius: 12,
      padding: 13,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    emptyCheck: {
      width: 21,
      height: 21,
      borderRadius: 7,
      borderWidth: 1.5,
      borderColor: colors.text,
    },
    checkInput: {
      flex: 1,
      color: colors.monthTextColor,
      fontSize: 13,
      marginHorizontal: 11,
      padding: 0,
    },
    addItem: {
      marginTop: 5,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 7,
      padding: 8,
    },
    addItemText: {
      color: colors.highlightColor,
      fontSize: 12,
      fontWeight: '800',
    },
  });

export default createStyles;
