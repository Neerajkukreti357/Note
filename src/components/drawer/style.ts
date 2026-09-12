import { DarkColors, fontSize, spacing } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DarkColors.drawerBackgroundColor,
    paddingHorizontal: spacing.md,
    borderRadius: spacing.md,
  },

  heading: {
    fontSize: fontSize.superTitle,
    fontWeight: 800,
    color: DarkColors.monthTextColor,
  },
  subHeading: {
    fontSize: fontSize.description,
    color: DarkColors.text,
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
    backgroundColor: DarkColors.settingButtonBackgroundColor,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: DarkColors.lightBorder,
    justifyContent: 'space-between',
  },
  iconContainer: {
    padding: spacing.sm,
    borderRadius: '100%',
    backgroundColor: DarkColors.iconBg,
  },
  label: {
    fontSize: fontSize.body,
    fontWeight: 700,
    color: DarkColors.monthTextColor,
  },
  description: {
    fontSize: fontSize.badge,
    fontWeight: 700,
    color: DarkColors.text,
  },
  bottomButtonContainer: {
    flexDirection: 'row',
    padding: spacing.sm,
    gap: spacing.sm,
    alignItems: 'center',
    backgroundColor: DarkColors.settingButtonBackgroundColor,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: DarkColors.lightBorder,
  },
  bottomLabel: {
    fontSize: fontSize.body,
    fontWeight: 500,
    color: DarkColors.monthTextColor,
  },
});

export default styles;
