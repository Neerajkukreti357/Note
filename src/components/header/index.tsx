import { AlignLeft } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { headerProps, NavigationProp } from './type';
import { useTheme } from '@/context/ThemeContext';
import createStyles from './styles';

const Header = ({ screenName }: headerProps) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp>();
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={[styles.mainContainer, { marginTop: insets.top }]}>
      <View style={styles.menuBox}>
        <Pressable onPress={openDrawer}>
          <AlignLeft size={24} color={colors.heading} />
        </Pressable>
        <Text style={styles.heading}>{screenName}</Text>
      </View>
    </View>
  );
};

export default Header;
