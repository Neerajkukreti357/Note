// theme/typography.ts
import { moderateScale, verticalScale, scale } from 'react-native-size-matters';

export const fontSize = {
  title: moderateScale(20), // note title
  body: moderateScale(16), // note content text
  caption: moderateScale(12), // timestamp, tags
  heading: moderateScale(24), // screen headers
};

export const spacing = {
  xs: scale(4),
  sm: scale(8),
  md: scale(16),
  lg: scale(24),
  cardGap: verticalScale(12), // gap between note cards in a list
};
