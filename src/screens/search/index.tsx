import { View } from 'react-native';
import React from 'react';
import { SearchInput } from '@/components/formComponents';
import { NoDataFound } from '@/components';
import { SearchX } from 'lucide-react-native';
import { useTheme } from '@/context/ThemeContext';
import createStyles from './style';

const Search = () => {
  const { colors } = useTheme();
  const style = createStyles(colors);
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
