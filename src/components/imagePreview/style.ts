import { StyleSheet } from 'react-native';
import { ThemeColors } from '@/theme';
import { fontFamily, fontSize, spacing } from '@/theme/typography';
import { responsive } from '@/theme/responsive';

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
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
      color: colors.monthTextColor,
    },

    count: {
      fontFamily: fontFamily.inter.regular,
      fontSize: fontSize.caption,
      color: colors.text,
    },

    // -------------------------
    // Empty state
    // -------------------------

    emptyContainer: {
      minHeight: responsive.height(170),
      borderWidth: 1,
      borderStyle: 'dashed',
      borderColor: colors.lightBorder,
      borderRadius: responsive.radius(14),
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: spacing.lg,
      paddingHorizontal: spacing.md,
      backgroundColor: colors.primary,
    },

    emptyIcon: {
      width: responsive.width(52),
      height: responsive.height(52),
      borderRadius: responsive.radius(14),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.iconBg,
      marginBottom: spacing.sm,
    },

    emptyTitle: {
      fontFamily: fontFamily.inter.semiBold,
      fontSize: fontSize.body,
      color: colors.monthTextColor,
      marginBottom: spacing.xs,
    },

    emptyText: {
      fontFamily: fontFamily.inter.regular,
      fontSize: fontSize.description,
      color: colors.text,
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
      backgroundColor: colors.highlightColor,
    },

    addButtonText: {
      fontFamily: fontFamily.inter.semiBold,
      fontSize: fontSize.description,
      color: colors.monthTextColor,
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
    },

    image: {
      width: '100%',
      height: '100%',
      borderRadius: responsive.radius(12),
      backgroundColor: colors.iconBg,
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
      backgroundColor: colors.highlightColor,
      borderWidth: 2,
      borderColor: colors.secondary,
    },
  });

export default createStyles;
