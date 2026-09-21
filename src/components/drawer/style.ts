import { fontSize, spacing, ThemeColors } from '@/theme';
import { StyleSheet } from 'react-native';

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.drawerBackgroundColor,
      paddingHorizontal: spacing.md,
      borderRadius: spacing.md,
    },

    heading: {
      fontSize: fontSize.superTitle,
      fontWeight: 800,
      color: colors.monthTextColor,
    },
    subHeading: {
      fontSize: fontSize.description,
      color: colors.text,
    },
    drawerButtonContainer: {
      marginVertical: spacing.md,
      gap: spacing.sm,
    },
    innerContainer: {
      flexDirection: 'row',
      gap: spacing.sm,
    },
    buttonContainer: {
      flexDirection: 'row',
      padding: spacing.sm,
      gap: spacing.md,
      alignItems: 'center',
      backgroundColor: colors.settingButtonBackgroundColor,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: colors.lightBorder,
      justifyContent: 'space-between',
    },
    iconContainer: {
      padding: spacing.sm,
      borderRadius: '100%',
      backgroundColor: colors.iconBg,
    },
    label: {
      fontSize: fontSize.body,
      fontWeight: 700,
      color: colors.monthTextColor,
    },
    description: {
      fontSize: fontSize.badge,
      fontWeight: 700,
      color: colors.text,
    },
    bottomButtonContainer: {
      flexDirection: 'row',
      padding: spacing.sm,
      gap: spacing.sm,
      alignItems: 'center',
      backgroundColor: colors.settingButtonBackgroundColor,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: colors.lightBorder,
    },
    bottomLabel: {
      fontSize: fontSize.body,
      fontWeight: 500,
      color: colors.monthTextColor,
    },
  });

export default createStyles;
