import { AppColors } from '@/theme';
import { Calendar } from 'react-native-calendars';

type CalendarTheme = React.ComponentProps<typeof Calendar>['theme'];

export const calendarTheme: CalendarTheme = {
  calendarBackground: AppColors.primary,

  // Header
  monthTextColor: AppColors.monthTextColor,
  textMonthFontSize: 18,
  textMonthFontWeight: '600',

  // Days of week
  textSectionTitleColor: AppColors.monthTextColor,

  // Days
  dayTextColor: AppColors.monthTextColor,
  todayTextColor: AppColors.primary,
  todayBackgroundColor: AppColors.monthTextColor,

  // Selected day
  selectedDayBackgroundColor: AppColors.selectedMonthColor,
  selectedDayTextColor: AppColors.monthTextColor,

  // Disabled days
  textDisabledColor: AppColors.lightBorder,

  // Arrows
  arrowColor: AppColors.monthTextColor,

  // Optional
  textDayFontSize: 14,
  textDayFontWeight: '500',
};
