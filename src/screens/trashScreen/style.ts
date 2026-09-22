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
      gap: spacing.md,
      paddingBottom: 50,
      marginTop: spacing.md,
    },
    sideBarContainerStyle: {
      backgroundColor: colors.primary,
      paddingBottom: 20,
    },
  });

export default createStyles;
