import { ImagePlus, Mic, Pause } from 'lucide-react-native';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import styles from './styles';
import { useState } from 'react';
import { MediaNoteFormData } from '@/screens/AddNotesScreen/shema';
import { Controller, useFormContext } from 'react-hook-form';
import { CustomDropdown } from '../formComponents';
import { DropdownOptions } from '../general/constants';
import { AppColors } from '@/theme';
import TextEditor from '../TextEditor';
import commonStyle from '@/theme/commonStyles';
import { responsive } from '@/theme/responsive';
import MultipleCheckbox from '../formComponents/checkbox';

const Media = ({ loading }: { loading: boolean }) => {
  const [recording, setRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext<MediaNoteFormData>();
  function toggleRecording() {
    setRecording(value => !value);
    setSeconds(value => (recording ? value : value + 1));
  }

  const selected = watch('media');

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.mediaCard}>
        <Controller
          control={control}
          name="priority"
          render={({ field: { onChange, value } }) => (
            <CustomDropdown
              placeholder="Select priority"
              value={value}
              onChange={onChange}
              data={DropdownOptions}
              disable={loading}
            />
          )}
        />
        {errors.priority && (
          <Text style={commonStyle.errorTextColor}>
            {errors.priority.message}
          </Text>
        )}

        <Controller
          control={control}
          name="title"
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Title"
              style={styles.title}
              placeholderTextColor={AppColors.monthTextColor}
              value={value}
              onChangeText={onChange}
              aria-disabled={loading}
            />
          )}
        />
        {errors.title && (
          <Text style={commonStyle.errorTextColor}>{errors.title.message}</Text>
        )}

        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, value } }) => (
            <TextEditor
              value={value}
              onChange={onChange}
              loadingSubmission={loading}
              editorContainerStyle={{ height: responsive.height(200) }}
            />
          )}
        />
        {errors.description && (
          <Text style={commonStyle.errorTextColor}>
            {errors.description.message}
          </Text>
        )}
      </View>
      <View style={styles.mediaCard}>
        <Controller
          control={control}
          name="media"
          render={({ field: { onChange, value } }) => {
            const selectedValues = value || [];

            const handleMediaChange = (val: string[]) => {
              if (val.length > 0) {
                // Only allow one option
                onChange([val[val.length - 1]]);
              } else {
                onChange([]);
              }
            };

            return (
              <MultipleCheckbox
                options={[
                  { label: 'Audio', value: '1' },
                  { label: 'Images', value: '2' },
                ]}
                selectedValues={selectedValues}
                onChange={handleMediaChange}
              />
            );
          }}
        />

        {errors.media && (
          <Text style={[commonStyle.errorTextColor, { marginTop: 10 }]}>
            {errors.media.message}
          </Text>
        )}
      </View>
      {selected?.[0] === '1' ? (
        <View style={styles.mediaCard}>
          <Text style={styles.panelHeading}>Voice note</Text>
          <View style={styles.voice}>
            <View style={styles.wave}>
              {Array.from({ length: 17 }, (_, index) => (
                <View
                  key={index}
                  style={[styles.waveBar, { height: 9 + ((index * 11) % 23) }]}
                />
              ))}
            </View>
            <Text style={styles.timer}>
              00:{seconds.toString().padStart(2, '0')}
            </Text>
            <Pressable
              style={[styles.mic, recording && styles.recording]}
              onPress={toggleRecording}
            >
              {recording ? (
                <Pause color="#FFFFFF" size={21} fill="#FFFFFF" />
              ) : (
                <Mic color="#FFFFFF" size={21} />
              )}
            </Pressable>
            <Text style={styles.voiceHint}>
              {recording ? 'Recording...' : 'Tap to record'}
            </Text>
          </View>
        </View>
      ) : selected?.[0] === '2' ? (
        <View style={styles.mediaCard}>
          <Text style={styles.panelHeading}>Images</Text>
          <Pressable style={styles.upload}>
            <View style={styles.uploadIcon}>
              <ImagePlus color="#76D4F2" size={19} />
            </View>
            <Text style={styles.uploadText}>
              Drop an image or <Text style={styles.browse}>browse</Text>
            </Text>
            <Text style={styles.uploadHint}>PNG, JPG up to 10MB</Text>
          </Pressable>
          <View style={styles.thumbs}>
            <View style={styles.thumb}>
              <ImagePlus color="#768096" size={17} />
            </View>
            <View style={styles.thumb}>
              <ImagePlus color="#768096" size={17} />
            </View>
            <View style={styles.thumb}>
              <ImagePlus color="#768096" size={17} />
            </View>
          </View>
        </View>
      ) : null}
    </ScrollView>
  );
};

export default Media;
