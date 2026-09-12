import { DarkColors } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
    color: DarkColors.monthTextColor,
  },
});

export default styles;
