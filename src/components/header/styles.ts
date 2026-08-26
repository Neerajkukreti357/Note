import { AppColors, fontSize, spacing } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    alignItems: 'center',
    paddingVertical: spacing.sm,
    backgroundColor: AppColors.primary,
  },
  menuBox: {
    flexDirection: 'row',
    gap: spacing.sm,
    alignItems: 'center',
  },
  heading: {
    fontSize: fontSize.title,
    fontWeight: 700,
    color: AppColors.heading,
  },
  plusButton: {
    borderRadius: '50%',
    padding: spacing.sm,
    backgroundColor: AppColors.highlightColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
