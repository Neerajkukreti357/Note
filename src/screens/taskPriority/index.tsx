import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import {
  AddMoreItem,
  CheckBoxNote,
  NoDataFound,
  NotesWithImages,
  NoteWithAudio,
  SimpleNoteCard,
} from '@/components';
import createStyles from './style';
import { useTheme } from '@/context/ThemeContext';
import { Note } from '@/store/type';
import { getNotesByPriority } from '@/services/notesServices/createNotesServices';
import { SearchX } from 'lucide-react-native';
import { useFocusEffect } from '@react-navigation/native';

const TaskPriority = () => {
  const { colors } = useTheme();
  const style = createStyles(colors);
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchNotes = async () => {
    setLoading(true);
    try {
      const result = await getNotesByPriority();
      setNotes(result);
    } catch (error) {
      console.log('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchNotes();
    }, []),
  );

  return (
    <View style={style.container}>
      {loading && (
        <View style={style.loaderBox}>
          <ActivityIndicator size="large" color={colors.monthTextColor} />
          <Text style={style.loadingText}>Loading ...</Text>
        </View>
      )}

      {notes?.length === 0 && !loading ? (
        <NoDataFound
          title="No Notes Found"
          description="Try searching for something else"
          Icon={SearchX}
        />
      ) : !loading ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={style.contentContainer}
        >
          {notes?.map(item =>
            item?.noteType === 1 ? (
              <SimpleNoteCard item={item} key={item?.id} />
            ) : item?.noteType === 2 ? (
              <CheckBoxNote item={item} key={item?.id} />
            ) : item?.noteType === 3 ? (
              <NoteWithAudio item={item} key={item?.id} />
            ) : (
              <NotesWithImages item={item} key={item?.id} />
            ),
          )}
          {notes?.length < 5 && <AddMoreItem />}
        </ScrollView>
      ) : null}
    </View>
  );
};

export default TaskPriority;
