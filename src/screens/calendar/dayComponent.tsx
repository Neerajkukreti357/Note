import { Text, TouchableOpacity } from 'react-native';
import dayjs from 'dayjs';
import { CustomDayViewProps } from './type';
import { useTheme } from '@/context/ThemeContext';
import createStyles from './style';

const CustomDayView = ({
  date,
  state,
  selectedDate,
  noteCount,
  onPress,
}: CustomDayViewProps) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  if (!date) {
    return null;
  }

  const isSelected = date.dateString === selectedDate;
  const isToday = date.dateString === dayjs().format('YYYY-MM-DD');
  const count = noteCount[date.dateString] ?? 0;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => onPress(date.dateString)}
      style={[
        styles.dayContainer,
        isSelected && {
          backgroundColor: colors.highlightColor,
        },
      ]}
    >
      <Text
        style={[
          styles.day,
          isSelected && styles.selectedDay,
          !isSelected && isToday && styles.today,
          state === 'disabled' && styles.disabledDay,
        ]}
      >
        {date.day}
      </Text>

      {count > 0 && (
        <Text
          style={[
            styles.count,
            {
              color: colors.closeButtonColor,
            },
          ]}
        >
          {count > 3 ? `${3}+` : count}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomDayView;
