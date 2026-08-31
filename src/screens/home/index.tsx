import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import style from './style';
import { useNotes } from '@/hooks/home';
import { AppColors } from '@/theme';
import { SimpleNoteCard } from '@/components';

function Home() {
  const { notes, loading } = useNotes();

  return (
    <View style={style.container}>
      {loading ? (
        <View style={style.loaderBox}>
          <ActivityIndicator size="large" color={AppColors.monthTextColor} />
          <Text style={style.loadingText}>Loading ...</Text>
        </View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={style.contentContainer}
        >
          {notes?.map(item =>
            item?.noteType === 1 ? <SimpleNoteCard item={item} /> : null,
          )}
        </ScrollView>
      )}
    </View>
  );
}

export default Home;
