import { View } from 'react-native';
import Card from '../card';
import { GripVertical, EllipsisVertical, FileText } from 'lucide-react-native';
import style from './style';
import { DarkColors } from '@/theme';
import Badges from '../badges';
import { Note } from '@/store/type';
import TextTruncate from '../textTruncate';
import { badgeColors } from '@/theme/colors';

const SimpleNoteCard = ({ item }: { item: Note }) => {
  return (
    <Card key={item?.id}>
      <Card.Header>
        <View style={style.headingBox}>
          <GripVertical size={18} color={DarkColors.lightBorder} />
          <TextTruncate numberOfLines={1} style={style.headingText}>
            {item?.title}
          </TextTruncate>
          <View style={style.fileTextBackground}>
            <FileText size={15} color={badgeColors?.pending?.text} />
          </View>
        </View>
        <EllipsisVertical size={18} color={DarkColors.lightBorder} />
      </Card.Header>
      <Card.Footer>
        <Badges title={item?.is_completed === 0 ? 'pending' : 'complete'} />
        <Badges title={item?.priority} />
      </Card.Footer>
    </Card>
  );
};

export default SimpleNoteCard;
