import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SearchInput } from '@/components/formComponents';
import {
  CheckBoxNote,
  NoDataFound,
  NotesWithImages,
  NoteWithAudio,
  SimpleNoteCard,
} from '@/components';
import { SearchX } from 'lucide-react-native';
import { useTheme } from '@/context/ThemeContext';
import createStyles from './style';
import { Note } from '@/store/type';
import { getAllNotes } from '@/services/notesServices/createNotesServices';

const Search = () => {
  const { colors } = useTheme();
  const style = createStyles(colors);
  const [search, setSearch] = useState('');
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timer: any;
    if (search) {
      setLoading(true);
      timer = setTimeout(async () => {
        try {
          const result = await getAllNotes(search);
          setNotes(result);
        } catch (error) {
          console.log('Search error:', error);
        } finally {
          setLoading(false);
        }
      }, 500);
    } else {
      setLoading(false);
      setNotes([]);
    }

    return () => {
      clearTimeout(timer);
      setNotes([]);
    };
  }, [search]);

  return (
    <View style={style.container}>
      <SearchInput onSearchChange={setSearch} />
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
        </ScrollView>
      ) : null}
    </View>
  );
};

export default Search;
