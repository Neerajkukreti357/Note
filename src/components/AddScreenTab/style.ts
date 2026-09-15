import { DarkColors, fontSize, spacing } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tabMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 20,
    padding: spacing.xs,

    backgroundColor: DarkColors.lightPrimary,
    borderRadius: spacing.sm,

    position: 'relative',
    overflow: 'hidden',
  },

  tabButton: {
    flex: 1,

    paddingVertical: spacing.sm,

    borderRadius: spacing.sm,

    alignItems: 'center',
    justifyContent: 'center',
  },

  activeIndicator: {
    position: 'absolute',

    top: spacing.xs,
    bottom: spacing.xs,
    left: spacing.xs,

    width: '33.33%',

    borderRadius: spacing.sm,

    backgroundColor: DarkColors.primary,
  },

  tabButtonText: {
    fontWeight: '500',
    color: DarkColors.monthTextColor,
    fontSize: fontSize.description,
  },

  activeTabText: {
    color: DarkColors.heading,
  },
});

export default styles;
