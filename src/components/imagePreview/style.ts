import { StyleSheet } from 'react-native';
import { AppColors } from '@/theme';
import { fontFamily, fontSize, spacing } from '@/theme/typography';
import { responsive } from '@/theme/responsive';

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.md,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },

  title: {
    fontFamily: fontFamily.inter.semiBold,
    fontSize: fontSize.title,
    color: AppColors.monthTextColor,
  },

  count: {
    fontFamily: fontFamily.inter.regular,
    fontSize: fontSize.caption,
    color: AppColors.text,
  },

  // -------------------------
  // Empty state
  // -------------------------

  emptyContainer: {
    minHeight: responsive.height(170),
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: AppColors.lightBorder,
    borderRadius: responsive.radius(14),

    alignItems: 'center',
    justifyContent: 'center',

    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md,

    backgroundColor: AppColors.primary,
  },

  emptyIcon: {
    width: responsive.width(52),
    height: responsive.height(52),
    borderRadius: responsive.radius(14),

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: AppColors.iconBg,

    marginBottom: spacing.sm,
  },

  emptyTitle: {
    fontFamily: fontFamily.inter.semiBold,
    fontSize: fontSize.body,
    color: AppColors.monthTextColor,
    marginBottom: spacing.xs,
  },

  emptyText: {
    fontFamily: fontFamily.inter.regular,
    fontSize: fontSize.description,
    color: AppColors.text,
    textAlign: 'center',
    marginBottom: spacing.md,
  },

  // -------------------------
  // Add button
  // -------------------------

  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    gap: spacing.xs,

    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,

    borderRadius: responsive.radius(10),

    backgroundColor: AppColors.highlightColor,
  },

  addButtonText: {
    fontFamily: fontFamily.inter.semiBold,
    fontSize: fontSize.description,
    color: AppColors.monthTextColor,
  },

  // -------------------------
  // Image list
  // -------------------------

  imageList: {
    gap: spacing.sm,
    paddingBottom: spacing.xs,
  },

  imageWrapper: {
    width: responsive.width(105),
    height: responsive.height(105),
    borderRadius: responsive.radius(12),

    position: 'relative',
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: responsive.radius(12),

    backgroundColor: AppColors.iconBg,
  },

  // -------------------------
  // Remove button
  // -------------------------

  removeButton: {
    position: 'absolute',

    top: -responsive.height(1),
    right: responsive.width(0),

    padding: responsive.width(2),

    borderRadius: responsive.radius(50),

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: AppColors.highlightColor,

    borderWidth: 2,
    borderColor: AppColors.secondary,
  },

  // -------------------------
  // Add image box
  // -------------------------

  addImageBox: {
    width: responsive.width(105),
    height: responsive.height(105),

    borderRadius: responsive.radius(12),

    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: AppColors.lightBorder,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: AppColors.primary,
  },

  addImageText: {
    marginTop: spacing.xs,

    fontFamily: fontFamily.inter.medium,
    fontSize: fontSize.caption,

    color: AppColors.text,
  },
});

export default styles;
