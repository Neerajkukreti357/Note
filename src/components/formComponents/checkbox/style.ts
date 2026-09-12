import { DarkColors } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
    width: 22,
    height: 22,
    borderWidth: 1.5,
    borderColor: DarkColors.monthTextColor,
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
    color: DarkColors.monthTextColor,
  },
});

export default styles;
