import { Text, View } from 'react-native';
import Card from '../card';
import { EllipsisVertical, GripVertical } from 'lucide-react-native';
import { AppColors } from '@/theme';
import style from './style';
import Badges from '../badges';
import AudioPlayer from '../audio';
import { Note } from '@/store/type';
import HTMLTextTruncate from '../textTruncate/htmlContent';
import TextTruncate from '../textTruncate';

const NoteWithAudio = ({ item }: { item: Note }) => {
  return (
    <Card key={item?.id}>
      <Card.Header>
        <View style={style.headingBox}>
          <GripVertical size={18} color={AppColors.lightBorder} />
          <TextTruncate numberOfLines={1} style={style.headingText}>
            {item?.title}
          </TextTruncate>
        </View>
        <EllipsisVertical size={18} color={AppColors.lightBorder} />
      </Card.Header>
      <Card.Body>
        <HTMLTextTruncate
          numberOfLines={4}
          html={item?.description}
          baseStyle={style.descriptionText}
        />
        <AudioPlayer audioPath={item?.audio_path} />
      </Card.Body>
      <Card.Footer>
        <Badges title={item?.is_completed === 0 ? 'pending' : 'complete'} />
        <Badges title={item?.priority} />
      </Card.Footer>
    </Card>
  );
};

export default NoteWithAudio;
