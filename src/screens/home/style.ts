import { fontSize, spacing, ThemeColors } from '@/theme';
import { StyleSheet } from 'react-native';

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
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
    container: {
      flex: 1,
      backgroundColor: colors.primary,
    },
    contentContainer: {
      paddingHorizontal: spacing.sm,
      gap: spacing.sm,
      paddingBottom: 100,
    },
  });

export default createStyles;
