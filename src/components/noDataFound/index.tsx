import { Text, View } from 'react-native';
import { NoDataFoundProps } from './type';
import GlowView from '../glowView';
import { DarkColors } from '@/theme';
import { useTheme } from '@/context/ThemeContext';
import createStyles from './style';

const NoDataFound = ({ title, description, Icon }: NoDataFoundProps) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <GlowView size={50} />
        <Icon size={40} color={DarkColors.themeChanger} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default NoDataFound;
