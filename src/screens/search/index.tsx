import { View } from 'react-native';
import React from 'react';
import style from './style';
import { SearchInput } from '@/components/formComponents';
import { NoDataFound } from '@/components';
import { SearchX } from 'lucide-react-native';

const Search = () => {
  return (
    <View style={style.container}>
      <SearchInput />
      <NoDataFound
        title="No Notes Found"
        description="Try searching for something else"
        Icon={SearchX}
      />
    </View>
  );
};

export default Search;
