import { StyleSheet } from 'react-native';
import { DarkColors, fontSize, spacing } from '@/theme';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: DarkColors.lightBorder,
    borderRadius: 18,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: DarkColors.primary,
    marginTop: spacing.sm,
    position: 'relative',
  },

  binContainer: {
    position: 'absolute',
    top: -10,
    right: 0,
    padding: 5,
    borderRadius: '50%',
    backgroundColor: DarkColors.monthTextColor,
  },

  playButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: DarkColors.highlightColor,
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
    color: DarkColors.monthTextColor,
    fontWeight: '500',
  },
});

export default styles;
