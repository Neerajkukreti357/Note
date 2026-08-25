import React from 'react';
import { ScrollView, View } from 'react-native';
import style from './type';
import { CheckBoxNote, SimpleNoteCard } from '@/components';

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
        <SimpleNoteCard />
      </ScrollView>
    </View>
  );
}

export default Home;
