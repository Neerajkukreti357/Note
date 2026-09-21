import { fontSize, spacing, ThemeColors } from '@/theme';
import { StyleSheet } from 'react-native';

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primary,
      padding: spacing.xs,
    },
    loaderBox: {
      height: '40%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    loadingText: {
      fontSize: fontSize.body,
      color: colors.monthTextColor,
      marginTop: spacing.sm,
    },
    contentContainer: {
      paddingHorizontal: spacing.sm,
      gap: spacing.sm,
      paddingBottom: 100,
    },
  });

export default createStyles;
