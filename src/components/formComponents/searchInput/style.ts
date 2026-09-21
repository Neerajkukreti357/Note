import { fontSize, spacing, ThemeColors } from '@/theme';
import { StyleSheet } from 'react-native';

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      borderRadius: 67,
      backgroundColor: colors?.secondary,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: spacing.md,
      gap: spacing.sm,
    },

    input: {
      flex: 1,
      fontSize: fontSize.description,
      fontWeight: '400',
      color: colors.monthTextColor,
      paddingVertical: spacing.md,
    },

    clearButton: {
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default createStyles;
