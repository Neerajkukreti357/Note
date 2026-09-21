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
    noNotesContainer: {
      marginTop: '10%',
    },
    dayContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      aspectRatio: 1,
      padding: 6,
      borderRadius: 999,
    },

    day: {
      fontSize: 14,
      color: colors.text,
    },

    count: {
      fontSize: 9,
      marginTop: 2,
      fontWeight: '600',
    },
    selectedDay: {
      color: colors.btnTextcolor,
    },

    today: {
      color: colors.selectedMonthColor,
    },

    disabledDay: {
      opacity: 0.5,
    },
  });

export default createStyles;
