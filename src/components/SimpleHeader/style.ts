import { fontSize, spacing, ThemeColors } from '@/theme';
import { StyleSheet } from 'react-native';

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.md,
      backgroundColor: colors.viewHeaderColor,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    noteText: {
      fontSize: fontSize.body,
      fontWeight: 600,
      color: colors.monthTextColor,
    },
  });

export default createStyles;
