import { create } from 'zustand';
import dayjs from 'dayjs';

type CalendarStore = {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
};

export const useCalendarStore = create<CalendarStore>(set => ({
  selectedDate: dayjs().format('YYYY-MM-DD'),

  setSelectedDate: date => {
    set({ selectedDate: date });
  },
}));
