import { ThemeColors } from '@/theme';
import { StyleSheet } from 'react-native';

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    wrapper: {
      position: 'relative',
    },

    ellipsis: {
      fontSize: 18,
      fontWeight: '700',
    },

    readMore: {
      fontSize: 14,
      fontWeight: '600',
      marginLeft: 4,
      color: colors.monthTextColor,
    },
  });

export default createStyles;
