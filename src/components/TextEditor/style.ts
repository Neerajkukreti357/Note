import { AppColors, spacing } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  editorContainer: {
    flex: 1,
    marginTop: spacing.lg,
    backgroundColor: AppColors.lightPrimary,
    overflow: 'hidden',
  },
  toolbar: {
    alignSelf: 'flex-start',
    marginTop: spacing.md,

    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: AppColors.primary,

    borderRadius: spacing.sm,

    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,

    gap: spacing.lg,
  },

  separator: {
    width: 1,
    height: 22,
    backgroundColor: AppColors.lightBorder,
  },
  editorLoader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: AppColors.lightPrimary,

    zIndex: 10,
  },
  editorHidden: {
    opacity: 0,
  },

  editorVisible: {
    opacity: 1,
  },
});

export default styles;
