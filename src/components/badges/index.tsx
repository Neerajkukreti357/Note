import { Text, View } from 'react-native';
import { BadgesProps } from './types';
import style from './style';
import { badgeColors } from '@/theme/colors';

const Badges = ({ title }: BadgesProps) => {
  const colors = badgeColors[title];
  return (
    <View
      style={[style.badgeContainer, { backgroundColor: colors.background }]}
    >
      <Text style={[style.badgeContent, { color: colors.text }]}>
        {title.toUpperCase()}
      </Text>
    </View>
  );
};

export default Badges;
