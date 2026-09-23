import { fontSize, spacing, ThemeColors } from '@/theme';
import { StyleSheet } from 'react-native';

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    tabMainContainer: {
      flexDirection: 'row',
      alignItems: 'center',

      marginTop: 20,
      padding: spacing.xs,

      backgroundColor: colors.lightPrimary,
      borderRadius: spacing.sm,

      position: 'relative',
      overflow: 'hidden',
    },

    tabButton: {
      flex: 1,

      paddingVertical: spacing.sm,

      borderRadius: spacing.sm,

      alignItems: 'center',
      justifyContent: 'center',
    },

    activeIndicator: {
      position: 'absolute',

      top: spacing.xs,
      bottom: spacing.xs,
      left: spacing.xs,

      width: '33.33%',

      borderRadius: spacing.sm,

      backgroundColor: colors.activeTab,
    },

    tabButtonText: {
      fontWeight: '500',
      color: colors.monthTextColor,
      fontSize: fontSize.description,
    },

    activeTabText: {
      color: colors.heading,
    },
    disabled: { opacity: 0.6 },
  });

export default createStyles;
