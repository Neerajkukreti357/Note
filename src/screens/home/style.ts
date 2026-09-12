import { DarkColors, fontSize, spacing } from '@/theme';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  loaderBox: {
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: fontSize.body,
    color: DarkColors.monthTextColor,
    marginTop: spacing.sm,
  },
  container: {
    flex: 1,
    backgroundColor: DarkColors.primary,
  },
  contentContainer: {
    paddingHorizontal: spacing.sm,
    gap: spacing.sm,
    paddingBottom: 100,
  },
});

export default style;
