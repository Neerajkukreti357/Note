import { AppColors, spacing } from '@/theme';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primary,
  },
  contentContainer: {
    paddingHorizontal: spacing.sm,
    gap: spacing.md,
    paddingBottom: 100,
  },
});

export default style;
