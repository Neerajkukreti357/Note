import { AlignLeft } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';
import { DarkColors } from '@/theme';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { headerProps, NavigationProp } from './type';

const Header = ({ screenName }: headerProps) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp>();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={[styles.mainContainer, { marginTop: insets.top }]}>
      <View style={styles.menuBox}>
        <Pressable onPress={openDrawer}>
          <AlignLeft size={24} color={DarkColors.heading} />
        </Pressable>
        <Text style={styles.heading}>{screenName}</Text>
      </View>
    </View>
  );
};

export default Header;
