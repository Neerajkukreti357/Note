import { ActivityIndicator, FlatList, Text, View } from 'react-native';
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
    if (!search.trim()) {
      setNotes([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    const timer = setTimeout(async () => {
      try {
        const result = await getAllNotes(search.trim());
        setNotes(result);
      } catch (error) {
        console.log('Search error:', error);
        setNotes([]);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const renderNote = ({ item }: { item: Note }) => {
    if (item.noteType === 1) {
      return <SimpleNoteCard item={item} />;
    }

    if (item.noteType === 2) {
      return <CheckBoxNote item={item} />;
    }

    if (item.noteType === 3) {
      return <NoteWithAudio item={item} />;
    }

    return <NotesWithImages item={item} />;
  };

  return (
    <View style={style.container}>
      <SearchInput onSearchChange={setSearch} />

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
        />
      )}
    </View>
  );
};

export default Search;
