import { fontSize, spacing, ThemeColors } from '@/theme';
import { StyleSheet } from 'react-native';

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: spacing.md,
      backgroundColor: colors.viewHeaderColor,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: spacing.sm,
    },
    noteText: {
      fontSize: fontSize.title,
      fontWeight: 600,
      color: colors.monthTextColor,
    },
    editDeleteContainer: {
      flexDirection: 'row',
      gap: spacing.sm,
    },
  });

export default createStyles;
