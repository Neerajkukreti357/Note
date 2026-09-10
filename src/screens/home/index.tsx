import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import style from './style';
import { useNotes } from '@/hooks/home';
import { AppColors } from '@/theme';
import {
  AddMoreItem,
  CheckBoxNote,
  GlowView,
  NoDataFound,
  NoteWithAudio,
  SimpleNoteCard,
} from '@/components';
import { Plus, StickyNote } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@/components/header/type';

function Home() {
  const { notes, loading } = useNotes();
  const navigation = useNavigation<NavigationProp>();

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
            ) : item?.noteType === 3 ? (
              <NoteWithAudio item={item} key={item?.id} />
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

      <Pressable
        style={style.plusButton}
        onPress={() => {
          navigation.navigate('AddNote');
        }}
      >
        <GlowView size={70} color={AppColors.highlightColor} />
        <Plus size={35} color={AppColors.heading} />
      </Pressable>
    </View>
  );
}

export default Home;
