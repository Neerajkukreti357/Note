import { DarkColors } from '@/theme';
import { Calendar } from 'react-native-calendars';

type CalendarTheme = React.ComponentProps<typeof Calendar>['theme'];

export const calendarTheme: CalendarTheme = {
  calendarBackground: DarkColors.primary,

  // Header
  monthTextColor: DarkColors.monthTextColor,
  textMonthFontSize: 18,
  textMonthFontWeight: '600',

  // Days of week
  textSectionTitleColor: DarkColors.monthTextColor,

  // Days
  dayTextColor: DarkColors.monthTextColor,
  todayTextColor: DarkColors.primary,
  todayBackgroundColor: DarkColors.monthTextColor,

  // Selected day
  selectedDayBackgroundColor: DarkColors.selectedMonthColor,
  selectedDayTextColor: DarkColors.monthTextColor,

  // Disabled days
  textDisabledColor: DarkColors.lightBorder,

  // Arrows
  arrowColor: DarkColors.monthTextColor,

  // Optional
  textDayFontSize: 14,
  textDayFontWeight: '500',
};
