import { StyleSheet } from 'react-native';
import { AppColors, fontSize, spacing } from '@/theme';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: AppColors.lightBorder,
    borderRadius: 18,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppColors.primary,
    marginTop: spacing.sm,
  },

  playButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: AppColors.highlightColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 26,
  },

  waveformSection: {
    flex: 1,
    justifyContent: 'center',
  },

  waveform: {
    width: '100%',
    height: 30,
  },

  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },

  timeText: {
    fontSize: fontSize.caption,
    color: AppColors.monthTextColor,
    fontWeight: '500',
  },
});

export default styles;
