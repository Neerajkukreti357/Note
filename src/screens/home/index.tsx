import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
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

function Home() {
  const { notes, loading } = useNotes();
  const { colors } = useTheme();
  const style = createStyles(colors);

  return (
    <View style={style.container}>
      {loading ? (
        <View style={style.loaderBox}>
          <ActivityIndicator size="large" color={colors.monthTextColor} />
          <Text style={style.loadingText}>Loading ...</Text>
        </View>
      ) : notes?.length > 0 ? (
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
          {notes?.length < 3 && <AddMoreItem />}
        </ScrollView>
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
