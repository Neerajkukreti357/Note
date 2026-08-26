import { View } from 'react-native';
import React from 'react';
import style from './style';
import { CalendarComponent } from '@/components';
import TimeLineComponent from '@/components/timeLine';

const Calendar = () => {
  return (
    <View style={style.container}>
      <CalendarComponent />
      <TimeLineComponent />
    </View>
  );
};

export default Calendar;
