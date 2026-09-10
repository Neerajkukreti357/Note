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
  plusButton: {
    position: 'absolute',
    zIndex: 10,
    bottom: 100,
    right: 20,
    borderRadius: '50%',
    padding: spacing.sm,
    backgroundColor: AppColors.highlightColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default style;
