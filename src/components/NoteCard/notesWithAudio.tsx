import { Text, View } from 'react-native';
import Card from '../card';
import { EllipsisVertical, GripVertical } from 'lucide-react-native';
import { AppColors } from '@/theme';
import style from './style';
import Badges from '../badges';
import AudioPlayer from '../audio';

const NoteWithAudio = () => {
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
        <AudioPlayer />
      </Card.Body>
      <Card.Footer>
        <Badges title="pending" />
        <Badges title={'low'} />
      </Card.Footer>
    </Card>
  );
};

export default NoteWithAudio;
