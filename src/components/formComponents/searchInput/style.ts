import { AppColors, fontSize, spacing } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 67,
    borderWidth: 1,
    borderColor: '#202A42',
    backgroundColor: '#11192D',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    gap: spacing.sm,
  },

  input: {
    flex: 1,
    fontSize: fontSize.description,
    fontWeight: '400',
    color: AppColors.monthTextColor,
    paddingVertical: spacing.md,
  },

  clearButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
