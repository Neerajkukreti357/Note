import { ScrollView, View } from 'react-native';
import React from 'react';
import { AddMoreItem, NoteWithAudio } from '@/components';
import style from './style';

const TaskPriority = () => {
  return (
    <View style={style.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.contentContainer}
      >
        <NoteWithAudio />
        <AddMoreItem />
      </ScrollView>
    </View>
  );
};

export default TaskPriority;
