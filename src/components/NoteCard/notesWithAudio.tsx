import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Card from '../card';
import { AudioLines, EllipsisVertical } from 'lucide-react-native';
import Badges from '../badges';
import { Note } from '@/store/type';
import TextTruncate from '../textTruncate';
import { badgeColors } from '@/theme/colors';
import { useTheme } from '@/context/ThemeContext';
import createStyles from './style';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { formatNoteDate } from '@/utils/date';
import { NoteCardPorps } from './type';
import EditOrDeleteBottomTab from '../editDelComponent';

type RootStackParamList = {
  ViewScreen: {
    item: Note;
  };
};

const NoteWithAudio = ({
  item,
  isSheetOpen,
  selectedNote,
  toggleSheet,
  setIsSheetOpen,
}: NoteCardPorps) => {
  const { colors } = useTheme();
  const style = createStyles(colors);
  const navigate = useNavigation<NavigationProp<RootStackParamList>>();

  const goTo = () => {
    navigate.navigate('ViewScreen', { item });
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
              <View style={style.audioBackground}>
                <AudioLines size={25} color={badgeColors.low.background} />
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
      <EditOrDeleteBottomTab
        isSheetOpen={isSheetOpen && selectedNote?.id === item?.id}
        setIsSheetOpen={setIsSheetOpen}
        onEdit={() => {
          console.log('Edit:', selectedNote);
        }}
        onDelete={() => {
          console.log('Delete:', selectedNote);
        }}
      />
    </>
  );
};

export default NoteWithAudio;
