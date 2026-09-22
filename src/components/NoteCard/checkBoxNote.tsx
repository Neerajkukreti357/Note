import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Card from '../card';
import { EllipsisVertical, ListChecks } from 'lucide-react-native';
import Badges from '../badges';
import { Note } from '@/store/type';
import TextTruncate from '../textTruncate';
import { badgeColors } from '@/theme/colors';
import createStyles from './style';
import { useTheme } from '@/context/ThemeContext';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { formatNoteDate } from '@/utils/date';
import { NoteCardPorps } from './type';
import EditOrDeleteBottomTab from '../editDelComponent';
import {
  deleteNote,
  markNoteAsCompleted,
  permanentlyDeleteNote,
} from '@/services/notesServices/createNotesServices';
import PermanantDeleteTab from '../editDelComponent/PermanantDeleteTab';

type RootStackParamList = {
  ViewScreen: {
    item: Note;
  };
};

const CheckBoxNote = ({
  item,
  isSheetOpen,
  selectedNote,
  toggleSheet,
  setIsSheetOpen,
  refetch,
  isPermanantTab = false,
}: NoteCardPorps) => {
  const { colors } = useTheme();
  const style = createStyles(colors);
  const navigate = useNavigation<NavigationProp<RootStackParamList>>();

  const goTo = () => {
    navigate.navigate('ViewScreen', { item });
  };

  const onDelete = async (item: Note | null) => {
    try {
      await deleteNote(String(item?.id));
      refetch();
    } catch (err) {
      console.log(err);
    } finally {
      setIsSheetOpen(false);
    }
  };

  const onMarkAsComplete = async (item: Note | null) => {
    try {
      await markNoteAsCompleted(String(item?.id));
      refetch();
    } catch (err) {
      console.log(err);
    } finally {
      setIsSheetOpen(false);
    }
  };

  const onDeleteForever = async (item: Note | null) => {
    try {
      await permanentlyDeleteNote(String(item?.id));
      refetch();
    } catch (err) {
      console.log(err);
    } finally {
      setIsSheetOpen(false);
    }
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={goTo}>
        <Card key={item?.id}>
          <Card.Header
            style={[
              style.headerContainer,
              item?.priority === 'high'
                ? style.forHighPriority
                : item?.priority === 'medium'
                ? style.forMediumPriority
                : style.forLowPriority,
            ]}
          >
            <View style={style.headingBox}>
              <View style={style.checkBackground}>
                <ListChecks size={25} color={badgeColors.high.background} />
              </View>

              <View>
                <TextTruncate numberOfLines={1} style={style.headingText}>
                  {item?.title}
                </TextTruncate>

                <Text style={style.timeDateFormate}>
                  {formatNoteDate(item?.created_at)}
                </Text>
              </View>
            </View>

            <View style={style.badgeContainer}>
              <Badges
                title={item?.is_completed === 0 ? 'pending' : 'complete'}
              />
              <Badges title={item?.priority} />
            </View>
            <TouchableOpacity hitSlop={10} onPress={() => toggleSheet(item)}>
              <EllipsisVertical size={18} color={colors.lightBorder} />
            </TouchableOpacity>
          </Card.Header>
        </Card>
      </TouchableWithoutFeedback>
      {isPermanantTab ? (
        <PermanantDeleteTab
          isSheetOpen={isSheetOpen && selectedNote?.id === item?.id}
          setIsSheetOpen={setIsSheetOpen}
          onDeleteForever={() => {
            onDeleteForever(selectedNote);
          }}
        />
      ) : (
        <EditOrDeleteBottomTab
          isSheetOpen={isSheetOpen && selectedNote?.id === item?.id}
          setIsSheetOpen={setIsSheetOpen}
          onEdit={() => {
            console.log('Edit:', selectedNote);
          }}
          onDelete={() => {
            onDelete(selectedNote);
          }}
          onMarkComplete={() => onMarkAsComplete(selectedNote)}
        />
      )}
    </>
  );
};

export default CheckBoxNote;
