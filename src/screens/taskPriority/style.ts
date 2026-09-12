import { StyleSheet } from 'react-native';
import { spacing, ThemeColors } from '@/theme';

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primary,
    },

    contentContainer: {
      paddingHorizontal: spacing.sm,
      gap: spacing.md,
      paddingBottom: 100,
    },
  });

export default createStyles;
