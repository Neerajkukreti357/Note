import { AppColors, fontSize, spacing } from '@/theme';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  loaderBox: {
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: fontSize.body,
    color: AppColors.monthTextColor,
    marginTop: spacing.sm,
  },
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
