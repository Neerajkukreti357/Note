import { Image, Text, View } from 'react-native';
import Card from '../card';
import { GripVertical, EllipsisVertical } from 'lucide-react-native';
import style from './style';
import { AppColors } from '@/theme';
import Badges from '../badges';

const NotesWithImages = () => {
  return (
    <Card>
      <Card.Header>
        <View style={style.headingBox}>
          <GripVertical size={18} color={AppColors.lightBorder} />
          <Text style={style.headingText}>Q3 Architecture Review</Text>
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
        <Image
          source={{ uri: 'https://picsum.photos/400/300' }}
          style={style.image}
        />
      </Card.Body>
      <Card.Footer>
        <Badges title="pending" />
        <Badges title={'low'} />
      </Card.Footer>
    </Card>
  );
};

export default NotesWithImages;
