import { AlignLeft, Plus } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';
import { AppColors } from '@/theme';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import GlowView from '../glowView';

const Header = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={[styles.mainContainer, { marginTop: insets.top }]}>
      <View style={styles.menuBox}>
        <Pressable onPress={openDrawer}>
          <AlignLeft size={24} color={AppColors.heading} />
        </Pressable>
        <Text style={styles.heading}>Home</Text>
      </View>
      <Pressable style={styles.plusButton}>
        <GlowView size={50} color={AppColors.highlightColor} />
        <Plus size={24} color={AppColors.heading} />
      </Pressable>
    </View>
  );
};

export default Header;
