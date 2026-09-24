import React, { useCallback, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import {
  AddMoreItem,
  CheckBoxNote,
  NoDataFound,
  NotesWithImages,
  NoteWithAudio,
  SimpleHeader,
  SimpleNoteCard,
} from '@/components';
import { StickyNote } from 'lucide-react-native';
import { useTheme } from '@/context/ThemeContext';
import { Note } from '@/store/type';
import { useFocusEffect } from '@react-navigation/native';
import createStyles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getDraftNotes } from '@/services/notesServices/createNotesServices';

function DraftScreen() {
  const { colors } = useTheme();
  const style = createStyles(colors);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const toggleSheet = (item: Note) => {
    if (isSheetOpen) {
      setIsSheetOpen(false);
      setSelectedNote(null);
      return;
    }
    setSelectedNote(item);
    setIsSheetOpen(true);
  };

  const fetchDeletedNotes = async () => {
    try {
      setLoading(true);

      const deletedNotes = await getDraftNotes();

      setNotes(deletedNotes);
    } catch (error) {
      console.log('Error fetching deleted notes:', error);
    } finally {
      setLoading(false);
    }
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
          refetch={fetchDeletedNotes}
          isPermanantTab={true}
          isDraft={true}
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
          refetch={fetchDeletedNotes}
          isPermanantTab={true}
          isDraft={true}
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
          refetch={fetchDeletedNotes}
          isPermanantTab={true}
          isDraft={true}
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
        refetch={fetchDeletedNotes}
        isDraft={true}
        isPermanantTab={true}
      />
    );
  };

  useFocusEffect(
    useCallback(() => {
      fetchDeletedNotes();

      return () => {
        setIsSheetOpen(false);
        setSelectedNote(null);
      };
    }, []),
  );

  return (
    <SafeAreaView style={style.container}>
      <SimpleHeader
        title="Draft"
        isEditable={false}
        containerStyle={style.sideBarContainerStyle}
      />
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
        <NoDataFound
          Icon={StickyNote}
          title="No notes yet"
          description="Tap the + button to create your first note"
        />
      )}
    </SafeAreaView>
  );
}

export default DraftScreen;
