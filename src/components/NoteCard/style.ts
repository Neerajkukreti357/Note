import { fontSize, spacing, ThemeColors } from '@/theme';
import { badgeColors } from '@/theme/colors';
import { fontFamily } from '@/theme/typography';
import { StyleSheet } from 'react-native';

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    headingBox: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.md,
    },
    headingText: {
      fontSize: fontSize.body,
      color: colors.icon,
      fontWeight: 800,
      fontFamily: fontFamily.montserrat.regular,
      maxWidth: 100,
    },
    descriptionText: {
      color: colors.icon,
      fontSize: fontSize.description,
    },
    checkBox: {
      flexDirection: 'row',
      gap: spacing.sm,
      alignItems: 'center',
    },
    theDot: {
      width: 4,
      height: 4,
      borderRadius: '50%',
    },
    bodyStyle: {
      gap: spacing.xs,
    },
    image: {
      width: '100%',
      height: 140,
      borderRadius: 12,
      marginTop: spacing.md,
    },
    readMoreText: {
      fontSize: 14,
      fontWeight: '600',
    },
    type: {
      fontSize: fontSize.badge,
      color: colors.highlightColor,
    },
    fileTextBackground: {
      backgroundColor: badgeColors.pending.text,
      padding: 6,
      borderRadius: spacing.sm,
    },
    ImageBackground: {
      backgroundColor: badgeColors['partial complete'].text,
      padding: 6,
      borderRadius: spacing.sm,
    },
    audioBackground: {
      backgroundColor: badgeColors.low.text,
      padding: 6,
      borderRadius: spacing.sm,
    },
    checkBackground: {
      backgroundColor: badgeColors.high.text,
      padding: 4,
      borderRadius: spacing.sm,
    },
    timeDateFormate: {
      color: colors.monthTextColor,
      fontSize: fontSize.badge,
    },
    badgeContainer: {
      flexDirection: 'row',
      gap: spacing.sm,
    },
    headerContainer: {
      paddingBottom: spacing.md,
    },
    forHighPriority: {
      borderLeftWidth: 5,
      borderLeftColor: badgeColors.high.text,
      borderRadius: 5,
    },
    forMediumPriority: {
      borderLeftWidth: 5,
      borderLeftColor: badgeColors.medium.text,
      borderRadius: 5,
    },
    forLowPriority: {
      borderLeftWidth: 5,
      borderLeftColor: badgeColors.low.text,
      borderRadius: 5,
    },
  });

export default createStyles;
