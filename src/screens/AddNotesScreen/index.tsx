import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import { X } from 'lucide-react-native';
import { AppColors } from '@/theme';
import { General, GlowView, Media, Tabs } from '@/components';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import CheckList from '@/components/checklist';

const AddScreenNotes = () => {
  const navigation = useNavigation();
  const [active, setActive] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <X size={30} color={AppColors.heading} />
        </Pressable>
        <Text style={styles.title}>Add Notes</Text>
        <Pressable style={styles.button}>
          <GlowView size={50} color={AppColors.highlightColor} />
          <Text style={styles.textStyle}>Add Note</Text>
        </Pressable>
      </View>

      <Tabs active={active} setActive={setActive} />

      {active === 0 ? <General /> : active === 1 ? <CheckList /> : <Media />}
    </SafeAreaView>
  );
};

export default AddScreenNotes;
