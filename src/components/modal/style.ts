// components/style.ts
import { DarkColors } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modal: {
    width: '85%',
    borderRadius: 16,
  },
  modalContent: {
    backgroundColor: DarkColors.primary,
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderRadius: 16,
  },
  modalHeader: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: DarkColors.lightBorder,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: DarkColors.heading,
  },
  modalBody: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
});
