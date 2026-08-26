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
    fontSize: fontSize.body,
    color: AppColors.icon,
    fontWeight: 800,
    fontFamily: fontFamily.montserrat.regular,
  },
  descriptionText: {
    color: AppColors.icon,
    fontSize: fontSize.description,
  },
  checkBox: {
    flexDirection: 'row',
    gap: spacing.sm,
    alignItems: 'center',
  },
  theDot: {
    width: 4,
    height: 4,
    borderRadius: '50%',
  },
  bodyStyle: {
    gap: spacing.xs,
  },
  image: {
    width: '100%',
    height: 140,
    borderRadius: 12,
    marginTop: spacing.md,
  },
});

export default style;
