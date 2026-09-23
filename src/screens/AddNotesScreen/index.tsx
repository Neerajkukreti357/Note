import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { X } from 'lucide-react-native';
import { General, GlowView, Media, Tabs } from '@/components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import CheckList from '@/components/checklist';
import {
  checkListNoteSchema,
  CheckNoteFormData,
  MediaNoteFormData,
  MediaNoteSchema,
  SimpleNoteFormData,
  simpleNoteSchema,
} from './shema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import {
  CheckNoteInitialsValues,
  MediaNoteInitialsValues,
  SimpleNoteInitialsValues,
} from './contant';
import {
  createCheckListNote,
  createMediaNote,
  createMediaNoteWithImage,
  createSimpleNote,
  updateNote,
} from '@/services/notesServices/createNotesServices';
import { useNotes } from '@/hooks/home';
import { useTheme } from '@/context/ThemeContext';
import createStyles from './style';
import { AddNoteRouteProp } from './type';
import { Note } from '@/store/type';
import { mapNoteToFormValues } from '@/utils/formValueHandler';

const AddScreenNotes = () => {
  const route = useRoute<AddNoteRouteProp>();
  const { item } = (route.params ?? {}) as { item?: Note };
  const { refetch } = useNotes();
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const [disbaled, setDisabledTab] = useState(false);

  const navigation = useNavigation();
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(false);

  const methods = useForm<
    SimpleNoteFormData | CheckNoteFormData | MediaNoteFormData
  >({
    resolver: zodResolver(
      active === 0
        ? simpleNoteSchema
        : active === 1
        ? checkListNoteSchema
        : MediaNoteSchema,
    ),
    defaultValues: SimpleNoteInitialsValues,
  });

  const onSubmit = async (
    data: SimpleNoteFormData | CheckNoteFormData | MediaNoteFormData,
  ) => {
    setLoading(true);
    try {
      if (active === 0) {
        const simpleData = data as SimpleNoteFormData;

        if (item) {
          await updateNote(item.id, {
            title: simpleData.title,
            description: simpleData.description,
            noteType: simpleData.type,
            priority: simpleData.priority,
            // clear fields that belong to other note types
          });
        } else {
          await createSimpleNote(
            simpleData.title,
            simpleData.description,
            simpleData.type,
            simpleData.priority,
          );
        }
      } else if (active === 1) {
        const checkData = data as CheckNoteFormData;

        if (item) {
          await updateNote(item.id, {
            title: checkData.title,
            checklist: checkData.checkList,
            noteType: 2,
            priority: checkData.priority,
          });
        } else {
          await createCheckListNote(
            checkData.title,
            checkData.checkList,
            2,
            checkData.priority,
          );
        }
      } else {
        const formData = data as MediaNoteFormData;

        if (formData.audioPath) {
          if (item) {
            await updateNote(item.id, {
              title: formData.title,
              description: formData.description,
              noteType: 3,
              priority: formData.priority,
              audio_path: formData.audioPath,
            });
          } else {
            await createMediaNote(
              formData.title,
              formData.description,
              3,
              formData.priority,
              formData.audioPath,
            );
          }
        } else if (formData.imageList && formData.imageList.length > 0) {
          const imageListStringify = JSON.stringify(formData.imageList);

          if (item) {
            await updateNote(item.id, {
              title: formData.title,
              description: formData.description,
              noteType: 4,
              priority: formData.priority,
              imageList: imageListStringify,
            });
          } else {
            await createMediaNoteWithImage(
              formData.title,
              formData.description,
              4,
              formData.priority,
              imageListStringify,
            );
          }
        } else {
          console.warn('Media note submitted with no audio or images');
        }
      }

      refetch();
      navigation.goBack();
    } catch (error) {
      console.error('Failed to save note:', error);
    } finally {
      setLoading(false);
    }
  };

  const onError = (errors: any) => {
    console.log('Validation errors:', errors);
  };

  const handleSave = () => {
    methods.handleSubmit(onSubmit, onError)();
  };

  const { reset } = methods;

  useEffect(() => {
    if (item) return;
    if (active === 0) {
      reset(SimpleNoteInitialsValues);
    } else if (active === 1) {
      reset(CheckNoteInitialsValues);
    } else {
      reset(MediaNoteInitialsValues);
    }
  }, [active, reset, item]);

  useEffect(() => {
    if (item) {
      const activeTabNumber = item?.noteType - 1;
      setActive(activeTabNumber);
      setDisabledTab(true);
      reset(mapNoteToFormValues(item, activeTabNumber));
    }
  }, [item, reset]);

  return (
    <FormProvider {...methods}>
      <SafeAreaView style={styles.container}>
        <View style={styles.headingContainer}>
          <Pressable onPress={() => navigation.goBack()}>
            <X size={30} color={colors.heading} />
          </Pressable>
          <Text style={styles.title}>{item ? 'Update' : 'Add'} Notes</Text>
          <Pressable
            disabled={loading}
            style={styles.button}
            onPress={handleSave}
          >
            <GlowView size={50} color={colors.highlightColor} />

            {loading ? (
              <Text style={styles.textStyle}>
                {item ? 'Updating ...' : 'Adding ...'} ...
              </Text>
            ) : (
              <Text style={styles.textStyle}>
                {item ? 'Update' : 'Add'} Note
              </Text>
            )}
          </Pressable>
        </View>

        <Tabs active={active} setActive={setActive} disbaled={disbaled} />

        {active === 0 ? (
          <General loading={loading} />
        ) : active === 1 ? (
          <CheckList loading={loading} />
        ) : (
          <Media loading={loading} />
        )}
      </SafeAreaView>
    </FormProvider>
  );
};

export default AddScreenNotes;
