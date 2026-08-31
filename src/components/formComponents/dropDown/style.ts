import { AppColors, spacing } from '@/theme';
import { Platform, StatusBar, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  dropdown: {
    height: 40,
    borderColor: AppColors.lightBorder,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: spacing.md,
  },
  placeholderStyle: { fontSize: 14, color: AppColors.monthTextColor },
  selectedTextStyle: { fontSize: 14, color: AppColors.monthTextColor },
  dropdownList: {
    backgroundColor: AppColors.secondary, // the whole dropdown popup background
    borderRadius: 10,
    borderWidth: 1,
    borderColor: AppColors.lightBorder,
    paddingVertical: 4,
    marginTop: Platform.select({
      ios: 0,
      android: -(StatusBar.currentHeight ?? 0),
      // pulls the list up by exactly the status bar height
    }),
  },
  itemContainer: {
    paddingVertical: Platform.select({
      ios: 0,
      android: 0, // Android was adding its own default vertical spacing on top of this
    }),
    paddingHorizontal: spacing.sm,
    borderRadius: spacing.sm,
  },
  itemText: {
    fontSize: 14,
    color: AppColors.monthTextColor,
  },
  icon: {
    tintColor: AppColors.icon,
  },
});
