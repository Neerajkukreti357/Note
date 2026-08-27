import { AppColors } from '@/theme';
import { StyleSheet } from 'react-native';

const TRACK_HEIGHT = 26;
const TRACK_WIDTH = 46;
const THUMB_SIZE = 20;

const styles = StyleSheet.create({
  pressable: {
    width: TRACK_WIDTH,
    height: TRACK_HEIGHT,
    justifyContent: 'center',
  },

  track: {
    width: TRACK_WIDTH,
    height: TRACK_HEIGHT,
    borderRadius: TRACK_HEIGHT / 2,
    justifyContent: 'center',
  },

  thumb: {
    position: 'absolute',

    width: THUMB_SIZE,
    height: THUMB_SIZE,
    borderRadius: THUMB_SIZE / 2,

    backgroundColor: AppColors.monthTextColor,
  },
});

export default styles;
