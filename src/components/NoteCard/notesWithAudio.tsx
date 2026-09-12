import { View } from 'react-native';
import Card from '../card';
import {
  AudioLines,
  EllipsisVertical,
  GripVertical,
} from 'lucide-react-native';
import { AppColors } from '@/theme';
import style from './style';
import Badges from '../badges';
import { Note } from '@/store/type';
import TextTruncate from '../textTruncate';
import { badgeColors } from '@/theme/colors';

const NoteWithAudio = ({ item }: { item: Note }) => {
  return (
    <Card key={item?.id}>
      <Card.Header>
        <View style={style.headingBox}>
          <GripVertical size={18} color={AppColors.lightBorder} />
          <TextTruncate numberOfLines={1} style={style.headingText}>
            {item?.title}
          </TextTruncate>
          <View style={style.audioBackground}>
            <AudioLines size={15} color={badgeColors.low.text} />
          </View>
        </View>
        <EllipsisVertical size={18} color={AppColors.lightBorder} />
      </Card.Header>
      <Card.Footer>
        <Badges title={item?.is_completed === 0 ? 'pending' : 'complete'} />
        <Badges title={item?.priority} />
      </Card.Footer>
    </Card>
  );
};

export default NoteWithAudio;
