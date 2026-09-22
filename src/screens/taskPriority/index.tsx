import { ActivityIndicator, FlatList, Text, View } from 'react-native';
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
import { useNotes } from '@/hooks/home';

const TaskPriority = () => {
  const { colors } = useTheme();
  const style = createStyles(colors);
  const { refetch } = useNotes();

  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const toggleSheet = (item: Note) => {
    if (isSheetOpen) {
      setIsSheetOpen(false);
      setSelectedNote(null);
      return;
    }

    setSelectedNote(item);
    setIsSheetOpen(true);
  };

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

  useFocusEffect(
    useCallback(() => {
      return () => {
        setIsSheetOpen(false);
        setSelectedNote(null);
      };
    }, []),
  );

  const renderNote = ({ item }: { item: Note }) => {
    if (item?.noteType === 1) {
      return (
        <SimpleNoteCard
          item={item}
          isSheetOpen={isSheetOpen}
          selectedNote={selectedNote}
          toggleSheet={toggleSheet}
          setIsSheetOpen={setIsSheetOpen}
          refetch={() => {
            fetchNotes();
            refetch();
          }}
        />
      );
    }

    if (item?.noteType === 2) {
      return (
        <CheckBoxNote
          item={item}
          isSheetOpen={isSheetOpen}
          selectedNote={selectedNote}
          toggleSheet={toggleSheet}
          setIsSheetOpen={setIsSheetOpen}
          refetch={() => {
            fetchNotes();
            refetch();
          }}
        />
      );
    }

    if (item?.noteType === 3) {
      return (
        <NoteWithAudio
          item={item}
          isSheetOpen={isSheetOpen}
          selectedNote={selectedNote}
          toggleSheet={toggleSheet}
          setIsSheetOpen={setIsSheetOpen}
          refetch={() => {
            fetchNotes();
            refetch();
          }}
        />
      );
    }

    return (
      <NotesWithImages
        item={item}
        isSheetOpen={isSheetOpen}
        selectedNote={selectedNote}
        toggleSheet={toggleSheet}
        setIsSheetOpen={setIsSheetOpen}
        refetch={() => {
          fetchNotes();
          refetch();
        }}
      />
    );
  };

  return (
    <View style={style.container}>
      {loading ? (
        <View style={style.loaderBox}>
          <ActivityIndicator size="large" color={colors.monthTextColor} />
          <Text style={style.loadingText}>Loading ...</Text>
        </View>
      ) : notes.length === 0 ? (
        <NoDataFound
          title="No Notes Found"
          description="Try searching for something else"
          Icon={SearchX}
        />
      ) : (
        <FlatList
          data={notes}
          renderItem={renderNote}
          keyExtractor={item => String(item.id)}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={style.contentContainer}
          ListFooterComponent={notes.length < 5 ? <AddMoreItem /> : undefined}
        />
      )}
    </View>
  );
};

export default TaskPriority;
