import React from 'react';
import { ScrollView, View } from 'react-native';
import { CheckBoxNote, NotesWithImages, SimpleNoteCard } from '@/components';
import style from './style';

function Home() {
  return (
    <View style={style.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.contentContainer}
      >
        <SimpleNoteCard />
        <CheckBoxNote />
        <CheckBoxNote />
        <NotesWithImages />
        <SimpleNoteCard />
      </ScrollView>
    </View>
  );
}

export default Home;
