import { View } from 'react-native';
import Card from '../card';
import { GripVertical, EllipsisVertical } from 'lucide-react-native';
import style from './style';
import { AppColors } from '@/theme';
import Badges from '../badges';
import { Note } from '@/store/type';
import TextTruncate from '../textTruncate';
import HTMLTextTruncate from '../textTruncate/htmlContent';

const SimpleNoteCard = ({ item }: { item: Note }) => {
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
      </Card.Body>
      <Card.Footer>
        <Badges title={item?.is_completed === 0 ? 'pending' : 'complete'} />
        <Badges title={item?.priority} />
      </Card.Footer>
    </Card>
  );
};

export default SimpleNoteCard;
