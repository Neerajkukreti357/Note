import { StyleSheet } from 'react-native';
import { fontSize, spacing } from '@/theme/typography';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: spacing.md,
    borderWidth: 1,
    borderColor: '#E5E7EB',

    // iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: spacing.xs,
    },
    shadowOpacity: 0.08,
    shadowRadius: spacing.sm,

    // Android
    elevation: 3,

    overflow: 'hidden',
  },

  header: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm + spacing.xs,
  },

  body: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + spacing.xs,
  },

  footer: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.sm + spacing.xs,
    paddingBottom: spacing.md,

    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#E5E7EB',
  },

  // Typography styles
  title: {
    fontSize: fontSize.title,
    fontWeight: '600',
  },

  bodyText: {
    fontSize: fontSize.body,
  },

  caption: {
    fontSize: fontSize.caption,
  },

  heading: {
    fontSize: fontSize.heading,
    fontWeight: '600',
  },
});

export default styles;
