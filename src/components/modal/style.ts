// components/style.ts
import { ThemeColors } from '@/theme';
import { StyleSheet } from 'react-native';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    modal: {
      width: '85%',
      borderRadius: 16,
    },
    modalContent: {
      backgroundColor: colors.primary,
      paddingHorizontal: 0,
      paddingVertical: 0,
      borderRadius: 16,
    },
    modalHeader: {
      paddingVertical: 16,
      paddingHorizontal: 20,
      borderBottomWidth: 1,
      borderBottomColor: colors.lightBorder,
    },
    modalTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.heading,
    },
    modalBody: {
      paddingHorizontal: 20,
      paddingVertical: 16,
    },
  });
