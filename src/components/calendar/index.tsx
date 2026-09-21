import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { Calendar } from 'react-native-calendars';
import { getCalendarTheme } from './theme';
import { useTheme } from '@/context/ThemeContext';
import { useMemo } from 'react';
import CustomDayView from '@/screens/calendar/dayComponent';
import { Note } from '@/store/type';
import dayjs from 'dayjs';

const CalendarComponent = ({
  handleDateChange,
  selectedDate,
  setSelectedDate,
  handleMonthChange,
  originalNotes,
}: {
  handleDateChange: (date: string) => Promise<void>;
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  handleMonthChange: (date: { year: number; month: number }) => Promise<void>;
  originalNotes: Note[];
}) => {
  const { colors, theme } = useTheme();
  const calendarTheme = useMemo(() => getCalendarTheme(colors), [colors]);

  const noteCounts = originalNotes.reduce<Record<string, number>>(
    (acc, note) => {
      const date = dayjs(Number(note.created_at)).format('YYYY-MM-DD');

      acc[date] = (acc[date] ?? 0) + 1;

      return acc;
    },
    {},
  );

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
      onMonthChange={handleMonthChange}
      dayComponent={props => (
        <CustomDayView
          {...props}
          selectedDate={selectedDate}
          noteCount={noteCounts}
          primaryColor={colors.primary}
          textColor={colors.text}
          onPress={dateString => {
            setSelectedDate(dateString);
            handleDateChange(dateString);
          }}
        />
      )}
    />
  );
};

export default CalendarComponent;
