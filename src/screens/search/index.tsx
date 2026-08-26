import { View } from 'react-native';
import React from 'react';
import style from './style';
import { SearchInput } from '@/components/formComponents';

const Search = () => {
  return (
    <View style={style.container}>
      <SearchInput />
    </View>
  );
};

export default Search;
