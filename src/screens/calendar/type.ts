import { StyleProp, ViewStyle } from 'react-native';

export type CustomDayViewProps = {
  date?: {
    dateString: string;
    day: number;
    month: number;
    year: number;
    timestamp: number;
  };
  noteCount: Record<string, number>;

  state?: 'selected' | 'disabled' | 'today' | '';

  selectedDate: string;

  primaryColor: string;

  textColor: string;

  containerStyle?: StyleProp<ViewStyle>;

  onPress: (date: string) => void;
};
