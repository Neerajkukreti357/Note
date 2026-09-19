import { TouchableWithoutFeedback, View } from 'react-native';
import Card from '../card';
import {
  GripVertical,
  EllipsisVertical,
  ListChecks,
} from 'lucide-react-native';
import Badges from '../badges';
import { Note } from '@/store/type';
import TextTruncate from '../textTruncate';
import { badgeColors } from '@/theme/colors';
import createStyles from './style';
import { useTheme } from '@/context/ThemeContext';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  ViewScreen: {
    item: Note;
  };
};

const CheckBoxNote = ({ item }: { item: Note }) => {
  const { colors } = useTheme();
  const style = createStyles(colors);
  const navigate = useNavigation<NavigationProp<RootStackParamList>>();

  const goTo = () => {
    navigate.navigate('ViewScreen', { item });
  };
  return (
    <TouchableWithoutFeedback onPress={goTo}>
      <Card>
        <Card.Header>
          <View style={style.headingBox}>
            <GripVertical size={18} color={colors.lightBorder} />
            <TextTruncate numberOfLines={1} style={style.headingText}>
              {item?.title}
            </TextTruncate>
            <View style={style.checkBackground}>
              <ListChecks size={15} color={badgeColors.high.text} />
            </View>
          </View>
          <EllipsisVertical size={18} color={colors.lightBorder} />
        </Card.Header>
        <Card.Footer>
          <Badges title="partial complete" />
          <Badges title={'low'} />
        </Card.Footer>
      </Card>
    </TouchableWithoutFeedback>
  );
};

export default CheckBoxNote;
