import { View } from 'react-native';
import Card from '../card';
import {
  GripVertical,
  EllipsisVertical,
  ListChecks,
} from 'lucide-react-native';
import style from './style';
import { AppColors } from '@/theme';
import Badges from '../badges';
import { Note } from '@/store/type';
import TextTruncate from '../textTruncate';
import { badgeColors } from '@/theme/colors';

const CheckBoxNote = ({ item }: { item: Note }) => {
  return (
    <Card>
      <Card.Header>
        <View style={style.headingBox}>
          <GripVertical size={18} color={AppColors.lightBorder} />
          <TextTruncate numberOfLines={1} style={style.headingText}>
            {item?.title}
          </TextTruncate>
          <View style={style.checkBackground}>
            <ListChecks size={15} color={badgeColors.high.text} />
          </View>
        </View>
        <EllipsisVertical size={18} color={AppColors.lightBorder} />
      </Card.Header>
      <Card.Footer>
        <Badges title="partial complete" />
        <Badges title={'low'} />
      </Card.Footer>
    </Card>
  );
};

export default CheckBoxNote;
