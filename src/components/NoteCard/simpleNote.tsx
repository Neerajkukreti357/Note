import { View } from 'react-native';
import Card from '../card';
import { GripVertical, EllipsisVertical, FileText } from 'lucide-react-native';
import Badges from '../badges';
import { Note } from '@/store/type';
import TextTruncate from '../textTruncate';
import { badgeColors } from '@/theme/colors';
import { useTheme } from '@/context/ThemeContext';
import createStyles from './style';

const SimpleNoteCard = ({ item }: { item: Note }) => {
  const { colors } = useTheme();
  const style = createStyles(colors);
  return (
    <Card key={item?.id}>
      <Card.Header>
        <View style={style.headingBox}>
          <GripVertical size={18} color={colors.lightBorder} />
          <TextTruncate numberOfLines={1} style={style.headingText}>
            {item?.title}
          </TextTruncate>
          <View style={style.fileTextBackground}>
            <FileText size={15} color={badgeColors?.pending?.text} />
          </View>
        </View>
        <EllipsisVertical size={18} color={colors.lightBorder} />
      </Card.Header>
      <Card.Footer>
        <Badges title={item?.is_completed === 0 ? 'pending' : 'complete'} />
        <Badges title={item?.priority} />
      </Card.Footer>
    </Card>
  );
};

export default SimpleNoteCard;
