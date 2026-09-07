import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import style from './style';
import { useNotes } from '@/hooks/home';
import { AppColors } from '@/theme';
import {
  AddMoreItem,
  CheckBoxNote,
  NoDataFound,
  SimpleNoteCard,
} from '@/components';
import { StickyNote } from 'lucide-react-native';

function Home() {
  const { notes, loading } = useNotes();

  return (
    <View style={style.container}>
      {loading ? (
        <View style={style.loaderBox}>
          <ActivityIndicator size="large" color={AppColors.monthTextColor} />
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
            ) : null,
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
