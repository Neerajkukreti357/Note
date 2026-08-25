import { Text, View } from 'react-native';
import Card from '../card';
import { GripVertical, EllipsisVertical } from 'lucide-react-native';
import style from './style';
import { AppColors } from '@/theme';
import Badges from '../badges';

const CheckBoxNote = () => {
  const checkList = [
    {
      isComplete: true,
      lable: 'Lorem Lorem',
    },
    {
      isComplete: true,
      lable: 'Lorem Lorem',
    },
    {
      isComplete: false,
      lable: 'Lorem Lorem',
    },
    {
      isComplete: false,
      lable: 'Lorem Lorem',
    },
  ];
  return (
    <Card>
      <Card.Header>
        <View style={style.headingBox}>
          <GripVertical size={18} color={AppColors.lightBorder} />
          <Text style={style.headingText}>Weekly Grocery</Text>
        </View>
        <EllipsisVertical size={18} color={AppColors.lightBorder} />
      </Card.Header>
      <Card.Body>
        {checkList?.map((item, index) => (
          <View style={style.checkBox} key={index + 1}>
            <View
              style={[
                style.theDot,
                {
                  backgroundColor: item?.isComplete
                    ? AppColors.highlightColor
                    : AppColors.icon,
                },
              ]}
            />
            <Text style={style.descriptionText}>{item?.lable}</Text>
          </View>
        ))}
      </Card.Body>
      <Card.Footer>
        <Badges title="partial complete" />
        <Badges title={'low'} />
      </Card.Footer>
    </Card>
  );
};

export default CheckBoxNote;
