import { DarkColors, fontSize, spacing } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    alignItems: 'center',
    paddingVertical: spacing.md,
    backgroundColor: DarkColors.primary,
  },
  menuBox: {
    flexDirection: 'row',
    gap: spacing.sm,
    alignItems: 'center',
  },
  heading: {
    fontSize: fontSize.title,
    fontWeight: 700,
    color: DarkColors.heading,
  },
});

export default styles;
