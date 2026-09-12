import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { Calendar } from 'react-native-calendars';
import { calendarTheme } from './theme';
import { DarkColors } from '@/theme';

const CalendarComponent = () => {
  return (
    <Calendar
      theme={calendarTheme}
      renderArrow={direction => {
        if (direction === 'left') {
          return <ChevronLeft size={20} color={DarkColors.monthTextColor} />;
        }
        return <ChevronRight size={20} color={DarkColors.monthTextColor} />;
      }}
    />
  );
};

export default CalendarComponent;
