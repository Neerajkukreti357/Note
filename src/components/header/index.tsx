import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Header = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ marginTop: insets.top }}>
      <Text>HEader</Text>
    </View>
  );
};

export default Header;
