import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Card from '../card';
import { EllipsisVertical, FileText } from 'lucide-react-native';
import Badges from '../badges';
import { Note } from '@/store/type';
import TextTruncate from '../textTruncate';
import { badgeColors } from '@/theme/colors';
import { useTheme } from '@/context/ThemeContext';
import createStyles from './style';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { formatNoteDate } from '@/utils/date';
import EditOrDeleteBottomTab from '../editDelComponent';
import React from 'react';
import { NoteCardPorps } from './type';
import {
  deleteNote,
  markNoteAsCompleted,
  permanentlyDeleteNote,
  restoreNote,
} from '@/services/notesServices/createNotesServices';
import PermanantDeleteTab from '../editDelComponent/PermanantDeleteTab';
import Toast from 'react-native-toast-message';

type RootStackParamList = {
  ViewScreen?: { item: Note };
  AddNote?: { item: Note };
};

const SimpleNoteCard = ({
  item,
  isSheetOpen,
  selectedNote,
  toggleSheet,
  setIsSheetOpen,
  refetch,
  isPermanantTab = false,
  isDraft,
}: NoteCardPorps) => {
  const { colors } = useTheme();
  const style = createStyles(colors);
  const navigate = useNavigation<NavigationProp<RootStackParamList>>();

  const goTo = () => {
    isDraft
      ? navigate.navigate('AddNote', { item })
      : navigate.navigate('ViewScreen', { item });
  };

  const onDelete = async (item: Note | null) => {
    try {
      await deleteNote(String(item?.id));
      refetch();
      Toast.show({
        type: 'success',
        text1: 'Note saved',
        text2: 'Note moved to trash successfully',
      });
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
      Toast.show({
        type: 'success',
        text1: 'Note saved',
        text2: 'Note deleted successfully',
      });
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
      Toast.show({
        type: 'success',
        text1: 'Note saved',
        text2: 'Note marked as complete successfully',
      });
    } catch (err) {
      console.log(err);
    } finally {
      setIsSheetOpen(false);
    }
  };

  const onRestoreNote = async (item: Note | null) => {
    try {
      await restoreNote(String(item?.id));
      refetch();
      Toast.show({
        type: 'success',
        text1: 'Note saved',
        text2: 'Notes restore successfully',
      });
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
              <View style={style.fileTextBackground}>
                <FileText size={25} color={badgeColors?.pending?.background} />
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
          onRestore={() => onRestoreNote(selectedNote)}
          isDraft={isDraft}
        />
      ) : (
        <EditOrDeleteBottomTab
          isSheetOpen={isSheetOpen && selectedNote?.id === item?.id}
          setIsSheetOpen={setIsSheetOpen}
          onEdit={() => {
            navigate.navigate('AddNote', { item });
          }}
          onDelete={() => {
            onDelete(selectedNote);
          }}
          onMarkComplete={() => {
            onMarkAsComplete(selectedNote);
          }}
          isCompletedOrNot={item?.is_completed === 1}
        />
      )}
    </>
  );
};

export default SimpleNoteCard;
