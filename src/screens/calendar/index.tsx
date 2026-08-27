import { View } from 'react-native';
import React from 'react';
import style from './style';
import { CalendarComponent, TimeLineComponent } from '@/components';

const Calendar = () => {
  return (
    <View style={style.container}>
      <CalendarComponent />
      <TimeLineComponent />
    </View>
  );
};

export default Calendar;
