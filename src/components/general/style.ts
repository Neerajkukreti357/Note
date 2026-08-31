import { AppColors, spacing } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: AppColors.lightPrimary,
    height: '80%',
    borderRadius: spacing.sm,
    marginTop: spacing.md,
    padding: spacing.md,
  },
  title: {
    fontSize: 38,
    fontWeight: '700',
    color: AppColors.monthTextColor,
    marginTop: spacing.md,

    padding: 0,
    margin: 0,

    // Prevent Android from adding extra font space
    includeFontPadding: false,
  },
});

export default styles;
