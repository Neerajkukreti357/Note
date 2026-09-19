import { DarkColors, ThemeColors } from '@/theme';
import { StyleSheet } from 'react-native';

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      gap: 12,
    },

    option: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },

    checkbox: {
      width: 18,
      height: 18,
      borderWidth: 1.5,
      borderColor: colors.monthTextColor,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
    },

    checked: {
      backgroundColor: DarkColors.primary,
      borderColor: DarkColors.primary,
    },

    label: {
      fontSize: 16,
      color: colors.monthTextColor,
    },
  });

export default createStyles;
