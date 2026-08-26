import { ScrollView, View } from 'react-native';
import React from 'react';
import { CheckBoxNote, NotesWithImages, SimpleNoteCard } from '@/components';
import style from './style';

const TaskPriority = () => {
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
};

export default TaskPriority;
