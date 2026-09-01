import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import { X } from 'lucide-react-native';
import { AppColors } from '@/theme';
import { General, GlowView, Media, Tabs } from '@/components';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import CheckList from '@/components/checklist';
import {
  checkListNoteSchema,
  CheckNoteFormData,
  SimpleNoteFormData,
  simpleNoteSchema,
} from './shema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { CheckNoteInitialsValues, SimpleNoteInitialsValues } from './contant';
import {
  createCheckListNote,
  createSimpleNote,
} from '@/services/notesServices/createNotesServices';
import { useNotes } from '@/hooks/home';

const AddScreenNotes = () => {
  const { refetch } = useNotes();

  const navigation = useNavigation();
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(false);

  const methods = useForm<SimpleNoteFormData | CheckNoteFormData>({
    resolver: zodResolver(
      active === 0 ? simpleNoteSchema : checkListNoteSchema,
    ),
    defaultValues:
      active === 0 ? SimpleNoteInitialsValues : CheckNoteInitialsValues,
  });

  const onSubmit = async (data: SimpleNoteFormData | CheckNoteFormData) => {
    setLoading(true);
    if (active === 0) {
      const simpleData = data as SimpleNoteFormData;
      await createSimpleNote(
        simpleData?.title,
        simpleData?.description,
        simpleData?.type,
        simpleData?.priority,
      );
    } else if (active === 1) {
      const checkData = data as CheckNoteFormData;
      await createCheckListNote(
        checkData?.title,
        checkData?.checkList,
        2,
        checkData?.priority,
      );
    }
    refetch();
    setLoading(false);
    navigation.goBack();
  };

  const onError = (errors: any) => {
    console.log('Validation errors:', errors);
  };

  const handleSave = () => {
    methods.handleSubmit(onSubmit, onError)();
  };

  return (
    <FormProvider {...methods}>
      <SafeAreaView style={styles.container}>
        <View style={styles.headingContainer}>
          <Pressable onPress={() => navigation.goBack()}>
            <X size={30} color={AppColors.heading} />
          </Pressable>
          <Text style={styles.title}>Add Notes</Text>
          <Pressable
            disabled={loading}
            style={styles.button}
            onPress={handleSave}
          >
            <GlowView size={50} color={AppColors.highlightColor} />

            {loading ? (
              <Text style={styles.textStyle}>Adding ...</Text>
            ) : (
              <Text style={styles.textStyle}>Add Note</Text>
            )}
          </Pressable>
        </View>

        <Tabs active={active} setActive={setActive} />

        {active === 0 ? (
          <General loading={loading} />
        ) : active === 1 ? (
          <CheckList loading={loading} />
        ) : (
          <Media />
        )}
      </SafeAreaView>
    </FormProvider>
  );
};

export default AddScreenNotes;
