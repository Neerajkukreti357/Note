import { View } from 'react-native';
import React from 'react';
import { CalendarComponent, TimeLineComponent } from '@/components';
import { useTheme } from '@/context/ThemeContext';
import createStyles from './style';

const Calendar = () => {
  const { colors } = useTheme();
  const style = createStyles(colors);

  return (
    <View style={style.container}>
      <CalendarComponent />
      <TimeLineComponent />
    </View>
  );
};

export default Calendar;
