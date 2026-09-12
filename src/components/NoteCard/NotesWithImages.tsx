import { View } from 'react-native';
import Card from '../card';
import { GripVertical, EllipsisVertical, Image } from 'lucide-react-native';
import style from './style';
import { DarkColors } from '@/theme';
import Badges from '../badges';
import { Note } from '@/store/type';
import TextTruncate from '../textTruncate';
import { badgeColors } from '@/theme/colors';

const NotesWithImages = ({ item }: { item: Note }) => {
  return (
    <Card key={item?.id}>
      <Card.Header>
        <View style={style.headingBox}>
          <GripVertical size={18} color={DarkColors.lightBorder} />
          <TextTruncate numberOfLines={1} style={style.headingText}>
            {item?.title}
          </TextTruncate>
          <View style={style.ImageBackground}>
            <Image size={15} color={badgeColors['partial complete'].text} />
          </View>
        </View>
        <EllipsisVertical size={18} color={DarkColors.lightBorder} />
      </Card.Header>
      <Card.Footer>
        <Badges title="pending" />
        <Badges title={'low'} />
      </Card.Footer>
    </Card>
  );
};

export default NotesWithImages;
