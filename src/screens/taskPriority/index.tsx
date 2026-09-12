import { ScrollView, View } from 'react-native';
import React from 'react';
import { AddMoreItem } from '@/components';
import createStyles from './style';
import { useTheme } from '@/context/ThemeContext';

const TaskPriority = () => {
  const { colors } = useTheme();

  const style = createStyles(colors);

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
