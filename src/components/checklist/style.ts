import { AppColors, spacing } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  notePanel: {
    minHeight: 510,
    backgroundColor: AppColors.lightPrimary,
    borderRadius: spacing.sm,
    borderWidth: 1,
    padding: spacing.md,
    marginTop: spacing.md,
  },
  title: {
    fontSize: 38,
    fontWeight: '700',
    color: AppColors.monthTextColor,
    marginVertical: spacing.md,

    padding: 0,
    margin: 0,

    // Prevent Android from adding extra font space
    includeFontPadding: false,
  },
  panelHeading: {
    color: '#CFCCEF',
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 15,
  },

  checkRow: {
    backgroundColor: '#141D31',
    borderRadius: 12,
    padding: 13,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  emptyCheck: {
    width: 21,
    height: 21,
    borderRadius: 7,
    borderWidth: 1.5,
    borderColor: '#69758B',
  },
  checkInput: {
    flex: 1,
    color: '#D8DBE6',
    fontSize: 13,
    marginHorizontal: 11,
    padding: 0,
  },
  addItem: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    padding: 8,
  },
  addItemText: { color: '#B7B4FF', fontSize: 12, fontWeight: '800' },
});

export default styles;
