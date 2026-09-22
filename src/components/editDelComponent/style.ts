import { StyleSheet } from 'react-native';
import { ThemeColors } from '@/theme/colors';
import { spacing } from '@/theme';

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    popup: {
      position: 'absolute',
      top: spacing.md,
      right: spacing.xl,

      width: 185,

      backgroundColor: colors.primary,
      borderRadius: 14,

      padding: 6,

      zIndex: 9999,
      elevation: 12,

      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.18,
      shadowRadius: 10,
    },

    actionButton: {
      flexDirection: 'row',
      alignItems: 'center',

      paddingVertical: 9,
      paddingHorizontal: 8,

      borderRadius: 10,
    },

    editIconContainer: {
      width: 30,
      height: 30,

      alignItems: 'center',
      justifyContent: 'center',

      borderRadius: 8,

      backgroundColor: colors.iconBg,

      marginRight: 10,
    },

    deleteIconContainer: {
      width: 30,
      height: 30,

      alignItems: 'center',
      justifyContent: 'center',

      borderRadius: 8,

      backgroundColor: colors.iconBg,

      marginRight: 10,
    },

    actionText: {
      fontSize: 14,
      fontWeight: '500',
      color: colors.text,
    },

    deleteText: {
      fontSize: 14,
      fontWeight: '500',
      color: colors.closeButtonColor,
    },
    completeIconContainer: {
      width: 30,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      backgroundColor: colors.iconBg,
      marginRight: 10,
    },
  });

export default createStyles;
