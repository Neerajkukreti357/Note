import { AppColors, fontSize, spacing } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primary,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
    flex: 1,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: fontSize.title,
    fontWeight: 700,
    color: AppColors.heading,
    marginLeft: spacing.md,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    backgroundColor: AppColors.highlightColor,
    padding: spacing.sm,
    borderRadius: 10,
  },
  textStyle: {
    fontWeight: 600,
    color: AppColors.monthTextColor,
  },
});

export default styles;
