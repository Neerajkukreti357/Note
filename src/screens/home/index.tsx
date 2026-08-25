import React from 'react';
import { View } from 'react-native';
import style from './type';
import { NoteCard } from '@/components';

function Home() {
  return (
    <View style={style.container}>
      <NoteCard />
    </View>
  );
}

export default Home;
