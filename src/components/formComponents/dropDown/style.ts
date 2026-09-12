import { DarkColors, spacing } from '@/theme';
import { Platform, StatusBar, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  dropdown: {
    height: 40,
    borderColor: DarkColors.lightBorder,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: spacing.md,
  },
  placeholderStyle: { fontSize: 14, color: DarkColors.monthTextColor },
  selectedTextStyle: { fontSize: 14, color: DarkColors.monthTextColor },
  dropdownList: {
    backgroundColor: DarkColors.secondary, // the whole dropdown popup background
    borderRadius: 10,
    borderWidth: 1,
    borderColor: DarkColors.lightBorder,
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
    color: DarkColors.monthTextColor,
  },
  icon: {
    tintColor: DarkColors.icon,
  },
});
