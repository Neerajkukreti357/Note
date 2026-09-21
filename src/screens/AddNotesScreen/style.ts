import { fontSize, spacing, ThemeColors } from '@/theme';
import { StyleSheet } from 'react-native';

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.primary,
      paddingHorizontal: spacing.sm,
      paddingVertical: spacing.sm,
      flex: 1,
    },
    headingContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: fontSize.title,
      fontWeight: 700,
      color: colors.heading,
      marginLeft: spacing.md,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 'auto',
      backgroundColor: colors.highlightColor,
      padding: spacing.sm,
      borderRadius: 10,
    },
    textStyle: {
      fontWeight: 600,
      color: colors.btnTextcolor,
    },
  });

export default createStyles;
