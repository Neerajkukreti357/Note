import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { Calendar } from 'react-native-calendars';
import { calendarTheme } from './theme';
import { AppColors } from '@/theme';

const CalendarComponent = () => {
  return (
    <Calendar
      theme={calendarTheme}
      renderArrow={direction => {
        if (direction === 'left') {
          return <ChevronLeft size={20} color={AppColors.monthTextColor} />;
        }
        return <ChevronRight size={20} color={AppColors.monthTextColor} />;
      }}
    />
  );
};

export default CalendarComponent;
