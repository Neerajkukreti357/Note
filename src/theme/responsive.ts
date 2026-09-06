import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const responsive = {
  width: (size: number) => scale(size),

  height: (size: number) => verticalScale(size),

  fontSize: (size: number) => moderateScale(size),

  radius: (size: number) => moderateScale(size),

  margin: (size: number) => moderateScale(size),

  padding: (size: number) => moderateScale(size),

  horizontal: (size: number) => scale(size),

  vertical: (size: number) => verticalScale(size),
};
