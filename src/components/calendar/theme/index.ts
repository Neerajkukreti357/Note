import { ThemeColors } from '@/theme';
import { Calendar } from 'react-native-calendars';

type CalendarTheme = React.ComponentProps<typeof Calendar>['theme'];

export const getCalendarTheme = (colors: ThemeColors): CalendarTheme => ({
  calendarBackground: colors.primary,

  // Header
  monthTextColor: colors.monthTextColor,
  textMonthFontSize: 18,
  textMonthFontWeight: '600',

  // Days of week
  textSectionTitleColor: colors.monthTextColor,

  // Days
  dayTextColor: colors.monthTextColor,
  todayTextColor: colors.primary,
  todayBackgroundColor: colors.monthTextColor,

  // Selected day
  selectedDayBackgroundColor: colors.selectedMonthColor,
  selectedDayTextColor: colors.monthTextColor,

  // Disabled days
  textDisabledColor: colors.lightBorder,

  // Arrows
  arrowColor: colors.monthTextColor,

  // Optional
  textDayFontSize: 14,
  textDayFontWeight: '500',
});
