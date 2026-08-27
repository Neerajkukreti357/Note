import { AppColors, fontSize, spacing } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.brawerBackground,
    paddingHorizontal: spacing.md,
    borderRadius: spacing.md,
  },

  heading: {
    fontSize: fontSize.superTitle,
    fontWeight: 800,
    color: AppColors.monthTextColor,
  },
  subHeading: {
    fontSize: fontSize.description,
    color: AppColors.text,
  },
  drawerButtonContainer: {
    marginVertical: spacing.md,
    gap: spacing.sm,
  },
  innerContainer: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: spacing.sm,
    gap: spacing.md,
    alignItems: 'center',
    backgroundColor: AppColors.settingButtonBackgroundColor,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: AppColors.lightBorder,
    justifyContent: 'space-between',
  },
  iconContainer: {
    padding: spacing.sm,
    borderRadius: '100%',
    backgroundColor: AppColors.iconBg,
  },
  label: {
    fontSize: fontSize.body,
    fontWeight: 700,
    color: AppColors.monthTextColor,
  },
  description: {
    fontSize: fontSize.badge,
    fontWeight: 700,
    color: AppColors.text,
  },
  bottomButtonContainer: {
    flexDirection: 'row',
    padding: spacing.sm,
    gap: spacing.sm,
    alignItems: 'center',
    backgroundColor: AppColors.settingButtonBackgroundColor,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: AppColors.lightBorder,
  },
  bottomLabel: {
    fontSize: fontSize.body,
    fontWeight: 500,
    color: AppColors.monthTextColor,
  },
});

export default styles;
