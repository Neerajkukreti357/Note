import { AppColors, fontSize, spacing } from '@/theme';
import { fontFamily } from '@/theme/typography';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  headingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  headingText: {
    fontSize: fontSize.title,
    color: AppColors.icon,
    fontWeight: 700,
    fontFamily: fontFamily.montserrat.regular,
  },
  decriptionText: {
    color: AppColors.icon,
    fontSize: fontSize.description,
  },
});

export default style;
