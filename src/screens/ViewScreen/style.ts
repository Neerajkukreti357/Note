import { fontSize, spacing, ThemeColors } from '@/theme';
import { StyleSheet } from 'react-native';

const createStyles = (colors: ThemeColors, imageSize: any) =>
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
    image: {
      width: imageSize,
      aspectRatio: 4 / 3,
      borderRadius: 12,
    },
    imageContainer: {
      marginTop: spacing.md,
      gap: spacing.sm,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.highlightColor,
      padding: spacing.sm,
      borderRadius: 10,
      marginVertical: spacing.md,
    },
    textStyle: {
      fontWeight: 600,
      color: colors.btnTextcolor,
    },
  });

export default createStyles;
