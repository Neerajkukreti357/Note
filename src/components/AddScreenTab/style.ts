import { AppColors, fontSize, spacing } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tabMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 20,
    padding: spacing.xs,

    backgroundColor: AppColors.lightPrimary,
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

    backgroundColor: AppColors.primary,
  },

  tabButtonText: {
    fontWeight: '500',
    color: AppColors.monthTextColor,
    fontSize: fontSize.description,
  },

  activeTabText: {
    color: AppColors.heading,
  },
});

export default styles;
