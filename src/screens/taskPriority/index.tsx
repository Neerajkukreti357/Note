import { ScrollView, View } from 'react-native';
import React from 'react';
import { AddMoreItem } from '@/components';
import style from './style';

const TaskPriority = () => {
  return (
    <View style={style.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.contentContainer}
      >
        <AddMoreItem />
      </ScrollView>
    </View>
  );
};

export default TaskPriority;
