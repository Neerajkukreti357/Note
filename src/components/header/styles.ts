import { fontSize, spacing, ThemeColors } from '@/theme';
import { StyleSheet } from 'react-native';

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    mainContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: spacing.md,
      alignItems: 'center',
      paddingVertical: spacing.md,
      backgroundColor: colors.primary,
    },
    menuBox: {
      flexDirection: 'row',
      gap: spacing.sm,
      alignItems: 'center',
    },
    heading: {
      fontSize: fontSize.title,
      fontWeight: 700,
      color: colors.heading,
    },
  });

export default createStyles;
