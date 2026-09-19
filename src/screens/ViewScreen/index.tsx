import { Badges, SimpleHeader } from '@/components';
import { useTheme } from '@/context/ThemeContext';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import createStyles from './style';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Note } from '@/store/type';
import HTMLText from '@/components/textTruncate/htmlContent';
import { Timer } from 'lucide-react-native';
import { formatNoteDate } from '@/utils/date';

type RootStackParamList = {
  ViewScreen: {
    item: Note;
  };
};

type ViewScreenRouteProp = RouteProp<RootStackParamList, 'ViewScreen'>;

const ViewScreen = () => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const route = useRoute<ViewScreenRouteProp>();
  const { item } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <SimpleHeader />
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.innerConatiner}>
          <Text style={styles.Title}>{item?.title}</Text>
          <View style={styles.dateContainer}>
            <View style={styles.timerContainer}>
              <Timer color={colors.monthTextColor} size={16} />
              <Text style={styles.timer}>
                {formatNoteDate(item?.created_at)}
              </Text>
            </View>
            <View style={styles.timerContainer}>
              <Badges
                title={item?.is_completed === 0 ? 'pending' : 'complete'}
              />
              <Badges title={item?.priority} />
            </View>
          </View>
          <HTMLText html={item?.description} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ViewScreen;
