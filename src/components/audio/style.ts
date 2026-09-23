import { StyleSheet } from 'react-native';
import { fontSize, spacing, ThemeColors } from '@/theme';

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: colors.lightBorder,
      borderRadius: 18,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.primary,
      marginTop: spacing.sm,
      position: 'relative',
    },

    binContainer: {
      position: 'absolute',
      top: -10,
      right: 0,
      padding: 5,
      borderRadius: '50%',
      backgroundColor: colors.settingButtonBackgroundColor,
    },

    playButton: {
      width: 40,
      height: 40,
      borderRadius: 50,
      backgroundColor: colors.highlightColor,
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
      color: colors.monthTextColor,
      fontWeight: '500',
    },
  });

export default createStyles;
