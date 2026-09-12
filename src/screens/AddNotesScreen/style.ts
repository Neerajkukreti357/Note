import { DarkColors, fontSize, spacing } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: DarkColors.primary,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
    flex: 1,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: fontSize.title,
    fontWeight: 700,
    color: DarkColors.heading,
    marginLeft: spacing.md,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    backgroundColor: DarkColors.highlightColor,
    padding: spacing.sm,
    borderRadius: 10,
  },
  textStyle: {
    fontWeight: 600,
    color: DarkColors.monthTextColor,
  },
});

export default styles;
