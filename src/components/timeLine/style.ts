import { ThemeColors } from '@/theme';
import { StyleSheet } from 'react-native';

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    row: {
      flexDirection: 'row',
      minHeight: 130,
      paddingHorizontal: 20,
    },

    dateContainer: {
      width: 70,
      alignItems: 'center',
      paddingTop: 20,
    },

    day: {
      fontSize: 32,
      fontWeight: '300',
      color: colors.monthTextColor,
    },

    weekday: {
      fontSize: 14,
      color: colors.monthTextColor,
      marginTop: 2,
    },

    taskContainer: {
      flex: 1,
      marginLeft: 15,
      marginVertical: 10,
      padding: 18,
      borderRadius: 12,
      backgroundColor: colors.secondary,
      flexDirection: 'row',
    },

    priority: {
      width: 4,
      borderRadius: 4,
      marginRight: 12,
    },

    taskContent: {
      flex: 1,
    },

    title: {
      color: colors.monthTextColor,
      fontSize: 17,
      fontWeight: '600',
    },

    description: {
      color: colors.text,
      fontSize: 14,
      marginTop: 8,
      lineHeight: 20,
    },

    flatListContainer: {
      paddingBottom: 100,
    },
  });

export default createStyles;
