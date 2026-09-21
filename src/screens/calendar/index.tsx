import { ActivityIndicator, Text, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import { CalendarComponent, TimeLineComponent } from '@/components';
import { useTheme } from '@/context/ThemeContext';
import createStyles from './style';
import { getNotesByMonth } from '@/services/notesServices/createNotesServices';
import { Note } from '@/store/type';
import dayjs from 'dayjs';
import { useFocusEffect } from '@react-navigation/native';

const Calendar = () => {
  const { colors } = useTheme();
  const style = createStyles(colors);
  const [loading, setLoading] = useState<boolean>(false);
  const [notes, setNotes] = useState<Note[]>([]);

  const fetchNotes = async (monthYear: string) => {
    setLoading(true);
    try {
      const result = await getNotesByMonth(monthYear);
      setNotes(result);
    } catch (err) {
      console.log('err:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleMonthChange = async (date: { year: number; month: number }) => {
    const month = `${date.year}-${String(date.month).padStart(2, '0')}`;

    fetchNotes(month);
  };

  useFocusEffect(
    useCallback(() => {
      const month = dayjs().format('YYYY-MM');
      fetchNotes(month);
    }, []),
  );

  return (
    <View style={style.container}>
      <CalendarComponent handleMonthChange={handleMonthChange} />
      {loading ? (
        <View style={style.loaderBox}>
          <ActivityIndicator size="large" color={colors.monthTextColor} />
          <Text style={style.loadingText}>Loading ...</Text>
        </View>
      ) : (
        <TimeLineComponent notes={notes} />
      )}
    </View>
  );
};

export default Calendar;
