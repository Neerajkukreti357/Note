import { TouchableWithoutFeedback, View } from 'react-native';
import Card from '../card';
import { GripVertical, EllipsisVertical, Image } from 'lucide-react-native';
import Badges from '../badges';
import { Note } from '@/store/type';
import TextTruncate from '../textTruncate';
import { badgeColors } from '@/theme/colors';
import { useTheme } from '@/context/ThemeContext';
import createStyles from './style';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  ViewScreen: { item: Note };
};

const NotesWithImages = ({ item }: { item: Note }) => {
  const { colors } = useTheme();
  const style = createStyles(colors);
  const navigate = useNavigation<NavigationProp<RootStackParamList>>();

  const goTo = () => {
    navigate.navigate('ViewScreen', { item });
  };
  return (
    <TouchableWithoutFeedback onPress={goTo}>
      <Card key={item?.id}>
        <Card.Header>
          <View style={style.headingBox}>
            <GripVertical size={18} color={colors.lightBorder} />
            <TextTruncate numberOfLines={1} style={style.headingText}>
              {item?.title}
            </TextTruncate>
            <View style={style.ImageBackground}>
              <Image size={15} color={badgeColors['partial complete'].text} />
            </View>
          </View>
          <EllipsisVertical size={18} color={colors.lightBorder} />
        </Card.Header>
        <Card.Footer>
          <Badges title="pending" />
          <Badges title={'low'} />
        </Card.Footer>
      </Card>
    </TouchableWithoutFeedback>
  );
};

export default NotesWithImages;
