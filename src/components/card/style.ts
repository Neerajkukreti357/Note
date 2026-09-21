import { StyleSheet } from 'react-native';
import { fontSize, spacing } from '@/theme/typography';
import { ThemeColors } from '@/theme';

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    card: {
      backgroundColor: colors.secondary,
      borderRadius: spacing.md,
      borderColor: colors.lightBorder,
    },

    header: {
      paddingHorizontal: spacing.md,
      paddingTop: spacing.md,
      paddingBottom: spacing.xs,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    body: {
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.xs,
    },

    footer: {
      paddingHorizontal: spacing.md,
      paddingTop: spacing.sm + spacing.xs,
      paddingBottom: spacing.md,
      flexDirection: 'row',
      gap: 8,
      flexWrap: 'wrap',
    },

    // Typography styles
    title: {
      fontSize: fontSize.title,
      fontWeight: '600',
    },

    bodyText: {
      fontSize: fontSize.body,
    },

    caption: {
      fontSize: fontSize.caption,
    },

    heading: {
      fontSize: fontSize.heading,
      fontWeight: '600',
    },
  });

export default createStyles;
