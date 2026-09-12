import { DarkColors, fontSize, spacing } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: spacing.md,
    gap: spacing.md,
    padding: spacing.sm,
    marginTop: '40%',
  },
  iconContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    position: 'relative',
    padding: spacing.lg,
    borderRadius: '50%',
    backgroundColor: DarkColors.iconBg,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.sm,
    marginTop: spacing.sm,
  },
  heading: {
    fontSize: fontSize.title,
    fontWeight: 800,
    color: DarkColors.monthTextColor,
  },
  description: {
    fontSize: fontSize.description,
    fontWeight: 500,
    color: DarkColors.icon,
  },
});

export default styles;
