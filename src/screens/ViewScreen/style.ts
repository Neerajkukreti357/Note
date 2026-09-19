import { fontSize, spacing, ThemeColors } from '@/theme';
import { StyleSheet } from 'react-native';

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.viewHeaderColor,
    },
    scrollViewContainer: {
      flex: 1,
      paddingHorizontal: spacing.sm,
      marginTop: spacing.md,
      backgroundColor: colors.viewBodyColor,
    },
    innerConatiner: {
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      borderRadius: spacing.sm,
      backgroundColor: colors.lightPrimary,
      marginTop: spacing.md,
    },
    dateContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: spacing.md,
    },
    timerContainer: {
      flexDirection: 'row',
      gap: spacing.sm,
      alignItems: 'center',
    },
    timer: {
      color: colors.monthTextColor,
    },
    Title: {
      fontSize: fontSize.noteTitle,
      color: colors.monthTextColor,
      fontWeight: 800,
    },
  });

export default createStyles;
