import { AudioPlayer, Badges, SimpleHeader } from '@/components';
import { useTheme } from '@/context/ThemeContext';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import createStyles from './style';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Note } from '@/store/type';
import HTMLText from '@/components/textTruncate/htmlContent';
import { Timer } from 'lucide-react-native';
import { formatNoteDate } from '@/utils/date';
import SingleCheckbox from '@/components/formComponents/checkbox/singleCheckbox';
import { useState } from 'react';
import { updateNote } from '@/services/notesServices/createNotesServices';
import { useNotes } from '@/hooks/home';

type RootStackParamList = {
  ViewScreen: {
    item: Note;
  };
};

type ViewScreenRouteProp = RouteProp<RootStackParamList, 'ViewScreen'>;

interface ChecklistItem {
  id: string;
  label: string;
  isCompleted: boolean;
}

const ViewScreen = () => {
  const { colors } = useTheme();
  const { width: screenWidth } = Dimensions.get('window');
  const imageSize = screenWidth * 0.9;
  const styles = createStyles(colors, imageSize);
  const route = useRoute<ViewScreenRouteProp>();
  const { item } = route.params;
  const [loading, setLoading] = useState(false);
  const { refetch } = useNotes();

  const imageList = JSON.parse(item?.imageList);

  const [checkLst, setCheckLst] = useState<ChecklistItem[]>(
    item?.checklist ? JSON.parse(item?.checklist) : null,
  );

  const handleCheckboxToggle = (id: string, checked: boolean) => {
    const updatedList = checkLst.map(checkItem =>
      checkItem.id === id ? { ...checkItem, isCompleted: checked } : checkItem,
    );
    setCheckLst(updatedList);
    // send updatedList (or just the changed item) to backend here
  };

  const handleSave = async () => {
    setLoading(true);
    console.log(checkLst);
    try {
      await updateNote(item.id, {
        checklist: JSON.stringify(checkLst),
      });
      refetch();
    } catch (error) {
      console.error('Failed to update checklist:', error);
    } finally {
      setLoading(false);
    }
  };

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
          <View style={styles.imageContainer}>
            {imageList?.length &&
              imageList?.map((file: any, index: number) => (
                <Image
                  key={index}
                  source={{
                    uri: file?.uri,
                  }}
                  resizeMode="cover"
                  style={styles.image}
                />
              ))}
            {item?.audio_path && <AudioPlayer audioPath={item?.audio_path} />}

            {checkLst?.length &&
              checkLst?.map((checkItem: ChecklistItem) => (
                <SingleCheckbox
                  key={checkItem.id}
                  label={checkItem.label}
                  checked={checkItem.isCompleted}
                  onChange={checked =>
                    handleCheckboxToggle(checkItem.id, checked)
                  }
                  disbaled={item?.is_deleted === 1}
                />
              ))}

            {checkLst?.length && item?.is_deleted === 0 && (
              <Pressable
                disabled={loading}
                style={styles.button}
                onPress={handleSave}
              >
                {loading ? (
                  <Text style={styles.textStyle}>Saving ...</Text>
                ) : (
                  <Text style={styles.textStyle}>Update</Text>
                )}
              </Pressable>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ViewScreen;
