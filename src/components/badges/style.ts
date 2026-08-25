import { AppColors, spacing } from '@/theme';
import { fontFamily, fontSize } from '@/theme/typography';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  badgeContainer: {
    paddingVertical: 5,
    paddingHorizontal: spacing.sm,
    borderWidth: 1,
    borderColor: AppColors.lightBorder,
    borderRadius: 8,
  },
  badgeContent: {
    fontFamily: fontFamily.inter.regular,
    fontSize: fontSize.badge,
    fontWeight: 500,
  },
  high: {
    backgroundColor: '#FEE2E2',
    color: '#DC2626',
  },

  medium: {
    backgroundColor: '#FEF3C7',
    color: '#D97706',
  },

  low: {
    backgroundColor: '#E0F2FE',
    color: '#0284C7',
  },

  complete: {
    backgroundColor: '#DCFCE7',
    color: '#16A34A',
  },

  pending: {
    backgroundColor: '#EDE9FE',
    color: '#7C3AED',
  },

  'partial complete': {
    backgroundColor: '#CFFAFE',
    color: '#0891B2',
  },
});

export default style;
