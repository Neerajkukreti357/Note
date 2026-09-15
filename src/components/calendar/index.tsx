import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { Calendar } from 'react-native-calendars';
import { getCalendarTheme } from './theme';
import { useTheme } from '@/context/ThemeContext';
import { useMemo } from 'react';

const CalendarComponent = () => {
  const { colors, theme } = useTheme();
  const calendarTheme = useMemo(() => getCalendarTheme(colors), [colors]);

  return (
    <Calendar
      key={theme}
      theme={calendarTheme}
      renderArrow={direction => {
        if (direction === 'left') {
          return <ChevronLeft size={20} color={colors.monthTextColor} />;
        }
        return <ChevronRight size={20} color={colors.monthTextColor} />;
      }}
    />
  );
};

export default CalendarComponent;
