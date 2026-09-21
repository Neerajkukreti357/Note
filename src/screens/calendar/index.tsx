import { ActivityIndicator, Text, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import {
  CalendarComponent,
  NoDataFound,
  TimeLineComponent,
} from '@/components';
import { useTheme } from '@/context/ThemeContext';
import createStyles from './style';
import { getNotesByDate } from '@/services/notesServices/createNotesServices';
import { Note } from '@/store/type';
import dayjs from 'dayjs';
import { useFocusEffect } from '@react-navigation/native';
import { StickyNote } from 'lucide-react-native';
import { useCalendarStore } from '@/store/calanderStore';
import { useNotes } from '@/hooks/home';

const Calendar = () => {
  const { colors } = useTheme();
  const style = createStyles(colors);
  const [loading, setLoading] = useState<boolean>(false);
  const [notes, setNotes] = useState<Note[]>([]);
  const { selectedDate, setSelectedDate } = useCalendarStore();
  const { notes: originalNotes } = useNotes();

  const fetchNotes = async (monthYear: string) => {
    setLoading(true);
    try {
      const result = await getNotesByDate(monthYear);
      setNotes(result);
    } catch (err) {
      console.log('err:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDateChange = async (date: string) => {
    await fetchNotes(date);
  };

  const handleMonthChange = async (date: { year: number; month: number }) => {
    const selectedDay = dayjs(selectedDate).date();

    const daysInMonth = dayjs(
      `${date.year}-${String(date.month).padStart(2, '0')}-01`,
    ).daysInMonth();

    const day = Math.min(selectedDay, daysInMonth);

    const newSelectedDate = dayjs(
      `${date.year}-${String(date.month).padStart(2, '0')}-${String(
        day,
      ).padStart(2, '0')}`,
    ).format('YYYY-MM-DD');

    setSelectedDate(newSelectedDate);
    await fetchNotes(newSelectedDate);
  };

  useFocusEffect(
    useCallback(() => {
      fetchNotes(selectedDate);
    }, [selectedDate]),
  );

  return (
    <View style={style.container}>
      <CalendarComponent
        handleDateChange={handleDateChange}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        handleMonthChange={handleMonthChange}
        originalNotes={originalNotes ?? []}
      />
      {loading ? (
        <View style={style.loaderBox}>
          <ActivityIndicator size="large" color={colors.monthTextColor} />
          <Text style={style.loadingText}>Loading ...</Text>
        </View>
      ) : notes?.length > 0 ? (
        <TimeLineComponent notes={notes} />
      ) : (
        <NoDataFound
          Icon={StickyNote}
          title="No Notes Found"
          description="No Notes Found For The Selected Day."
          containerStyle={style.noNotesContainer}
        />
      )}
    </View>
  );
};

export default Calendar;
