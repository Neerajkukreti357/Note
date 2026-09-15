import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { Calendar } from 'react-native-calendars';
import { getCalendarTheme } from './theme';
import { useTheme } from '@/context/ThemeContext';

const CalendarComponent = () => {
  const { colors } = useTheme();

  if (!colors) return null;

  const calendarTheme = getCalendarTheme(colors);

  return (
    <Calendar
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
