import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { Calendar } from 'react-native-calendars';
import { getCalendarTheme } from './theme';
import { useTheme } from '@/context/ThemeContext';
import { useMemo } from 'react';

const CalendarComponent = ({
  handleDateChange,
  selectedDate,
  setSelectedDate,
  handleMonthChange,
}: {
  handleDateChange: (date: string) => Promise<void>;
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  handleMonthChange: (date: { year: number; month: number }) => Promise<void>;
}) => {
  const { colors, theme } = useTheme();
  const calendarTheme = useMemo(() => getCalendarTheme(colors), [colors]);

  return (
    <Calendar
      key={theme}
      theme={{
        ...calendarTheme,
      }}
      markedDates={{
        [selectedDate]: {
          selected: true,
        },
      }}
      onDayPress={day => {
        setSelectedDate(day.dateString);
        handleDateChange(day.dateString);
      }}
      renderArrow={direction => {
        if (direction === 'left') {
          return <ChevronLeft size={20} color={colors.monthTextColor} />;
        }

        return <ChevronRight size={20} color={colors.monthTextColor} />;
      }}
      onMonthChange={handleMonthChange}
    />
  );
};

export default CalendarComponent;
