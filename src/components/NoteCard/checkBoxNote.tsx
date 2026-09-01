import { Text, View } from 'react-native';
import Card from '../card';
import { GripVertical, EllipsisVertical } from 'lucide-react-native';
import style from './style';
import { AppColors, fontSize } from '@/theme';
import Badges from '../badges';
import { CircleCheckBig, CircleMinus } from 'lucide-react-native';
import { Note } from '@/store/type';
import TextTruncate from '../textTruncate';
import { useMemo } from 'react';

const CheckBoxNote = ({ item }: { item: Note }) => {
  const checkList = useMemo(() => JSON.parse(item?.checklist), [item]);
  console.log(item);
  return (
    <Card>
      <Card.Header>
        <View style={style.headingBox}>
          <GripVertical size={18} color={AppColors.lightBorder} />
          <TextTruncate numberOfLines={1} style={style.headingText}>
            {item?.title}
          </TextTruncate>
        </View>
        <EllipsisVertical size={18} color={AppColors.lightBorder} />
      </Card.Header>
      <Card.Body style={style.bodyStyle}>
        {checkList?.length === 4
          ? checkList?.map(
              (item: { id: string; label: string; isCompleted: boolean }) => (
                <View style={style.checkBox} key={item?.id}>
                  {item?.isCompleted ? (
                    <CircleCheckBig
                      size={20}
                      color={AppColors.highlightColor}
                    />
                  ) : (
                    <CircleMinus size={20} color={AppColors.lightBorder} />
                  )}
                  <TextTruncate style={style.descriptionText}>
                    {item?.label}
                  </TextTruncate>
                </View>
              ),
            )
          : checkList
              ?.slice(0, 4)
              ?.map(
                (item: { id: string; label: string; isCompleted: boolean }) => (
                  <View style={style.checkBox} key={item?.id}>
                    {item?.isCompleted ? (
                      <CircleCheckBig
                        size={20}
                        color={AppColors.highlightColor}
                      />
                    ) : (
                      <CircleMinus size={20} color={AppColors.lightBorder} />
                    )}
                    <TextTruncate style={style.descriptionText}>
                      {item?.label}
                    </TextTruncate>
                  </View>
                ),
              )}
        {checkList?.length > 4 ? (
          <Text
            style={[
              style.readMoreText,
              {
                color: AppColors.icon,
                fontSize: fontSize.description,
              },
            ]}
          >
            ... Read more
          </Text>
        ) : null}
      </Card.Body>
      <Card.Footer>
        <Badges title="partial complete" />
        <Badges title={'low'} />
      </Card.Footer>
    </Card>
  );
};

export default CheckBoxNote;
