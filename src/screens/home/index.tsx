import React from 'react';
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

function Home() {
  const { notes, loading } = useNotes();
  const { colors } = useTheme();
  const style = createStyles(colors);

  const renderNote = ({ item }: { item: Note }) => {
    if (item?.noteType === 1) {
      return <SimpleNoteCard item={item} />;
    }

    if (item?.noteType === 2) {
      return <CheckBoxNote item={item} />;
    }

    if (item?.noteType === 3) {
      return <NoteWithAudio item={item} />;
    }

    return <NotesWithImages item={item} />;
  };

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
        <NoDataFound
          Icon={StickyNote}
          title="No notes yet"
          description="Tap the + button to create your first note"
        />
      )}
    </View>
  );
}

export default Home;
