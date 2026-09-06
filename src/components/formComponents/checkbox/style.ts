import { AppColors } from '@/theme';
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
    borderColor: AppColors.monthTextColor,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checked: {
    backgroundColor: AppColors.primary,
    borderColor: AppColors.primary,
  },

  label: {
    fontSize: 16,
    color: AppColors.monthTextColor,
  },
});

export default styles;
