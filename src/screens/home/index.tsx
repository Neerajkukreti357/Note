import React, { useCallback, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { useNotes } from '@/hooks/home';
import {
  AddMoreItem,
  CheckBoxNote,
  NoDataFound,
  NotesWithImages,
  NoteWithAudio,
  SimpleNoteCard,
} from '@/components';
import { StickyNote } from 'lucide-react-native';
import { useTheme } from '@/context/ThemeContext';
import createStyles from './style';
import { Note } from '@/store/type';
import { useFocusEffect } from '@react-navigation/native';

function Home() {
  const { notes, loading, refetch } = useNotes();
  const { colors } = useTheme();
  const style = createStyles(colors);
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

  const renderNote = ({ item }: { item: Note }) => {
    if (item?.noteType === 1) {
      return (
        <SimpleNoteCard
          item={item}
          isSheetOpen={isSheetOpen}
          selectedNote={selectedNote}
          toggleSheet={toggleSheet}
          setIsSheetOpen={setIsSheetOpen}
          refetch={refetch}
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
          refetch={refetch}
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
          refetch={refetch}
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
        refetch={refetch}
      />
    );
  };

  useFocusEffect(
    useCallback(() => {
      return () => {
        setIsSheetOpen(false);
        setSelectedNote(null);
      };
    }, []),
  );

  return (
    <View style={style.container}>
      {loading ? (
        <View style={style.loaderBox}>
          <ActivityIndicator size="large" color={colors.monthTextColor} />
          <Text style={style.loadingText}>Loading ...</Text>
        </View>
      ) : notes?.length > 0 ? (
        <FlatList
          data={notes}
          renderItem={renderNote}
          keyExtractor={item => String(item.id)}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={style.contentContainer}
          ListFooterComponent={notes.length < 3 ? <AddMoreItem /> : undefined}
        />
      ) : (
        !loading && (
          <NoDataFound
            Icon={StickyNote}
            title="No notes yet"
            description="Tap the + button to create your first note"
          />
        )
      )}
    </View>
  );
}

export default Home;
