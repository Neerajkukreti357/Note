import { Text, View } from 'react-native';
import Card from '../card';
import { GripVertical, EllipsisVertical } from 'lucide-react-native';
import style from './style';
import { AppColors } from '@/theme';
import Badges from '../badges';
import { Note } from '@/store/type';

const SimpleNoteCard = ({ item }: { item: Note }) => {
  console.log(item);
  return (
    <Card key={item?.id}>
      <Card.Header>
        <View style={style.headingBox}>
          <GripVertical size={18} color={AppColors.lightBorder} />
          <Text style={style.headingText}>{item?.title}</Text>
        </View>
        <EllipsisVertical size={18} color={AppColors.lightBorder} />
      </Card.Header>
      <Card.Body>
        <Text style={style.descriptionText}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem at
          exercitationem id commodi blanditiis dolores expedita quia vel nulla
          soluta, dicta illo nemo. Corrupti consequuntur eos sapiente mollitia
          dolorum?
        </Text>
      </Card.Body>
      <Card.Footer>
        <Badges title="pending" />
        <Badges title={'low'} />
      </Card.Footer>
    </Card>
  );
};

export default SimpleNoteCard;
