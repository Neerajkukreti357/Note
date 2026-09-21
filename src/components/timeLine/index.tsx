import { FlatList, Text, View } from 'react-native';
import { badgeColors } from '@/theme/colors';
import { useTheme } from '@/context/ThemeContext';
import createStyles from './style';
import { Note } from '@/store/type';
import dayjs from 'dayjs';

const TimeLineComponent = ({ notes }: { notes: Note[] }) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <FlatList
      data={notes}
      keyExtractor={item => String(item.id)}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.flatListContainer}
      renderItem={({ item }) => {
        const date = dayjs(Number(item.created_at));
        const day = date.format('DD'); // "21"
        const weekday = date.format('dddd');
        return (
          <View style={styles.row}>
            {/* DATE */}
            <View style={styles.dateContainer}>
              <Text style={styles.day}>{day}</Text>

              <Text style={styles.weekday}>{weekday}</Text>
            </View>

            {/* TASK */}
            <View style={styles.taskContainer}>
              <View
                style={[
                  styles.priority,
                  {
                    backgroundColor: badgeColors[item?.priority]?.text,
                  },
                ]}
              />

              <View style={styles.taskContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>
                  {item.noteType === 1
                    ? 'Text Notes'
                    : item?.noteType === 2
                    ? 'List Notes'
                    : 'Media Note'}
                </Text>
              </View>
            </View>
          </View>
        );
      }}
    />
  );
};

export default TimeLineComponent;
