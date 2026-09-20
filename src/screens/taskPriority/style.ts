import { StyleSheet } from 'react-native';
import { fontSize, spacing, ThemeColors } from '@/theme';

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

    loaderBox: {
      height: '80%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    loadingText: {
      fontSize: fontSize.body,
      color: colors.monthTextColor,
      marginTop: spacing.sm,
    },
  });

export default createStyles;
