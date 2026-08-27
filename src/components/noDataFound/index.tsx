import { Text, View } from 'react-native';
import { NoDataFoundProps } from './type';
import GlowView from '../glowView';
import styles from './style';
import { AppColors } from '@/theme';

const NoDataFound = ({ title, description, Icon }: NoDataFoundProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <GlowView size={50} />
        <Icon size={40} color={AppColors.themeChanger} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default NoDataFound;
