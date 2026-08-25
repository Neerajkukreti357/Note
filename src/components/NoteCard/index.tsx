import { Text, View } from 'react-native';
import Card from '../card';
import { GripVertical, EllipsisVertical } from 'lucide-react-native';
import style from './style';
import { AppColors } from '@/theme';

const NoteCard = () => {
  return (
    <Card>
      <Card.Header>
        <View style={style.headingBox}>
          <GripVertical size={24} color={AppColors.icon} />
          <Text style={style.headingText}>Q3 Architecture Review</Text>
        </View>
        <EllipsisVertical size={24} color={AppColors.icon} />
      </Card.Header>
      <Card.Body>
        <Text style={style.decriptionText}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem at
          exercitationem id commodi blanditiis dolores expedita quia vel nulla
          soluta, dicta illo nemo. Corrupti consequuntur eos sapiente mollitia
          dolorum?
        </Text>
      </Card.Body>
      <Card.Footer>
        <Text>Footer</Text>
      </Card.Footer>
    </Card>
  );
};

export default NoteCard;
